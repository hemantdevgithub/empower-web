import { TSidebarItem } from "@/types";
import { useState } from "react";

const SidebarMenuItems = ({ data }: { data: TSidebarItem }) => {
  const [open, setOpen] = useState(true);
  return (
    <ul className="relative">
      <div onClick={() => setOpen((prev) => !prev)} className="flex cursor-pointer items-center gap-3 text-lg">
        {/* <img src="/performance-active.png" className="size-[30px]" alt="Icons" /> */}
        <span>{data?.label} </span>
      </div>
      {data?.children && (
        <>
          {open && (
            <>
              {data?.children?.map((data, i) => (
                <li key={i} className="py-3 pl-10">
                  <div className="flex items-center gap-3 text-lg">
                    {/* <img src="/performance.png" className="size-[30px]" alt="Icons" /> */}
                    <span>{data?.label}</span>
                  </div>
                </li>
              ))}
            </>
          )}
        </>
      )}
    </ul>
  );
};

export default SidebarMenuItems;
