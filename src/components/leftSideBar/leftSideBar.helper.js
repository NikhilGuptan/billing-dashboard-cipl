import { RiDashboardLine } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { LuReceiptIndianRupee } from "react-icons/lu";

export const leftSideBarTabs = [
  { name: "Dashboard", icon: <RiDashboardLine />, path: "/" },
  { name: "Consumption Details", icon: <RiDashboardLine />, path: "/Consumption_details" },
  { name: "Billing Summary", icon: <TbReport />, path: "/Billing_summary" },
  { name: "Bill Forcasting", icon: <RiDashboardLine />, path: "/Bill_forcasting" },
];
