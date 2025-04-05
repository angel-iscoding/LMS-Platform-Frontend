import React from "react";
import style from "./notFoundPage.module.css";

const NotFoundPage = () => {
  return (
      <>
        <div className={style.container}>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>  
        </div>
      </>
  );
}

export default NotFoundPage;