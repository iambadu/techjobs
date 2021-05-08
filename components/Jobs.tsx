import React from "react";
import scss from "../scss/jobs.module.scss";

import dayjs from 'dayjs';
import Datefmt from 'dayjs/plugin/relativeTime';

const Jobs = ({ jobs }) => {
  dayjs.extend(Datefmt);;
  return (
    <React.Fragment>
      <div className={scss.jobwrap}>
        <div className={scss.container}>
          <div className={scss.jobcontent}>
            <div className={scss.wrapjob}>
                {jobs.map((item) => {
                  return (
                    <div key={item.id} className={scss.job}>
                      <span className={scss.jwrap}>
                      <div className={scss.topwrap}>
                        <div className={scss.toptext}>
                          <h2 className={scss.title}>{item.title}</h2>
                          <p className={scss.company}>
                            {item.company}
                            <span className={scss.type}>{item.type}</span>
                          </p>
                          <p className={scss.location}>{item.location}</p>
                        </div>
                        <div className={scss.company_logo}>
                            <img src={item.company_logo
                              ? item.company_logo :
                              '/img/nologo.png'
                          } alt={item.company} />
                        </div>
                      </div>
                      <p className={scss.date}>
                        Posted {dayjs().to(dayjs(`${item.created_at}`, true))}
                      </p>
                  </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Jobs;
