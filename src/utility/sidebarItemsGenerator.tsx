import { TSidebarItem, TUserPath } from "@/types";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role.toLowerCase()}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name as string,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
