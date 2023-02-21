import classes from "./List.module.css";
import { useDispatch } from "react-redux";
import { pageActions } from "../../store/index";

const List = (props) => {
  const dispatch = useDispatch();
  const readmeClickHandler = (fullName, _) => {
    dispatch(
      pageActions.setPage({
        component: "readme",
        queryParams: [{ fullName }],
      })
    );
  };

  return (
    <div className={classes.list}>
      <div className={classes.meta}>
        <ul className={classes["list__ul"]}>
          <li>
            <a href={props.repo.url} target="_blank" rel="noreferrer noopenner">
              {props.repo.name}
            </a>
          </li>
          <li title="Fork">
            <span className="fa fa-code-fork">&nbsp; {props.repo.forks} </span>
          </li>
          <li title="Stars">
            <span className="fa fa-star-o">&nbsp; {props.repo.stars} </span>
          </li>
          <li
            onClick={readmeClickHandler.bind(null, props.repo.fullName)}
            title="Readme"
          >
            <span className="fa fa-file-text-o"></span>
          </li>
        </ul>
      </div>
      <div className={classes.topics}>
        <ul>
          {props.repo.topics.map((topic, idx) => (
            <li key={`tag-${idx}`}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
