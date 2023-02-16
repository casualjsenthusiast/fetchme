import classes from "./Home.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RepoList from "../RepoList/RepoList";
import { useSelector } from "react-redux";

const Home = () => {
  const isSidebarClosed = useSelector((state) => state.sidebar.isSidebarClosed);
  return (
    <main className={classes.home}>
      <Sidebar />
      <RepoList />
      <div className={classes.readme}>readme</div>
    </main>
  );
};

export default Home;
