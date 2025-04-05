import NotFoundPage from "../pages/notFoundPage";
import React from "react";
import style from "./notFoundLayout.module.css";

const notFoundLayout = () => {
  return (
    <>
        <div className={style.container}>
            <NotFoundPage/>
        </div>
    </>
  );
}

export default notFoundLayout;