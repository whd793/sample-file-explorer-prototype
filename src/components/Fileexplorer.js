import { useState } from "react";

const Fileexplorer = ({ files, traverse, setFiles }) => {
  const [expand, setExpand] = useState(false);
  const [inputState, setinputState] = useState({
    folder: true,
    visible: false
  });
  const handleClick = (folder) => {
    setExpand(true);
    setinputState({
      folder,
      visible: true
    });
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // console.log(e.target.value);
      console.log(files.id);
      traverse(files, files.id, inputState.folder, e.target.value);
      // setFiles(newdata)
      setinputState({ folder: true, visible: false });
    }
  };

  if (files.isFolder) {
    return (
      <div>
        <div>
          <span
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {" "}
            📂{files.name}{" "}
          </span>
          <div>
            <button
              onClick={(e) => {
                handleClick(true);
              }}
            >
              {" "}
              +Folder{" "}
            </button>
            <button
              onClick={(e) => {
                handleClick(false);
              }}
            >
              {" "}
              +File{" "}
            </button>
          </div>
        </div>

        {expand && (
          <div style={{ marginLeft: "12px" }}>
            {inputState.visible && (
              <div className="inputContainer">
                {/* <span>{showInput.isFolder? "📁" : "📄</span>  */}
                <input
                  type="text"
                  autoFocus
                  onBlur={() => {
                    setinputState(false);
                  }}
                  onKeyDown={(e) => {
                    handleSubmit(e);
                  }}
                />
              </div>
            )}
            {/* <div style={{display: expand ? "block" : "none"}}> */}
            {files.items.map((f) => {
              return (
                // <span>
                //     {f.name}
                //   </span>
                <Fileexplorer
                  files={f}
                  traverse={traverse}
                  setFiles={setFiles}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <span>📄{files.name}</span>
      </div>
    );
  }
};

export default Fileexplorer;
