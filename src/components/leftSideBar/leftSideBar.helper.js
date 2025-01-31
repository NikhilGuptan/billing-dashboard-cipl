import { RiDashboardLine } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { LuReceiptIndianRupee } from "react-icons/lu";

export const leftSideBarTabs = [
  { name: "Dashboard", icon: <RiDashboardLine />, path: "/" },
  { name: "Projected Charges", icon: <RiDashboardLine />, path: "/projected-charges" },
  { name: "Reports", icon: <TbReport />, path: "/reports" },
  { name: "Capacity", icon: <RiDashboardLine />, path: "/capacity" },
  { name: "Billing Estimates", icon: <LuReceiptIndianRupee />, path: "/billing" },
];
