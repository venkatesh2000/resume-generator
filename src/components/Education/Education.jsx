import NavButtons from "../NavButtons/NavButtons.jsx";

const Education = (props) => {
  const { step, setStep, maxSteps } = props;

  const handleNext = () => {};

  return (
    <div>
      EDUCATION HERE
      <NavButtons {...props} handleNext={handleNext} />
    </div>
  );
};

export default Education;
