const data = [
  {
    section: "Entrepreneur Community",
    children: [
      {
        label: "Investor Entrepreneur Community",
        image: "",
      },
      {
        label: "Business Entrepreneur Community",
        image: "",
      },
      {
        label: "Supply Chain Entrepreneur Community",
        image: "",
      },
    ],
  },
  {
    section: "Service Providers",
    children: [
      {
        label: "Job Seekers",
        image: "",
      },
      {
        label: "Interviewers",
        image: "",
      },
      {
        label: "Specialty Consultants",
        image: "",
      },
    ],
  },
  {
    section: "Opportunities",
    children: [
      {
        label: "Job Opportunities",
        image: "",
      },
      {
        label: "Interviewers",
        image: "",
      },
      {
        label: "Specialty Consultants",
        image: "",
      },
    ],
  },
  {
    section: "Community",
    children: [
      {
        label: "Investor Community",
        image: "",
      },
      {
        label: "Business Community",
        image: "",
      },
      {
        label: "Supply Chain Community",
        image: "",
      },
    ],
  },
  {
    section: "Customers",
    children: [
      {
        label: "Job Seekers",
        image: "",
      },
      {
        label: "Recruiters",
        image: "",
      },
      {
        label: "Project Delivery Managers",
        image: "",
      },
    ],
  },
  {
    section: "Roles",
    children: [
      {
        label: "Job Seekers",
        image: "",
      },
      {
        label: "Interviewers",
        image: "",
      },
      {
        label: "Specialty Consultants",
        image: "",
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
            {children.map(({ label }, i) => (
              <div key={i} className="group space-y-3">
                <div className="h-[200px] cursor-pointer overflow-hidden rounded-2xl">
                  <img
                    className="duration-300 group-hover:scale-110"
                    src="https://www.yourtango.com/sites/default/files/image_blog/job-seeker-with-ten-years-experience-can-not-get-hired-despite-sending-out-five-hundred-applications.png"
                    alt={label}
                  />
                </div>
                <h2>{label}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchLanding;
