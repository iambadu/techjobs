import React from "react";
import scss from "./../scss/footer.module.scss";

function Footer() {
  return (
    <div className={scss.footer}>
          <div className={scss.footwrap}>
              &copy; Copyright 2020. Emmanuel Sarpong. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
