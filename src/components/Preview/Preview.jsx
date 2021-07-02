import NavButtons from "../NavButtons/NavButtons.jsx";

const Preview = (props) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props["html"] }} />;
      <NavButtons {...props} validateInfo={() => {}} />
    </div>
  );
};

export default Preview;
