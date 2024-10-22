import backgroundCircle from "/circle-bg.png";
import image1 from "/image-5.png";
import image2 from "/image-6.png";
import image3 from "/image-7.png";
import image4 from "/image-8.png";

const ConnectSourcesCard = () => {
  return (
    <div className="space-y-6 rounded-[20px] bg-accent p-9">
      <h2 className="text-lg font-[500px] text-white">References</h2>
      <h1 className="text-center text-2xl text-white">
        Connect <span className="text-secondary">Sources</span>
      </h1>
      <div>
        <div className="relative">
          <img src={backgroundCircle} alt="BackgroundCircle" className="absolute -bottom-[254px]" />
          <img src={image1} alt="image1" className="absolute left-12 top-[180px] h-14 w-14" />
          <img src={image3} alt="image3" className="absolute right-12 top-[180px] h-14 w-14" />
          <img src={image2} alt="image2" className="absolute left-[120px] top-[120px] h-8 w-8" />
          <img src={image4} alt="image4" className="absolute right-[120px] top-[120px] h-8 w-8" />

          <div className="absolute inset-x-32 inset-y-48 w-full">
            <button className="rounded-full bg-secondary-gradient px-3 py-2 text-xs text-white">
              Connect people <br /> through this.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSourcesCard;
