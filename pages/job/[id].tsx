import React, { useEffect } from "react";
import { useRouter, withRouter } from "next/router";
import Layout from "../../components/Layout";
import dayjs from "dayjs";
import Datefmt from "dayjs/plugin/relativeTime";
import Footer from "../../components/footer";
import scss from "../../scss/sngjob.module.scss";
import ReactMarkdown from 'react-markdown';

export default function SingleJob({ job, redirect }) {
  dayjs.extend(Datefmt);
  let router = useRouter();
  useEffect(() => {
    if (redirect) {
      router.push("/404");
    }
  }, []);

  return (
    <>
      <Layout title={job.title}>
        <div className={scss.container}>
          <div className={scss.topwrap}>
            <div className="toptext">
              <h2 className={scss.title}>{job.title}</h2>
              <p className={scss.company}>
                {job.company}
                <span className={scss.type}>{job.type}</span>
              </p>
              <p className={scss.location}>
                <span>{job.location}</span> -
                <span className={scss.date}>
                  Posted {dayjs().to(dayjs(`${job.created_at}`))}
                </span>
              </p>
            </div>
            <img src={job.company_logo} alt="" />
                  </div>
                  <div className={scss.jcontent}>
                      <div className={scss.apply}>
                          <p className={scss.jtitle}>How to apply</p>
                          <div dangerouslySetInnerHTML={{__html: job.how_to_apply}}></div>

                      </div>
                      <div className="jdesc">
                          <p className={scss.jtitle}>Job Description</p>
                          <div dangerouslySetInnerHTML={{__html: job.description}}></div>
                      </div>
                   </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const URL = `https://jobs.github.com/positions/${id}.json`;
  try {
    let data = await fetch(URL).then((res) => res.json());
    return {
      props: { job: data },
    };
  } catch (error) {
    return {
      props: { job: {}, redirect: true },
    };
  }
  //   return {
  //     props: { job: params.id, redirect: false },
  //   };
}
