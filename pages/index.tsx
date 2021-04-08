import { JOBS_API, GithubJobs } from "../lib/api";

import Reel from ".././components/Reel";
import JobsItem from "../components/jobs/JobsItem";
import Layout from "../components/Layout";
import JobsFilter from "../components/jobs/JobsFilter";

interface HomeProps {
  jobs: GithubJobs[];
}

const Home: React.VFC<HomeProps> = ({ jobs }) => {
  return (
    <Layout title="Jobs portal powered by Github Jobs API">
      <Reel />
      <div className="joblist">
        <div className="joblist-wrap">
          <div className="jobfilter">
           <JobsFilter {...jobs}/>
          </div>
          <div className="jobresults">
            {jobs.map(item => <JobsItem key={item.id} {...item}/>)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${JOBS_API}.json`).then((data) => data.json());
    return {
      props: {
        jobs: data,
      },
    };
  } catch (error) {
    return {
      props: {
        jobs: [],
      },
    };
  }
};
export default Home;
