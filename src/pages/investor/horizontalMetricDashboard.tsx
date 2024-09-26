import { TrophyIcon, DollarSignIcon } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subValue: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, subValue }) => (
  <div className="flex flex-1 items-center space-x-3">
    <div className="flex-shrink-0 rounded-full bg-yellow-500 p-2">{icon}</div>
    <div>
      <h3 className="mb-1 text-xs text-gray-400">{title}</h3>
      <p className="text-lg font-bold text-white">{value}</p>
      <p className="text-xs text-gray-400">{subValue}</p>
    </div>
  </div>
);

const CustomerSatisfactionCard: React.FC = () => (
  <div className="flex flex-1 items-center justify-between">
    <div>
      <h3 className="mb-1 text-xs text-gray-400">Customer Satisfaction Rating</h3>
      <p className="text-lg font-bold text-white">7.8</p>
      <p className="text-xs text-gray-400">122K Rated</p>
      <div className="mt-1 h-2 w-24 rounded-full bg-gray-700">
        <div className="h-2 rounded-full bg-yellow-500" style={{ width: "78%" }}></div>
      </div>
    </div>
    <div className="text-2xl font-bold text-white">7.8</div>
  </div>
);

export default function HorizontalMetricDashboard() {
  return (
    <div className="rounded-lg bg-gray-900 p-4">
      <div className="flex flex-col items-stretch space-y-4 sm:flex-row sm:space-y-0">
        <MetricCard
          icon={<TrophyIcon className="h-5 w-5 text-gray-900" />}
          title="Number of deals closed by BDE"
          value="$1.2M"
          subValue="243 Deals"
        />
        <div className="mx-4 hidden w-px bg-gray-700 sm:block"></div>
        <MetricCard
          icon={<TrophyIcon className="h-5 w-5 text-gray-900" />}
          title="Number of deals closed by SCE"
          value="$2.3M"
          subValue="345 Deals"
        />
        <div className="mx-4 hidden w-px bg-gray-700 sm:block"></div>
        <MetricCard
          icon={<DollarSignIcon className="h-5 w-5 text-gray-900" />}
          title="Returns of Deals"
          value="$60K"
          subValue="154 Deals"
        />
        <div className="mx-4 hidden w-px bg-gray-700 sm:block"></div>
        <CustomerSatisfactionCard />
      </div>
    </div>
  );
}
