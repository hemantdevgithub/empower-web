import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = [
  {
    img: "/add/investment.png",
    heading: "Add an investment to maximize returns",
    tagLine: "Invest here",
    label: "Add investment",
    href: "/add/add-customer",
  },
  {
    img: "/add/customer.png",
    heading: "Looking for customer?",
    tagLine: "Add Customer here",
    label: "Add customer",
    href: "/add/add-customer",
  },
  {
    img: "/add/opportunities.png",
    heading: "Add more opportunities",
    tagLine: "Add opportunities here",
    label: "Add opportunities",
    href: "/add/add-customer",
  },
  {
    img: "/add/service-provider.png",
    heading: "Want to add a Service Provider ?",
    tagLine: "Add service provider here",
    label: "Add service Provider",
    href: "/add/add-service-provider",
  },
];

const AddLanding = () => {
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center text-white">
      <div className="grid grid-cols-2 gap-5">
        {data.map(({ heading, href, tagLine, label, img }, i) => (
          <Link to={href} key={i} className={`relative w-[380px] overflow-hidden rounded-2xl bg-accent`}>
            <img src={img} alt={tagLine} className="h-full w-full" />
            <div className="absolute right-0 top-0 flex h-full w-full flex-col justify-between gap-3 p-7">
              <h1 className="w-[60%] text-xl">{heading}</h1>
              <h6 className="text-sm text-white">{tagLine}</h6>
              <button className="flex w-fit items-center gap-3 rounded-md bg-secondary-gradient px-5 py-2">
                <span>{label}</span>
                <FaArrowRightLong />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AddLanding;
