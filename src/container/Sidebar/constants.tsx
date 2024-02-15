import { Bell, Clock8, HomeIcon, Settings, Users, Wallet } from "lucide-react";

export const dummyMenus = [
  {
    id: "home",
    icon: <HomeIcon />,
    isActive: true,
    path: "/",
  },
  {
    id: "notification",
    icon: <Bell />,
    isActive: false,
    path: "/notifications",
  },
  {
    id: "history",
    icon: <Clock8 />,
    isActive: false,
    path: "/history",
  },
  {
    id: "role-management",
    icon: <Users />,
    isActive: false,
    path: "/role-management",
  },
  {
    id: "wallet",
    icon: <Wallet />,
    isActive: false,
    path: "/wallet",
  },
  {
    id: "settings",
    icon: <Settings />,
    isActive: false,
    path: "/settings",
  },
];
