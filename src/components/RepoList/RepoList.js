import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./RepoList.module.css";
import NotFound from "../UI/NotFound/NotFound";
import List from "./List";

const RepoList = (props) => {
  let [repos, setRepos] = useState([]);
  let isSidebarClosed = useSelector((state) => state.sidebar.isSidebarClosed);
  let searchTerm = useSelector((state) => state.selectedTerm.selectedTerm);

  useEffect(() => {
    async function fetchData() {
      if (searchTerm.trim() !== "") {
        let data = await fetch(
          `https://api.github.com/search/repositories?q=${searchTerm}+in:name&sort=stars&order=desc`
        ).then((d) => d.json());

        setRepos(
          data.items.map((d) => {
            return {
              id: d.id,
              name: d.name,
              topics: d.topics,
              url: d["html_url"],
              forks: d.forks,
              stars: d["stargazers_count"],
            };
          })
        );
      }
    }
    fetchData();
  }, [searchTerm]);

  return (
    <section
      className={`${classes["list-items"]} ${
        isSidebarClosed ? classes.unblur : ""
      }`}
    >
      {searchTerm === "" && <NotFound data="No data found" />}
      {searchTerm !== "" && (
        <div>
          {repos.map((repo) => (
            <List key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RepoList;
