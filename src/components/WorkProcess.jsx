import './WorkProcess.css';

const STEPS = [
  {
    number: '1',
    title: 'Tell us about the vehicle',
    body: 'Seven short questions covering the vehicle, your licence and how you use it. Around three minutes.',
  },
  {
    number: '2',
    title: 'We search the market',
    body: 'A specialist compares cover levels and extras across our panel, then calls you with the options that fit.',
  },
  {
    number: '3',
    title: 'You go on cover',
    body: 'Read the wording, ask anything, and start the policy when you are ready. Documents arrive by email.',
  },
];

const WorkProcess = () => {
  return (
    <section className="section section--plain">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">How it works</p>
          <h2>Three steps from question to cover</h2>
        </div>

        <ol className="steps">
          {STEPS.map(({ number, title, body }) => (
            <li key={number} className="steps__item reveal">
              <span className="steps__number" aria-hidden="true">{number}</span>
              <h3>
                <span className="visually-hidden">Step {number}: </span>
                {title}
              </h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WorkProcess;
