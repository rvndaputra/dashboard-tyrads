import { useCallback, useState } from "react";
import { dummyMenus } from "../constants";

const useSidebarEvent = () => {
  const [menus, setMenus] = useState(dummyMenus);

  const _onMenuClick = useCallback(
    (value: string) => {
      const newMenus = menus.map((menu) => {
        return {
          ...menu,
          isActive: menu.id === value,
        };
      });

      setMenus(newMenus);
    },
    [menus]
  );

  return {
    menus,
    handleMenuClick: _onMenuClick,
  };
};

export default useSidebarEvent;
