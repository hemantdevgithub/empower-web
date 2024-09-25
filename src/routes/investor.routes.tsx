import InvestorDashboard from "@/pages/investor/dashboard";

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
        name: "Sub Item 1",
        path: "sub-item-1",
        element: <p>Sub Item 1</p>,
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
