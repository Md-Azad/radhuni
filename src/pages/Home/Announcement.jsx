import bgImg from "../../assets/home/featured.jpg";
const Announcement = () => {
  return (
    <div className=" mx-4 md:mx-0 mt-12 relative h-[320px] md:h-[420px]">
      <img className="h-full w-full" src={bgImg} alt="" />
      <div className="w-full md:w-9/12 h-3/5 text-center bg-white bg-opacity-70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="mt-4 md:mt-12 px-2 md:px-24 overflow-hidden ">
          <h1 className="uppercase text-2xl md:text-4xl">Announcment</h1>
          <p className="text-center md:text-left  text-wrap ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quas, vel ipsam voluptate nostrum nihil nobis velit pariatur fuga
            dolorum delectus quia voluptas quae sunt totam fugit suscipit.
            Voluptatum, necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
