import { useSelector } from "react-redux";
import classes from "./Home.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RepoList from "../RepoList/RepoList";
import Readme from "../Readme/Readme";

const Home = () => {
  const { component, queryParams } = useSelector((state) => state.page.page);

  console.log(component);
  console.log(queryParams);

  return (
    <main className={classes.home}>
      {component === "repoList" && (
        <>
          <Sidebar />
          <RepoList />
        </>
      )}
      {component === "readme" && (
        <Readme fullName={queryParams[0]["fullName"]} />
      )}
    </main>
  );
};

export default Home;
