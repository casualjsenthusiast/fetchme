import { useSelector } from "react-redux";
import classes from "./RepoList.module.css";
import NotFound from "../UI/NotFound/NotFound";
import { useEffect } from "react";

const RepoList = (props) => {
  const isSidebarClosed = useSelector((state) => state.sidebar.isSidebarClosed);
  const searchTerm = useSelector((state) => state.selectedTerm.selectedTerm);

  useEffect(() => {
    async function fetchData() {
      if (searchTerm.trim() !== "") {
        let data = await fetch(
          `https://api.github.com/search/repositories?q=${searchTerm}+in:name&sort=stars&order=desc`
        ).then((d) => d.json());

        console.log(
          data.items.map((d) => {
            return {
              name: d.name,
              description: d.description,
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
      {searchTerm !== "" && <p>{searchTerm}</p>}
    </section>
  );
};

export default RepoList;
