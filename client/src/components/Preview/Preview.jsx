import NavButtons from "../NavButtons/NavButtons.jsx";

const Preview = (props) => {
  const { resume, setResume, step, setStep, maxSteps, pdf } = props;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: pdf }} />
      <NavButtons
        resume={resume}
        setResume={setResume}
        step={step}
        setStep={setStep}
        maxSteps={maxSteps}
      />
    </div>
  );
};

export default Preview;
