const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 text-center mx-auto my-8">
      <p className="text-yellow-600 mb-4">---{subHeading}---</p>
      <h2 className="text-3xl uppercase border-y-4 my-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
