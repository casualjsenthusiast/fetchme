import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <span>FetchMe</span>
      <span className="fa fa-link"></span>
      <a
        href="https://github.com/casualjsenthusiast"
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
