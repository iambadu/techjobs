import { FormEvent, useState } from "react";
import { JOBS_API, GithubJobs } from "../lib/api";

import Reel from ".././components/Reel";
import JobsItem from "../components/jobs/JobsItem";
import Layout from "../components/Layout";
import JobsFilter from "../components/jobs/JobsFilter";
import Loader from '../components/loader';

interface HomeProps {
  jobs: GithubJobs[];
}

const Home: React.VFC<HomeProps> = (props) => {
  const [jobs, setJobs] = useState(props.jobs);
  const [location, setLocation] = useState("");
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (term?: string) => {
    setLoading(true)
    fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        location,
        term,
      }),
    })
    .then((data) => data.json())
    .then(setJobs);
    setLoading(() => false);
    console.log(jobs);
  };
 
  
  
  
  return (
    <Layout title="Find your dream job">
      <Reel />
      <div className="joblist">
        <div className="joblist-wrap">
          <div className="jobfilter">
            <JobsFilter  type="jobs" 
            setTerm = {setTerm}
            setLocation = {setLocation}
            handleSearch = {handleSearch}
            />
            <JobsFilter type="location"
            setLocation = {setLocation}
            setTerm = {setTerm}
            handleSearch = {handleSearch}
            />
          </div>
          <div className="jobresults">
           {
             !loading ?  (jobs.map((item) => (
              <JobsItem key={item.id} {...item} />
            )))
             :
             (<Loader/>)
               
            }
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
