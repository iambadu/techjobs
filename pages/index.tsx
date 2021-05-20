import { useState } from "react";
import Layout from "../components/Layout";
import Footer from "./../components/footer";
import Reel from "./../components/Reel";
import Jobs from "./../components/Jobs";
import useFetchData from "../utils/useFetchData";
export default function Home() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchData(params, page);
  
  function handleChange(e) {
    let param = e.target.name;
    let value = e.target.value;
    setParams(prevState => {
      return {...prevState, [param]:value}
    } )
}
  return (
    <div>
      <Layout title="Find Your Dream Job">
        <Reel handleChange={handleChange} params={params} />
        <Jobs
          loading={loading}
          job={jobs}
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}

        />
        <Footer />
      </Layout>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   console.log(context);

//   const URL = "https://jobs.github.com/positions.json";
//   const data = await fetch(URL).then(res => res.json());

//   return {
//     props: {
//           initjobs: data
//     },
//   };
// }

// import axios from "axios";

// const fetcher = (url) => axios.get(url).then((res) => res.data);

// function App() {
//   const { data, error } = useSWR("/api/data", fetcher);
//   // ...
// }

// function useUser (id) {
//   const { data, error } = useSWR(`/api/user/${id}`, fetcher)

//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error
//   }
// }
