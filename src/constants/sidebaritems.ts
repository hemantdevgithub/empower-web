export const sidebarItems = [
  { id: 1, label: "Dashboard", redirect: "/dashboard" },
  { id: 2, label: "Social Mission", redirect: "/social-mission" },
  {
    id: 3,
    label: "Root Office",
    redirect: "/root-office",
    subMenu: [
      { id: 1, label: "Lessons", redirect: "/lessons" },
      { id: 2, label: "Quizzes", redirect: "/quizzes" },
      { id: 3, label: "Polls", redirect: "/polls" },
      { id: 4, label: "Podcasts", redirect: "/podcasts" },
      { id: 5, label: "Webcasts", redirect: "/webcasts" },
      { id: 6, label: "Articles", redirect: "/articles" },
      {
        id: 7,
        label: "Q & A Audio",
        redirect: "/q-and-a-audio",
      },
      { id: 8, label: "Webinars", redirect: "/webinars" },
      {
        id: 9,
        label: "VIP Networking",
        redirect: "/vip-networking",
      },
    ],
  },
  {
    id: 4,
    label: "Front Office",
    redirect: "/front-office",
    subMenu: [
      {
        id: 1,
        label: "Business Development",
        redirect: "/business-development",
      },
    ],
  },
  {
    id: 5,
    label: "Back Office",
    redirect: "/back-office",
    subMenu: [
      { id: 1, label: "Supply Chain", redirect: "/supply-chain" },
      { id: 2, label: "Operations", redirect: "/operations" },
      { id: 1, label: "HR", redirect: "/human-resource" },
      { id: 1, label: "Own & Operate", redirect: "/own-and-operate" },
    ],
  },
  {
    id: 6,
    label: "Top Office",
    redirect: "/top-office",
    subMenu: [
      {
        id: 1,
        label: "Strategy",
        redirect: "/strategy",
      },
      {
        id: 1,
        label: "Legal",
        redirect: "/legal",
      },
      {
        id: 1,
        label: "Finance",
        redirect: "/finance",
      },
      {
        id: 1,
        label: "Impact Invest",
        redirect: "/impact-invest",
      },
      {
        id: 1,
        label: "Merger & Acquisition",
        redirect: "/merger-and-acquisition",
      },
    ],
  },
];
