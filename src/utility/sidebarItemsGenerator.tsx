import { TSidebarItem, TUserPath } from "@/types";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (items: TUserPath[], role?: string) => {
  // console.log(items);

  if (role) {
    const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
      if (item.path && item.name) {
        acc.push({
          key: item.name,
          label: (
            <NavLink
              to={`/${role.toLowerCase()}/${item.path}`}
              className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
            >
              <p className="flex items-center gap-1">
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </p>
            </NavLink>
          ),
        });
      }

      if (item.children) {
        acc.push({
          key: item.name as string,
          label: (
            <p className="flex items-center gap-1">
              {item.icon && <item.icon />}
              <span>{item.name}</span>
            </p>
          ),
          children: item.children.map((child) => {
            if (child.name) {
              return {
                key: child.name,
                label: (
                  <NavLink
                    to={`/${role.toLowerCase()}/${child.path}`}
                    className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
                  >
                    <p className="flex items-center gap-1">
                      {child.icon && <child.icon />}
                      <span>{child.name}</span>
                    </p>
                  </NavLink>
                ),
              };
            }
          }),
        });
      }
      console.log(acc);

      return acc;
    }, []);

    return sidebarItems;
  } else {
    const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
      if (item.path && item.name) {
        acc.push({
          key: item.name,
          label: (
            <NavLink to={`/${item.path}`} className={({ isActive }) => (isActive ? "text-primary" : "text-white")}>
              <p className="flex items-center gap-1">
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </p>
            </NavLink>
          ),
        });
      }

      if (item.children) {
        acc.push({
          key: item.name as string,
          label: (
            <p className="flex items-center gap-1">
              {item.icon && <item.icon />}
              <span>{item.name}</span>
            </p>
          ),
          children: item.children.map((child) => {
            if (child.name) {
              return {
                key: child.name,
                label: (
                  <NavLink
                    to={`/${child.path}`}
                    className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
                  >
                    <p className="flex items-center gap-1">
                      {child.icon && <child.icon />}
                      <span>{child.name}</span>
                    </p>
                  </NavLink>
                ),
              };
            }
          }),
        });
      }

      console.log(acc);
      return acc;
    }, []);

    return sidebarItems;
  }
};
