import classes from "./SidebarContent.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sidebarActions } from "../../store/index";

const SidebarContent = (props) => {
  const dispatch = useDispatch();
  const isSidebarClosed = useSelector((state) => state.sidebar.isSidebarClosed);

  const toggleSidebar = () => {
    dispatch(sidebarActions.toggle());
  };

  return (
    <>
      {!isSidebarClosed && (
        <>
          <div className={classes["sidebar__menu"]}>
            <span className={`fa fa-list ${classes["list-icon"]}`}></span>
            <span>Menu</span>
            <span
              onClick={toggleSidebar}
              className={`fa fa-close ${classes["close-icon"]}`}
            ></span>
          </div>
          <ul>
            <li>
              <span className="fa fa-file-code-o"></span>Cheatsheet
            </li>
            <li>
              <span className="fa fa-gears"></span>Interview Questions
            </li>
          </ul>
          <div className={classes.sidebar__content}>
            <p>
              FetchMe is an online tool to fetch Readme files of your favourite
              GitHub repos.
            </p>
            <hr />
          </div>
        </>
      )}

      {isSidebarClosed && (
        <>
          <div className={classes["sidebar__menu"]}>
            <span
              onClick={toggleSidebar}
              className={`fa fa-list ${classes["list-icon"]}`}
            ></span>
          </div>
          <ul>
            <li>
              <span className="fa fa-file-code-o"></span>
            </li>
            <li>
              <span className="fa fa-gears"></span>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default SidebarContent;
