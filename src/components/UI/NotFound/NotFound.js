import classes from "./NotFound.module.css";

const NotFound = (props) => {
  return (
    <div className={classes["not-found"]}>
      <p>{props.msg}</p>
    </div>
  );
};

export default NotFound;
