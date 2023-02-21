import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { pageActions } from "../../store";

const Header = () => {
  const component = useSelector((state) => state.page.page.component);
  const dispatch = useDispatch();
  const onBackClickHandler = () => {
    dispatch(
      pageActions.setPage({
        component: "repoList",
        queryParams: [],
      })
    );
  };
  return (
    <header className={classes.header}>
      {component !== "readme" && <span>FetchMe</span>}
      {component === "readme" && (
        <>
          <span
            className="fa fa-arrow-circle-o-left"
            onClick={onBackClickHandler}
          ></span>
          <span>FetchMe</span>
        </>
      )}
      <span className="fa fa-link"></span>
      <a
        href="https://github.com/casualjsenthusiast/fetchme"
        target="_blank"
        aria-label="Github repo link"
        rel="noreferrer noopener"
      >
        <span className="fa fa-github"></span>
      </a>
    </header>
  );
};

export default Header;
