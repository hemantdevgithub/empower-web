import { GiStarShuriken } from "react-icons/gi";

const InvertedRadius = () => {
  const usersImages = [
    "https://img.freepik.com/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206527.jpg",
    "https://img.freepik.com/premium-photo/portrait-happy-man-using-digital-tablet_107420-20998.jpg",
    "https://img.freepik.com/free-photo/portrait-smiling-businessman-holding-folder-with-documents_1262-12856.jpg",
  ];
  return (
    <div className="relative">
      <div className="absolute right-0 top-0 rounded-full bg-white p-3">
        <GiStarShuriken size={30} />
      </div>
      <div className="inverted-radius">
        <div className="flex items-end justify-between p-11">
          <div>
            <h3 className="text-[20px] font-semibold">
              Get a right place to invest and get your <br /> worldwide connections stronger
            </h3>
            <p className="mt-9 text-gray-500">
              Be among the first investors to experience the <br /> easiest way to build a <br /> connection.
            </p>
          </div>
          <div className="flex -space-x-2">
            {usersImages.map((img, i) => (
              <img key={i} src={img} alt={`user-${i + 1}`} className="h-8 w-8 rounded-full border-2 border-white" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvertedRadius;
