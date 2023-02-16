import classes from "./Sidebar.module.css";
import SidebarContent from "./SidebarContent";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarClosed = useSelector((state) => state.sidebar.isSidebarClosed);

  return (
    <aside
      className={`${classes.sidebar} ${isSidebarClosed ? classes.closed : ""}`}
    >
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;
