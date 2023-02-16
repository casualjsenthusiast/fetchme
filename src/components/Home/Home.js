import classes from "./Home.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";

const Home = (props) => {
  const isSidebarClosed = useSelector((state) => state.sidebar.isSidebarClosed);
  return (
    <div className={classes.home}>
      <Sidebar />
      <div
        className={`${classes["list-items"]} ${
          isSidebarClosed ? classes.unblur : ""
        }`}
      >
        list items
      </div>
      <div className={classes.readme}>readme</div>
    </div>
  );
};

export default Home;
