import { Button } from "antd";
import { IoMdStar } from "react-icons/io";

const JobSeekers = () => {
  return (
    <div className="grid grid-cols-3 gap-5 text-white">
      {Array.from({
        length: 10,
      }).map((_x, i) => (
        <div key={i} className="relative h-[450px] overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover object-top"
            src="https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="absolute bottom-0 flex w-full flex-col items-center justify-center gap-3 rounded-t-[70px] bg-accent py-3 text-center">
            <h2 className="text-xl font-medium">Jacob A.</h2>
            <h5 className="text-sm text-gray-300">Web Developer</h5>
            <span className="flex items-center justify-center gap-1 text-xs">
              <IoMdStar />
              4.5
            </span>
            <p className="w-[70%] text-xs font-light">
              Creative professional crafting visuals that communicate ideas and aesthetics
            </p>
            <Button variant="outlined" size="small" className="rounded-xl px-4">
              Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobSeekers;
