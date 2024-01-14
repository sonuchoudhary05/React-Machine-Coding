import { FaFolder } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import "./Folder.css";
const Folder = ({ explorer, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
  const onAddFolder = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>
            <FaFolder />
            {explorer.name}
            <div onClick={handleNewFolder}>
              <button onClick={(e) => handleNewFolder(e, true)}>
                folder +
              </button>
              <button onClick={(e) => handleNewFolder(e, false)}>file +</button>
            </div>
          </span>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? <FaFolder /> : <FaFileAlt />}</span>
              <input
                className="inputContainer__input"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
              />
            </div>
          )}
          {explorer.items.map((node) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={node}
                key={node.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file">
        <FaFileAlt />
        {explorer.name}
      </span>
    );
  }
};

export default Folder;
