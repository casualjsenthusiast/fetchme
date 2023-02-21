import classes from "./Readme.module.css";
import { useEffect, useState } from "react";
import NotFound from "../UI/NotFound/NotFound";

const Readme = (props) => {
  const [hasReadme, setHasReadme] = useState(false);
  const [fileName, setFileName] = useState("");
  const [content, setContent] = useState(<></>);
  let converter = new window.showdown.Converter();

  useEffect(() => {
    async function fetchReadme() {
      const result = await fetch(
        `https://api.github.com/repos/${props.fullName}/git/trees/main?recursive=1`
      );
      const resultJson = await result.json();
      const tree = resultJson["tree"];
      if (tree?.length > 0) {
        const filteredTree = tree.map((res) => res.path.toLowerCase());
        const idx = filteredTree.findIndex((path) => path.includes("readme"));
        if (idx === -1) {
          setHasReadme(false);
        } else {
          setFileName(tree[idx].path);
          const res = await fetch(
            `https://api.github.com/repos/${props.fullName}/contents/${fileName}`
          );
          const resJson = await res.json();
          setContent(converter.makeHtml(atob(resJson.content)));
          setHasReadme(true);
        }
      } else {
        setHasReadme(false);
      }
    }

    fetchReadme();
  });
  return (
    <section className={classes.readme}>
      {hasReadme && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
      {!hasReadme && <NotFound data="No Readme Found!" />}
    </section>
  );
};

export default Readme;
