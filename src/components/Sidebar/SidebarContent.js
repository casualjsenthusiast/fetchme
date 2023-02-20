import classes from "./SidebarContent.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sidebarActions, selectedTermActions } from "../../store/index";
import { useRef } from "react";

const SidebarContent = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const isSidebarClosed = useSelector((state) => state.sidebar.isSidebarClosed);

  const toggleSidebar = () => {
    dispatch(sidebarActions.toggle());
  };

  const actionIconClicked = (event) => {
    const searchTerm = event.target.id;
    dispatch(selectedTermActions.setSelectedTerm(searchTerm));
  };

  const onSearch = (_) => {
    const searchTerm = inputRef.current.value.trim();
    if (searchTerm !== "") {
      dispatch(selectedTermActions.setSelectedTerm(searchTerm));
    }
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
              <span
                onClick={actionIconClicked}
                id="cheatsheet"
                className="fa fa-file-code-o"
              ></span>
              Cheatsheet
            </li>
            <li>
              <span
                onClick={actionIconClicked}
                id="interview"
                className="fa fa-gears"
              ></span>
              Interview Questions
            </li>
            <li>
              <span onClick={onSearch} className="fa fa-search"></span>
              <input
                ref={inputRef}
                name="search"
                className={classes.search}
                type="text"
                aria-label="search text"
              />
            </li>
          </ul>
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
          <ul className={`${isSidebarClosed ? classes.closed : ""}`}>
            <li>
              <span className="fa fa-file-code-o"></span>
            </li>
            <li>
              <span className="fa fa-gears"></span>
            </li>
            <li>
              <span className="fa fa-search"></span>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default SidebarContent;
