import { Parallax, Background } from "react-parallax";

const Cover = ({ coverImg, hight, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className={`hero `}
        style={{
          height: `${window.innerWidth < 462 ? 300 : hight}px`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-2/3 hero-content text-neutral-content text-center bg-black bg-opacity-40 py-4 md:py-12 ">
          <div>
            <h1 className="mb-5 text-2xl md:text-5xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
