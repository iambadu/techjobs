import { useRef } from "react";
import scss from "./jobsfilter.module.scss";
interface JobsFilterProps {
  type: string;
  setTerm: (term: string) => void;
  setLocation: (location: string) => void;
  handleSearch: (term?: string) => void;
}

const JobsFilter: React.VFC<JobsFilterProps> = ({
  setTerm,
  setLocation,
  handleSearch,
  type,
}) => {
  const jlist =
    type === "jobs"
      ? ["London", "Frontend", "Backend", "Fullstack", "Javascript", "Java"]
      : ["Europe", "New York", "London", "Berlin", "Remote"];
  const btnEl = Array.from(jlist, (a) => useRef(null));

  const btnClick = (i?) => {
    const value = btnEl[i].current.value;
    if (type === "jobs") {
      setTerm(value.toLowerCase())
      handleSearch(value.toLowerCase());
    } else {
      setLocation(value.toLowerCase());
    handleSearch();
    }
    
      
      
  };

  return (
    <div className={scss.jobfilter}>
      <p className={scss.heading}>
        filter by {type === "jobs" ? "jobs" : "location"}
      </p>
      <ul className={scss.filterlist}>
        {jlist.map((el, i) => (
          <input
            ref={btnEl[i]}
            key={el.toLowerCase()}
            onClick={() => btnClick(i)}
            value={el}
            type="button"
            className={scss.filteritem}
          />
        ))}
      </ul>
    </div>
  );
};

export default JobsFilter;
