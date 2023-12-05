import DashbardNavbar from "@/components/dashboard/navbar/Navbar";
import DashbardSidebar from "@/components/dashboard/sidebar/Sidebar";

import classes from "../../components/dashboard/dashboard.module.scss";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return;
  return (
    <div className={`bg-dashBg text-white ${classes.container}`}>
      <div className={`${classes.menu} bg-bgSoft`}>
        <DashbardSidebar />
      </div>
      <div className={`${classes.content}`}>
        <DashbardNavbar />
        {children}
      </div>
    </div>
  );
}
