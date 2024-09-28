import InvestorDashboard from "@/pages/investor/dashboard";
import InvestorEntrepreneurCommunity from "@/pages/investorEntrepreneurCommunity/investorEntrepreneurCommunity";
import Teams from "@/pages/teams/teams";
import { DiGoogleAnalytics } from "react-icons/di";
import { PiFolderUserDuotone } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";

export const investorPaths = [
  {
    name: "Portfolio",
    icon: PiFolderUserDuotone,
    children: [
      {
        name: "Performance",
        path: "performance",
        element: <InvestorDashboard />,
        icon: DiGoogleAnalytics,
      },
      {
        name: "Teams",
        path: "teams",
        element: <Teams />,
        icon: TbUsers,
      },
      {
        name: "Investor Entrepreneur Community",
        path: "teams/investorEntrepreneurCommunity",
        element: <InvestorEntrepreneurCommunity />,
        icon: TbUsers,
      },
    ],
  },
];
