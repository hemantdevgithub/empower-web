export default function InvestmentBalance() {
  interface InvestmentData {
    name: string;
    amount: number;
    percentage: number;
    color: string;
  }

  const investments: InvestmentData[] = [
    { name: "Investor's Investment", amount: 942694, percentage: 47, color: "bg-blue-500" },
    { name: "BDE Investment", amount: 327896, percentage: 33, color: "bg-yellow-500" },
    { name: "SCE Investment", amount: 87279, percentage: 20, color: "bg-green-500" },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const totalInvestment = investments.reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="max-w-sm rounded-lg bg-gray-800 p-6">
      <h2 className="mb-1 text-xl font-semibold text-white">Investment Balance</h2>
      <p className="mb-4 text-sm text-gray-400">Quarterly investment balance report</p>

      <div className="mb-6">
        <p className="text-3xl font-bold text-white">{formatCurrency(totalInvestment)}</p>
        <p className="text-sm text-green-500">6.79% This Month</p>
      </div>

      <div className="mb-4 flex">
        {investments.map((inv) => (
          <div key={inv.name} className={`h-2 ${inv.color}`} style={{ width: `${inv.percentage}%` }} />
        ))}
      </div>

      {investments.map((inv) => (
        <div key={inv.name} className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className={`h-3 w-3 rounded-full ${inv.color} mr-2`} />
            <span className="text-sm text-gray-300">{inv.name}</span>
          </div>
          <span className="text-sm text-gray-300">{formatCurrency(inv.amount)}</span>
        </div>
      ))}
    </div>
  );
}
