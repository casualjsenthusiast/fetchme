import classes from "./List.module.css";

const List = (props) => {
  return (
    <div className={classes.list}>
      <div className={classes.meta}>
        <ul className={classes["list__ul"]}>
          <li>
            <a href={props.repo.url} target="_blank" rel="noreferrer noopenner">
              {props.repo.name}
            </a>
          </li>
          <li>
            <span className="fa fa-code-fork"></span>
            {props.repo.forks}
          </li>
          <li>
            <span className="fa fa-star-o"></span>
            {props.repo.stars}
          </li>
        </ul>
      </div>
      <div className={classes.tags}></div>
    </div>
  );
};

export default List;
