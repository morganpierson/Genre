import React from "react";

const DragandDrop = ({ data, dispatch }) => {
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth - 1 });
    if (data.dropDepth > 0) return;
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth + 1 });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let reader = new FileReader();
    let files = [...e.dataTransfer.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));
      reader.onload = () => {
        files[0] = reader.result;
        dispatch({ type: "ADD_FILE_TO_LIST", files });
      };
      e.dataTransfer.clearData();
      dispatch({ type: "SET_DROP_DEPTH", dropDepth: 0 });
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div
      className={
        data.inDropZone ? "drag-drop-zone inside-drag-area" : "drag-drop-zone"
      }
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      <div className="add-circle">
        <p className="add-sign">+</p>
      </div>
      <p>Drag files here to upload</p>
      <style>
        {`
          .drag-drop-zone {
            padding: 2rem;
            width: 30rem;
            margin: auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(245, 241, 208, 0.5);
            border-radius: 0.5rem;
          }
          .drag-drop-zone.inside-drag-area {
            opacity: 0.7;
          }
          .add-circle {
            height: 10rem;
            width: 10rem;
            border-radius: 50%;
            background-color: #071a24;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          p {
            font-weight: bold;
          }
          .add-sign {
            font-size: 5rem;
            color: #f5f1d0;
            font-weight: light;
          }
        `}
      </style>
    </div>
  );
};

export default DragandDrop;
