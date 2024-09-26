import image1 from "/image-1.png";
import image2 from "/image.png";
import image3 from "/image 721.png";

const SupplyChainCard = () => {
  return (
    <div className="aspect-[100/63] space-y-6 rounded-[20px] bg-accent p-9">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-lg font-[500px] text-white">Supply Chain Entrepreneur Community</h2> <br /> <br />
          <h2 className="text-2xl font-semibold text-white">
            This <br /> community <br /> brings <br /> together <br />{" "}
            <span className="text-secondary">entrepreneurs</span>.
          </h2>
        </div>

        <div className="w-[40%] space-y-2">
          <div>
            <img src={image1} alt="image1" className="rounded-[20px]" />
          </div>

          <div className="rounded-[20px] bg-secondary-gradient p-2">
            <div className="flex">
              <span className="text-xs text-white">PLATFORM TO</span>
              <img src={image2} alt="image2" className="h-[22px] rounded-[20px]" />
            </div>
            <div>
              <div className="flex gap-1">
                <div className="h-[22px] w-[72px] rounded-full border border-white" />
                <p className="text-white">CONNECT</p>
              </div>
              <p className="text-white">WITH EACH-OTHER.</p>
            </div>
          </div>

          <div className="rounded-[20px] bg-[#202541]">
            <img src={image3} alt="image3" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainCard;
