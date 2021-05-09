import React from "react";
import scss from "../scss/jobs.module.scss";
import Link from "next/link";

import dayjs from "dayjs";
import Datefmt from "dayjs/plugin/relativeTime";
import Pagination from "./pagination";

const Jobs = ({ job, page, loading, hasNextPage, setPage }) => {
  dayjs.extend(Datefmt);
  return (
    <React.Fragment>
      <div className={scss.jobwrap}>
        <div className={scss.container}>
          {loading ? (
            <div className={scss.loading}>
              <img src="/img/loading.gif" alt="" />
            </div>
          ) : (
            <>
              <Pagination
                page={page}
                setPage={setPage}
                hasNextPage={hasNextPage}
              />
              <div className={scss.jobcontent}>
                <div className={scss.wrapjob}>
                  {job.map((item) => {
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
                              <img
                                src={
                                  item.company_logo
                                    ? item.company_logo
                                    : "/img/nologo.png"
                                }
                                alt={item.company}
                              />
                            </div>
                          </div>
                          <Link href="/love">
                            <a className={scss.jobBtn}>View Job</a>
                          </Link>
                          <p className={scss.date}>
                            Posted{" "}
                            {dayjs().to(dayjs(`${item.created_at}`, true))}
                          </p>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
                  <Pagination
                    page={page}
                    setPage={setPage}
                    hasNextPage={hasNextPage}
                  />
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Jobs;
