import "./styles.css";
import datas from "./data/folderData";
import { useState } from "react";
// import Fileexplorer
import Fileexplorer from "./components/Fileexplorer";

export default function App() {
  const [files, setFiles] = useState(datas);
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: []
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const traverse = (tree, id, isFolder, name) => {
    let newdata = insertNode(files, id, name, isFolder);
    setFiles(newdata);
  };

  return (
    <div className="App">
      <Fileexplorer files={files} traverse={traverse} setFiles={setFiles} />
    </div>
  );
}
