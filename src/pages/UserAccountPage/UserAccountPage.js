import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import DragandDrop from "../../hoc/DragandDrop/DragandDrop";

const UserAccountPage = ({ user }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DROP_DEPTH":
        return { ...state, dropDepth: action.dropDepth };
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
  });

  useEffect(() => {
    console.log("FILE LIST ", data.fileList);
  }, [data.fileList]);

  return (
    <div>
      <Link to="/" className="link light">
        <h1>G E N R E</h1>
      </Link>
      <h1>{user.username}</h1>

      <div className="file-upload-container">
        <DragandDrop data={data} dispatch={dispatch} />
        <p>OR</p>
        <div className="file-upload">
          <input type="file" className="file-upload-input" />
        </div>
        <ol className="dropped-files">
          {data.fileList.map((f) => {
            return <img key={f} src={f} alt="f" />;
          })}
        </ol>
      </div>
      <style jsx>
        {`
          h1,
          p {
            color: #f5f1d0;
          }
          .file-upload {
            height: 3rem;
            width: 20rem;
            background-color: #f5f1d0;
            opacity: 0.5;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.5rem;
          }

          .file-upload-input {
            outline: none;
            border-radius: 0.5rem;
            font-size: 1rem;
            text-align: center;
            display: inline-block;
            content: "Select a file";
          }
          .file-upload-input:hover {
            cursor: pointer;
          }
          .file-upload-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default UserAccountPage;
