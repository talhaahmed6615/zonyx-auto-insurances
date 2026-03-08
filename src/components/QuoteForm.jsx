import { useState } from 'react';
import { Car, Bike, Truck, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import './QuoteForm.css';

const QuoteForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    vehicleType: '',
    // Step 2
    usage: '',
    // Step 3
    licenseType: '',
    // Step 4
    fullName: '',
    dob: '',
    age: '',
    licenseHeldDuration: '',
    claimsLast5Years: '',
    // Step 5
    registration: '',
    make: '',
    model: '',
    year: '',
    // Step 6
    currentlyInsured: '',
    noClaimsBonus: '',
    // Step 7
    phone: '',
    email: '',
    city: ''
  });

  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/abdullahfida645@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            ...formData,
            _subject: "New Zonyx Auto Insurance Detailed Lead!"
        })
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="form-step-content">
            <h3>Step 1: Vehicle Type</h3>
            <p>What vehicle do you want insurance for?</p>
            <div className="option-grid">
              {['Car', 'Bike', 'Van'].map((type) => (
                <div 
                  key={type} 
                  className={`option-card ${formData.vehicleType === type ? 'selected' : ''}`}
                  onClick={() => {
                    setFormData({...formData, vehicleType: type});
                    nextStep();
                  }}
                >
                  {type === 'Car' && <Car size={32} />}
                  {type === 'Bike' && <Bike size={32} />}
                  {type === 'Van' && <Truck size={32} />}
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step-content">
            <h3>Step 2: Vehicle Use</h3>
            <p>What will the vehicle be used for?</p>
            <div className="option-list">
              {[
                'Social', 'Social & Commuting', 'Food Delivery', 
                'Parcel Delivery', 'Courier', 'Business Use', 
                'Hire & Reward', 'Taxi'
              ].map((usage) => (
                <div 
                  key={usage} 
                  className={`list-option ${formData.usage === usage ? 'selected' : ''}`}
                  onClick={() => {
                    setFormData({...formData, usage: usage});
                    nextStep();
                  }}
                >
                  {usage}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step-content">
            <h3>Step 3: Driving License</h3>
            <p>Which driving license do you hold?</p>
            <div className="option-list">
              {[
                'UK Driving License', 'UK Provisional License', 
                'EU Driving License', 'International Driving License'
              ].map((license) => (
                <div 
                  key={license} 
                  className={`list-option ${formData.licenseType === license ? 'selected' : ''}`}
                  onClick={() => {
                    setFormData({...formData, licenseType: license});
                    nextStep();
                  }}
                >
                  {license}
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-step-content">
            <h3>Step 4: Driver Information</h3>
            <div className="input-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
              </div>
            </div>
            <div className="input-row">
              <div className="form-group">
                <label>Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="25" required />
              </div>
              <div className="form-group">
                <label>How Long Held License (Years)</label>
                <input type="number" name="licenseHeldDuration" value={formData.licenseHeldDuration} onChange={handleChange} placeholder="5" required />
              </div>
            </div>
            <div className="form-group">
              <label>Any Claims in the Last 5 Years?</label>
              <select name="claimsLast5Years" value={formData.claimsLast5Years} onChange={handleChange} required>
                <option value="">Select Option</option>
                <option value="No">No</option>
                <option value="Yes - 1">Yes - 1</option>
                <option value="Yes - 2">Yes - 2</option>
                <option value="Yes - 3+">Yes - 3+</option>
              </select>
            </div>
            <div className="step-nav">
              <button type="button" onClick={prevStep} className="back-btn"><ArrowLeft size={20} /> Back</button>
              <button type="button" onClick={nextStep} className="next-btn" disabled={!formData.fullName}>Next <ArrowRight size={20} /></button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="form-step-content">
            <h3>Step 5: Vehicle Information</h3>
            <div className="form-group">
              <label>Vehicle Registration Number</label>
              <input type="text" name="registration" value={formData.registration} onChange={handleChange} placeholder="AB12 CDE" required />
            </div>
            <div className="input-row">
              <div className="form-group">
                <label>Vehicle Make</label>
                <input type="text" name="make" value={formData.make} onChange={handleChange} placeholder="Toyota" required />
              </div>
              <div className="form-group">
                <label>Vehicle Model</label>
                <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Yaris" required />
              </div>
            </div>
            <div className="form-group">
              <label>Vehicle Year</label>
              <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="2020" required />
            </div>
            <div className="step-nav">
              <button type="button" onClick={prevStep} className="back-btn"><ArrowLeft size={20} /> Back</button>
              <button type="button" onClick={nextStep} className="next-btn" disabled={!formData.registration}>Next <ArrowRight size={20} /></button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="form-step-content">
            <h3>Step 6: Insurance History</h3>
            <div className="form-group">
              <label>Do you currently have insurance?</label>
              <select name="currentlyInsured" value={formData.currentlyInsured} onChange={handleChange} required>
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label>No Claims Bonus? (Years)</label>
              <input type="number" name="noClaimsBonus" value={formData.noClaimsBonus} onChange={handleChange} placeholder="0" required />
            </div>
            <div className="step-nav">
              <button type="button" onClick={prevStep} className="back-btn"><ArrowLeft size={20} /> Back</button>
              <button type="button" onClick={nextStep} className="next-btn" disabled={!formData.currentlyInsured}>Next <ArrowRight size={20} /></button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="form-step-content">
            <h3>Step 7: Contact Details</h3>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7000 000000" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>City in the UK</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="London" required />
            </div>
            <div className="step-nav">
              <button type="button" onClick={prevStep} className="back-btn"><ArrowLeft size={20} /> Back</button>
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Submit Quote Request'}
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
      <section className="quote-section">
        <div className="success-card fade-in">
          <CheckCircle2 size={100} color="#FFFFFF" strokeWidth={1} />
          <h2>Lead Received!</h2>
          <p>Thank you, {formData.fullName}. Your insurance request has been sent to our agents. We will contact you at {formData.phone} or {formData.email} shortly.</p>
          <button onClick={() => {setStatus(''); setStep(1); setFormData({});}} className="reset-btn">Request Another Quote</button>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="quote-section">
      <div className="quote-container">
        <div className="quote-header fade-in">
          <h2>Insurance Quote Request Form</h2>
          <p>Complete our quick 7-step digital form to get precise insurance rates tailored to your specific vehicle and history.</p>
          
          <div className="progress-bar-container">
            <div className="progress-text">Step {step} of 7</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(step / 7) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <div className="detailed-form-wrapper fade-in">
          <form onSubmit={handleSubmit}>
            {renderStep()}
          </form>
          {status === 'error' && <div className="status-msg error">Oops! Something went wrong. Please try again.</div>}
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
