import { useState } from "react";
import classes from "./Home.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RepoList from "../RepoList/RepoList";
import Readme from "../Readme/Readme";

const Home = () => {
  let [ownerFullName, setOwnerFullName] = useState("");
  const repoClickHandler = (fullName) => {
    setOwnerFullName(fullName);
  };
  return (
    <main className={classes.home}>
      <Sidebar />
      <RepoList onRepoClick={repoClickHandler} />
      <Readme fullName={ownerFullName} />
    </main>
  );
};

export default Home;
