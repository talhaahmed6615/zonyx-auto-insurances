import { useState } from 'react';
import { Car, Bike, Truck, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import './QuoteForm.css';

const TOTAL_STEPS = 7;
const ENDPOINT = 'https://formsubmit.co/ajax/info@zonyxautoinsurance.com';

const INITIAL_FORM = {
  vehicleType: '',
  usage: '',
  licenseType: '',
  fullName: '',
  dob: '',
  age: '',
  licenseHeldDuration: '',
  claimsLast5Years: '',
  registration: '',
  make: '',
  model: '',
  year: '',
  currentlyInsured: '',
  noClaimsBonus: '',
  phone: '',
  email: '',
  city: '',
};

const VEHICLES = [
  { value: 'Car', Icon: Car },
  { value: 'Bike', Icon: Bike },
  { value: 'Van', Icon: Truck },
];

const USAGE_OPTIONS = [
  'Social', 'Social & Commuting', 'Food Delivery', 'Parcel Delivery',
  'Courier', 'Business Use', 'Hire & Reward', 'Taxi', 'Not Sure Yet',
];

const LICENSE_OPTIONS = [
  'UK Driving License', 'UK Provisional License',
  'EU Driving License', 'International Driving License', 'Not Sure Yet',
];

const currentYear = new Date().getFullYear();
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Whole years between a date string and today. */
const yearsSince = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return '';
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  const monthDelta = now.getMonth() - date.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < date.getDate())) years -= 1;
  return years >= 0 ? String(years) : '';
};

/**
 * Per-step validation. Each step unmounts once you move past it, so the
 * browser's own `required` checks never fire for earlier steps — everything
 * has to be checked here or incomplete leads get submitted.
 */
