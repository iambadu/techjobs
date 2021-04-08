import useSWR from 'swr';

const fetcher = (...args) => fetch(...args, {
  headers: {
   Authorization: `Bearer ${localStorage.getItem('token')}`,
   'Content-Type': 'application/json',
  },
 }).then(res => res.json());
export default function getData(url) { 
    const {data, error} = useSWR(url, fetcher);
    
    return {
        data: data,
        // isLoading: !error && !data,
        isError: error
      }
}