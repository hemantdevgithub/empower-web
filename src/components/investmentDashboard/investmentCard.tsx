import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface InvestmentCardProps {
  cardTitle: string;
  title: string;
  amount: string;
  percentage: number;
  icon: string;
}

export default function InvestmentCard({ title, amount, percentage, icon, cardTitle }: InvestmentCardProps) {
  const isPositive = percentage >= 0;

  return (
    <div className="w-full rounded-md border border-gray-800 bg-gray-900 p-4">
      <div className="mb-2">
        <div className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-gray-800">
          <img src={icon} className="rounded-md bg-primary-gradient" />
        </div>
        <h2 className="my-2 text-gray-400">
          <span>{cardTitle}</span> <span className="font-bold text-primary">{title}</span>
        </h2>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-xl font-bold text-white">{amount}</span>
        <div className={`flex items-center ${isPositive ? "text-success" : "text-error"}`}>
          {isPositive ? <ArrowUpIcon className="mr-1 h-4 w-4" /> : <ArrowDownIcon className="mr-1 h-4 w-4" />}
          <span className="text-sm">{Math.abs(percentage).toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
}