const validateStep = (step, data) => {
  const errors = {};
  const required = (field, message) => {
    if (!String(data[field] ?? '').trim()) errors[field] = message;
  };

  if (step === 1) required('vehicleType', 'Choose a vehicle type.');
  if (step === 2) required('usage', 'Choose how the vehicle is used.');
  if (step === 3) required('licenseType', 'Choose your license type.');

  if (step === 4) {
    required('fullName', 'Please enter your full name.');
    required('dob', 'Please enter your date of birth.');
    required('claimsLast5Years', 'Please select an option.');

    const age = Number(data.age);
    if (data.dob && (!age || age < 16)) {
      errors.dob = 'Drivers must be at least 16 years old.';
    } else if (data.dob && age > 110) {
      errors.dob = 'Please check the date of birth.';
    }

    const heldYears = Number(data.licenseHeldDuration);
    if (!String(data.licenseHeldDuration).trim()) {
      errors.licenseHeldDuration = 'Please enter a number of years.';
    } else if (heldYears < 0 || heldYears > 80) {
      errors.licenseHeldDuration = 'Please enter a value between 0 and 80.';
    }
  }

  if (step === 5) {
    required('registration', 'Please enter the registration number.');
    required('make', 'Please enter the vehicle make.');
    required('model', 'Please enter the vehicle model.');

    const year = Number(data.year);
    if (!String(data.year).trim()) {
      errors.year = 'Please enter the vehicle year.';
    } else if (year < 1900 || year > currentYear + 1) {
      errors.year = 'Please enter a year between 1900 and ' + (currentYear + 1) + '.';
    }
  }

  if (step === 6) {
    required('currentlyInsured', 'Please select an option.');
    const ncb = Number(data.noClaimsBonus);
    if (!String(data.noClaimsBonus).trim()) {
      errors.noClaimsBonus = 'Please enter a number of years (0 if none).';
    } else if (ncb < 0 || ncb > 30) {
      errors.noClaimsBonus = 'Please enter a value between 0 and 30.';
    }
  }

  if (step === 7) {
    if (!PHONE_PATTERN.test(data.phone.trim())) {
      errors.phone = 'Please enter a valid phone number.';
    }
    if (!EMAIL_PATTERN.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    required('city', 'Please enter your city.');
  }

  return errors;
};

const QuoteForm = ({ startVehicle = null }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'

  // The hero's vehicle picker seeds step 1 and drops the user straight into
  // step 2. Adjusted during render rather than in an effect so there is no
  // extra commit and no flash of the wrong step.
  const [lastStartVehicle, setLastStartVehicle] = useState(startVehicle);
  if (startVehicle !== lastStartVehicle) {
    setLastStartVehicle(startVehicle);
    if (startVehicle) {
      setFormData((prev) => ({ ...prev, vehicleType: startVehicle }));
      setErrors({});
      setStep(2);
      setStatus('');
    }
  }

  const setField = (name, value) => {
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      // Age is derived so it can never contradict the date of birth.
      if (name === 'dob') next.age = yearsSince(value);
      return next;
    });
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleChange = (e) => setField(e.target.name, e.target.value);

  /** Records a choice and moves on, for the tap-to-select steps. */
  const chooseAndAdvance = (name, value) => {
    setField(name, value);
    setErrors({});
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const goNext = () => {
    const stepErrors = validateStep(step, formData);
    if (Object.keys(stepErrors).length) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const goBack = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const resetForm = () => {
    setStatus('');
    setStep(1);
    setErrors({});
    // Reset to the full shape — an empty object would flip every controlled
    // input to uncontrolled and warn.
    setFormData(INITIAL_FORM);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pressing Enter in any field fires submit, even on steps with no submit
    // button. Treat that as "next" rather than sending a half-filled request.
    if (step < TOTAL_STEPS) {
      goNext();
      return;
    }

    const stepErrors = validateStep(TOTAL_STEPS, formData);
    if (Object.keys(stepErrors).length) {
      setErrors(stepErrors);
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Zonyx Auto Insurance quote request',
        }),
      });

      setStatus(response.ok ? 'success' : 'error');
    } catch (error) {
      console.error('Quote submission failed:', error);
      setStatus('error');
    }
  };

  const fieldProps = (name) => ({
    name,
    value: formData[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? name + '-error' : undefined,
    className: errors[name] ? 'has-error' : undefined,
  });

  const FieldError = ({ name }) =>
    errors[name] ? (
      <p className="field-error" id={name + '-error'}>
        <AlertCircle size={15} aria-hidden="true" /> {errors[name]}
      </p>
    ) : null;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step-content">
            <h3>Step 1: Vehicle Type</h3>
            <p className="step-lede">What vehicle do you want insurance for?</p>
            <div className="option-grid">
              {VEHICLES.map(({ value, Icon }) => (
                <button
                  type="button"
                  key={value}
                  className={`option-card ${formData.vehicleType === value ? 'selected' : ''}`}
                  aria-pressed={formData.vehicleType === value}
                  onClick={() => chooseAndAdvance('vehicleType', value)}
                >
                  <Icon size={30} aria-hidden="true" />
                  <span>{value}</span>
                </button>
              ))}
            </div>
            <FieldError name="vehicleType" />
          </div>
        );

      case 2:
        return (
          <div className="form-step-content">
            <h3>Step 2: Vehicle Use</h3>
            <p className="step-lede">What will the vehicle be used for?</p>
            <div className="option-list">
              {USAGE_OPTIONS.map((usage) => (
                <button
                  type="button"
                  key={usage}
                  className={`list-option ${formData.usage === usage ? 'selected' : ''}`}
                  aria-pressed={formData.usage === usage}
                  onClick={() => chooseAndAdvance('usage', usage)}
                >
                  {usage}
                </button>
              ))}
            </div>
            <div className="step-nav">
              <button type="button" onClick={goBack} className="back-btn">
                <ArrowLeft size={18} aria-hidden="true" /> Back
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-step-content">
            <h3>Step 3: Driving License</h3>
            <p className="step-lede">Which driving license do you hold?</p>
            <div className="option-list">
              {LICENSE_OPTIONS.map((license) => (
                <button
                  type="button"
                  key={license}
                  className={`list-option ${formData.licenseType === license ? 'selected' : ''}`}
                  aria-pressed={formData.licenseType === license}
                  onClick={() => chooseAndAdvance('licenseType', license)}
                >
                  {license}
                </button>
              ))}
            </div>
            <div className="step-nav">
              <button type="button" onClick={goBack} className="back-btn">
                <ArrowLeft size={18} aria-hidden="true" /> Back
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="form-step-content">
            <h3>Step 4: Driver Information</h3>
            <div className="input-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" autoComplete="name" placeholder="John Doe" {...fieldProps('fullName')} />
                <FieldError name="fullName" />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  id="dob"
                  type="date"
                  autoComplete="bday"
                  max={new Date().toISOString().slice(0, 10)}
                  {...fieldProps('dob')}
                />
                <FieldError name="dob" />
              </div>
            </div>
            <div className="input-row">
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  id="age"
                  name="age"
                  type="text"
                  readOnly
                  value={formData.age}
                  placeholder="—"
                  className="is-readonly"
                />
                <p className="field-hint">Calculated from your date of birth.</p>
              </div>
              <div className="form-group">
                <label htmlFor="licenseHeldDuration">Licence Held (Years)</label>
                <input
                  id="licenseHeldDuration"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  max="80"
                  placeholder="5"
                  {...fieldProps('licenseHeldDuration')}
                />
                <FieldError name="licenseHeldDuration" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="claimsLast5Years">Any Claims in the Last 5 Years?</label>
              <select id="claimsLast5Years" {...fieldProps('claimsLast5Years')}>
                <option value="">Select Option</option>
                <option value="No">No</option>
                <option value="Yes, 1">Yes, 1</option>
                <option value="Yes, 2">Yes, 2</option>
                <option value="Yes, 3+">Yes, 3+</option>
              </select>
              <FieldError name="claimsLast5Years" />
            </div>
            <div className="step-nav">
              <button type="button" onClick={goBack} className="back-btn">
                <ArrowLeft size={18} aria-hidden="true" /> Back
              </button>
              <button type="button" onClick={goNext} className="next-btn">
                Next <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="form-step-content">
            <h3>Step 5: Vehicle Information</h3>
            <div className="form-group">
              <label htmlFor="registration">Vehicle Registration Number</label>
              <input id="registration" type="text" placeholder="AB12 CDE" autoCapitalize="characters" {...fieldProps('registration')} />
              <FieldError name="registration" />
            </div>
            <div className="input-row">
              <div className="form-group">
                <label htmlFor="make">Vehicle Make</label>
                <input id="make" type="text" placeholder="Toyota" {...fieldProps('make')} />
                <FieldError name="make" />
              </div>
              <div className="form-group">
                <label htmlFor="model">Vehicle Model</label>
                <input id="model" type="text" placeholder="Yaris" {...fieldProps('model')} />
                <FieldError name="model" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="year">Vehicle Year</label>
              <input
                id="year"
                type="number"
                inputMode="numeric"
                min="1900"
                max={currentYear + 1}
                placeholder="2020"
                {...fieldProps('year')}
              />
              <FieldError name="year" />
            </div>
            <div className="step-nav">
              <button type="button" onClick={goBack} className="back-btn">
                <ArrowLeft size={18} aria-hidden="true" /> Back
              </button>
              <button type="button" onClick={goNext} className="next-btn">
                Next <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="form-step-content">
            <h3>Step 6: Insurance History</h3>
            <div className="form-group">
              <label htmlFor="currentlyInsured">Do you currently have insurance?</label>
              <select id="currentlyInsured" {...fieldProps('currentlyInsured')}>
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <FieldError name="currentlyInsured" />
            </div>
            <div className="form-group">
              <label htmlFor="noClaimsBonus">No Claims Bonus (Years)</label>
              <input id="noClaimsBonus" type="number" inputMode="numeric" min="0" max="30" placeholder="0" {...fieldProps('noClaimsBonus')} />
              <FieldError name="noClaimsBonus" />
            </div>
            <div className="step-nav">
              <button type="button" onClick={goBack} className="back-btn">
                <ArrowLeft size={18} aria-hidden="true" /> Back
              </button>
              <button type="button" onClick={goNext} className="next-btn">
                Next <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="form-step-content">
            <h3>Step 7: Contact Details</h3>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+44 7000 000000" {...fieldProps('phone')} />
              <FieldError name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" inputMode="email" autoComplete="email" placeholder="john@example.com" {...fieldProps('email')} />
              <FieldError name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City in the UK</label>
              <input id="city" type="text" autoComplete="address-level2" placeholder="London" {...fieldProps('city')} />
              <FieldError name="city" />
            </div>
            <div className="step-nav">
              <button type="button" onClick={goBack} className="back-btn">
                <ArrowLeft size={18} aria-hidden="true" /> Back
              </button>
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit Quote Request'}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (status === 'success') {
    return (
      <section id="quote" className="section quote-section">
        <div className="container success-card">
          <CheckCircle2 size={72} strokeWidth={1.25} aria-hidden="true" />
          <h2>Request Received</h2>
          <p>
            Thank you{formData.fullName ? ', ' + formData.fullName : ''}. Your insurance
            request has been sent to our agents. We will contact you at{' '}
            <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> shortly.
          </p>
          <button type="button" onClick={resetForm} className="reset-btn">
            Request Another Quote
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="section quote-section">
      <div className="container quote-container">
        <div className="quote-header">
          <p className="eyebrow">Get a quote</p>
          <h2>Tell us about you and the vehicle</h2>
          <p>
            Seven short steps, around three minutes. A specialist reviews every
            answer before calling you back.
          </p>

          <div className="progress-bar-container">
            <p className="progress-text">Step {step} of {TOTAL_STEPS}</p>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={step}
              aria-valuemin={1}
              aria-valuemax={TOTAL_STEPS}
              aria-label="Quote form progress"
            >
              <div className="progress-fill" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="detailed-form-wrapper">
          <form onSubmit={handleSubmit} noValidate>
            {renderStep()}
          </form>

          {status === 'error' && (
            <p className="status-msg error" role="alert">
              <AlertCircle size={18} aria-hidden="true" />
              Something went wrong sending your request. Please try again, or email
              info@zonyxautoinsurance.com.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
