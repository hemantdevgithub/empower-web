import AddCustomer from "@/components/add/add-customer";
import { Segmented } from "antd";
import { ReactNode, useMemo, useState } from "react";

type TItems = {
  label: string;
  value: string;
  children: ReactNode;
};

const AddCustomerPage = () => {
  const items = useMemo<TItems[]>(
    () => [
      { label: "Manual Update", value: "manual", children: <AddCustomer /> },
      { label: "Bulk Update", value: "bulk", children: <div>Bulk</div> },
      { label: "Database", value: "database", children: <div>db</div> },
      { label: "Invite", value: "invite", children: <div>invite</div> },
    ],
    []
  );

  const [tab, setTab] = useState<TItems>(items[0]);

  const handleChange = (label: string) => {
    const selectedItem = items.find((item) => item.label === label);
    if (selectedItem) {
      setTab(selectedItem);
    }
  };

  return (
    <div className="space-y-5">
      <Segmented
        defaultValue={tab.label}
        onChange={handleChange}
        options={items.map((item) => item.label)}
        block
        className="w-[60%] rounded-xl p-2"
      />
      {tab.children}
    </div>
  );
};

export default AddCustomerPage;
