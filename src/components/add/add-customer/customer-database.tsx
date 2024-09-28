import CustomerDataBaseTable from "./customer-database-table";

export default function CustomerDatabase() {
  return (
    <div className="flex rounded-xl bg-accent p-8">
      <div className="w-full">
        <CustomerDataBaseTable />
      </div>
      <div className="w-[20%]"></div>
    </div>
  );
}
