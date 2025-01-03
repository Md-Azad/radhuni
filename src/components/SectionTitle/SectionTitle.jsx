const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-2/3 md:w-4/12 text-center mx-auto my-8">
      <p className="text-yellow-600 mb-4">---{subHeading}---</p>
      <h2 className="text-3xl uppercase border-y-4 my-4 text-yellow-700 md:text-black">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
