import NavButtons from "../NavButtons/NavButtons.jsx";

const Preview = (props) => {
  const { step, setStep, maxSteps, pdf, resume } = props;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: pdf }} />;
      <NavButtons
        step={step}
        setStep={setStep}
        maxSteps={maxSteps}
        resume={resume}
      />
    </div>
  );
};

export default Preview;
