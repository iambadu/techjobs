
import {JOBS_API, GithubJobs } from '../lib/api';
import Reel from './components/Reel';

interface HomeProps {
  jobs: GithubJobs[]
};

const Home:React.FC<HomeProps> = (props) => {
  console.log(props.jobs);
  
  return (
    <>
      <Reel/>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${JOBS_API}.json`).then(data => data.json());
    return {
      props: {
        jobs: data
      }
    }
    
  } catch (error) {
    return {
      props: {
        jobs: []
      }
    }
  }
}
export default Home;