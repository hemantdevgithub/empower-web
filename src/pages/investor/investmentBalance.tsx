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
    <div className="h-full space-y-5 rounded-2xl bg-accent p-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Investment Balance</h2>
        <p className="text-sm text-gray-400">Quarterly investment balance report</p>
      </div>
      <div>
        <p className="text-3xl font-bold text-white">{formatCurrency(totalInvestment)}</p>
        <p className="text-sm text-green-500">6.79% This Month</p>
      </div>
      <div className="flex">
        {investments.map((inv) => (
          <div key={inv.name} className={`h-2 ${inv.color}`} style={{ width: `${inv.percentage}%` }} />
        ))}
      </div>
      <div className="space-y-4">
        {investments.map((inv) => (
          <div key={inv.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`h-3 w-3 rounded-full ${inv.color} mr-2`} />
              <span className="text-sm text-gray-300">{inv.name}</span>
            </div>
            <span className="text-sm text-gray-300">{formatCurrency(inv.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
