import InvestmentCard from "@/pages/investor/investmentCard";
import bdeIcon from "/BDE.png";
import sceIcon from "/sce.png";
import returnIcon from "/returns-bde.png";
import RevenueSummary from "@/pages/investor/revenueSummary";
import HorizontalMetricDashboard from "@/pages/investor/horizontalMetricDashboard";
import InvestmentBalance from "./investmentBalance";

export default function InvestmentDashboard() {
  const investments = [
    { cardTitle: "Total Investment on", title: "BDE", amount: "$15M", percentage: 48.64, icon: bdeIcon },
    { cardTitle: "Total Investment on", title: "SCE", amount: "$12.8M", percentage: 4.65, icon: sceIcon },
    { cardTitle: "Returns on", title: "BDE", amount: "$3.5M", percentage: 36.45, icon: returnIcon },
    { cardTitle: "Returns on", title: "SCE", amount: "$6.4M", percentage: -9.41, icon: returnIcon },
  ];

  return (
    <div className="space-y-4">
      <div>
        <div className="grid grid-cols-4 gap-4">
          {investments.map((investment, index) => (
            <InvestmentCard key={index} {...investment} />
          ))}
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-[60%]">
          <RevenueSummary />
        </div>
        <div className="w-[40%]">
          <InvestmentBalance />
        </div>
      </div>
      <div className="mt-3">
        <HorizontalMetricDashboard />
      </div>
    </div>
  );
}
