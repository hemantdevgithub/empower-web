import { Link } from "react-router-dom";

const data = [
  {
    section: "Entrepreneur Community",
    children: [
      {
        label: "Investor Entrepreneur Community",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Business Entrepreneur Community",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Supply Chain Entrepreneur Community",
        image: "",
        href: "/search/job-seekers",
      },
    ],
  },
  {
    section: "Service Providers",
    children: [
      {
        label: "Job Seekers",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Interviewers",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Specialty Consultants",
        image: "",
        href: "/search/job-seekers",
      },
    ],
  },
  {
    section: "Opportunities",
    children: [
      {
        label: "Job Opportunities",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Interviewers",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Specialty Consultants",
        image: "",
        href: "/search/job-seekers",
      },
    ],
  },
  {
    section: "Community",
    children: [
      {
        label: "Investor Community",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Business Community",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Supply Chain Community",
        image: "",
        href: "/search/job-seekers",
      },
    ],
  },
  {
    section: "Customers",
    children: [
      {
        label: "Job Seekers",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Recruiters",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Project Delivery Managers",
        image: "",
        href: "/search/job-seekers",
      },
    ],
  },
  {
    section: "Roles",
    children: [
      {
        label: "Job Seekers",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Interviewers",
        image: "",
        href: "/search/job-seekers",
      },
      {
        label: "Specialty Consultants",
        image: "",
        href: "/search/job-seekers",
      },
    ],
  },
];

const SearchLanding = () => {
  return (
    <div className="space-y-5 text-white">
      {data.map(({ section, children }, i) => (
        <div key={i} className="space-y-3">
          <h4 className="text-xl">{section}</h4>
          <div className="grid grid-cols-3 gap-5">
            {children.map(({ label, href }, i) => (
              <Link to={href} key={i} className="group space-y-3">
                <div className="h-[200px] cursor-pointer overflow-hidden rounded-2xl">
                  <img
                    className="duration-300 group-hover:scale-110"
                    src="https://www.yourtango.com/sites/default/files/image_blog/job-seeker-with-ten-years-experience-can-not-get-hired-despite-sending-out-five-hundred-applications.png"
                    alt={label}
                  />
                </div>
                <h2>{label}</h2>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchLanding;
