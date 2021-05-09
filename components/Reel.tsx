import { useRef, useState } from "react";
import scss from "../scss/reel.module.scss";

export default function Reel({params, handleChange}) {


  return (
    <article className="reel">
      <div className={scss.imgwrap}>
        <div className={scss.container}>
          <div className={scss.reelwrp}>
            <h1 className={scss.title}>
              Find the best tech job of your dreams that fits your life
            </h1>
            <form className={scss.formwrp}>
              <input
                name="description"
                onChange={handleChange}
                value={params.description}
                className={scss.formjob}
                placeholder="Job title or keywords"
                type="text"
                />
              <input
                onChange={handleChange}
                value={params.location}
                name="location"
                className={scss.formloc}
                placeholder="Location"
                type="text"
              />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}
