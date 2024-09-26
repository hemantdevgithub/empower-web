import InvestorDashboard from "@/pages/investor/dashboard";
import Teams from "@/pages/teams/teams";

export const investorPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <InvestorDashboard />,
  },
  {
    name: "Main Item 2",
    children: [
      {
        name: "Teams",
        path: "teams",
        element: <Teams />,
      },
      {
        name: "Sub Item ",
        path: "sub-item-2",
        element: <p>Sub Item 2</p>,
      },
      {
        name: "Sub Item 3",
        path: "sub-item-3",
        element: <p>Sub Item 3</p>,
      },
    ],
  },
];
