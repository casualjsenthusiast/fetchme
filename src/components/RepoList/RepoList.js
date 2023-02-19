import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./RepoList.module.css";
import NotFound from "../UI/NotFound/NotFound";
import List from "./List";

const RepoList = (props) => {
  let [repos, setRepos] = useState([]);
  let [page, setPage] = useState(1);
  let isSidebarClosed = useSelector((state) => state.sidebar.isSidebarClosed);
  let searchTerm = useSelector((state) => state.selectedTerm.selectedTerm);
  const PER_PAGE = 10;

  const actionButtonClickHandler = (action, _) => {
    if (action === "next") {
      setPage((prevPage) => prevPage + 1);
    } else {
      if (page > 1) {
        setPage((prevPage) => prevPage - 1);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (searchTerm.trim() !== "") {
        let data = await fetch(
          `https://api.github.com/search/repositories?q=${searchTerm}+in:name&page=${page}&per_page=${PER_PAGE}&sort=stars&order=desc`
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
  }, [searchTerm, page]);

  return (
    <section
      className={`${classes["list-items"]} ${
        isSidebarClosed ? classes.unblur : ""
      }`}
    >
      {searchTerm === "" && <NotFound data="No data found" />}
      {searchTerm !== "" && (
        <>
          <div>
            {repos.map((repo) => (
              <List key={repo.id} repo={repo} />
            ))}
          </div>
          <div className={classes["action-buttons"]}>
            <button disabled={page === 1} onClick={actionButtonClickHandler.bind(null, "previous")}>
              Previous
            </button>
            <button onClick={actionButtonClickHandler.bind(null, "next")}>
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default RepoList;
