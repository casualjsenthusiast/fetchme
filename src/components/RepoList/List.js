import classes from "./List.module.css";

const List = (props) => {
  const readmeClickHandler = (fullName, _) => {
    props.onClick(fullName);
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
            <span className="fa fa-code-fork"></span>
            {props.repo.forks}
          </li>
          <li title="Stars">
            <span className="fa fa-star-o"></span>
            {props.repo.stars}
          </li>
          <li
            onClick={readmeClickHandler.bind(null, props.repo.fullName)}
            title="Readme"
          >
            <span className="fa fa-file-text-o"></span>
          </li>
        </ul>
      </div>
      <div className={classes.tags}></div>
    </div>
  );
};

export default List;
