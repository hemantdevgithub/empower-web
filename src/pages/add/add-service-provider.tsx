import AddServiceProvider from "@/components/add/add-service-provider/add-service-provider";
import Invite from "@/components/add/invite";
import { Segmented } from "antd";
import { ReactNode, useMemo, useState } from "react";

type TItems = {
  label: string;
  value: string;
  children: ReactNode;
};

const AddServiceProviderPage = () => {
  const items = useMemo<TItems[]>(
    () => [
      { label: "Add", value: "add", children: <AddServiceProvider /> },
      { label: "Invite", value: "invite", children: <Invite /> },
      { label: "Share Card", value: "share-card", children: <div>share card</div> },
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
      <div className="flex justify-end">
        <Segmented
          defaultValue={tab.label}
          onChange={handleChange}
          options={items.map((item) => item.label)}
          className="w-[50%] rounded-xl p-2"
          block
        />
      </div>
      {tab.children}
    </div>
  );
};

export default AddServiceProviderPage;
