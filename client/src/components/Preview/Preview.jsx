import NavButtons from "../NavButtons/NavButtons.jsx";

const Preview = (props) => {
  const { step, setStep, maxSteps, html, resume, handleDownload } = props;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />;
      <NavButtons
        step={step}
        setStep={setStep}
        maxSteps={maxSteps}
        resume={resume}
        handleDownload={handleDownload}
      />
    </div>
  );
};

export default Preview;
