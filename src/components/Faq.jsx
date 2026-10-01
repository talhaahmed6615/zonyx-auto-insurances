import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import './Faq.css';

const FAQS = [
  {
    q: 'What is a class of use, and why does it matter so much?',
    a: 'Your class of use describes what you do with the vehicle, social, commuting, business, courier work, or carrying passengers for payment. If you claim while driving outside the class on your policy, the insurer can refuse it. It is the single most common reason a motor claim gets declined, which is why we confirm it before the policy is issued.',
  },
  {
    q: 'Can comprehensive cover really be cheaper than third party?',
    a: 'Sometimes, yes. Insurers price on risk, and drivers who choose third party only have historically made more claims. That can push third party premiums above comprehensive for the same vehicle. We quote all three levels so you can see the actual numbers rather than assume.',
  },
  {
    q: 'How does no claims bonus work if I have a claim?',
    a: 'Each claim-free year usually adds a year of no claims bonus, up to a cap. A fault claim typically removes two years. No claims protection freezes your discount if you claim, though it does not stop your base premium rising at renewal.',
  },
  {
    q: 'Do I need to tell you about modifications?',
    a: 'Yes, anything that changes the vehicle from factory specification, including alloys, remaps, tow bars and suspension. Undeclared modifications can void a policy. Declaring them does not always increase the premium, and it removes the risk entirely.',
  },
  {
    q: 'I only have a provisional licence. Can you still help?',
    a: 'Yes. We arrange cover for provisional licence holders, and the policy is normally adjusted once you pass. Tell us at quote stage so the right product is used from the start.',
  },
  {
    q: 'What happens after I submit the quote form?',
    a: 'A specialist reviews your answers and calls you on the number you provided, usually the same working day. Nothing is bought automatically, and you will see the full policy wording before anything starts.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section section--plain">
      <div className="container">
        <div className="faq__layout">
          <div className="faq__intro reveal">
            <p className="eyebrow">Common questions</p>
            <h2>The things worth checking before you buy</h2>
            <p>
              Cannot see your question? Call us and ask, we would rather answer
              it now than at claim stage.
            </p>
          </div>

          <ul className="faq__list">
            {FAQS.map(({ q, a }, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      className="faq__question"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span>{q}</span>
                      <span className="faq__icon" aria-hidden="true">
                        {isOpen
                          ? <Minus size={16} strokeWidth={2.5} />
                          : <Plus size={16} strokeWidth={2.5} />}
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq__panel"
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    hidden={!isOpen}
                  >
                    <p>{a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
