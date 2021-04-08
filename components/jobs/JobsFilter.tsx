import { GithubJobs } from "../../lib/api";
import scss from './jobsfilter.module.scss'

interface JobsFilterProps extends GithubJobs{};

const JobsFilter:React.VFC<JobsFilterProps> = ({

}) => {
    return (
        <>
        <p className={scss.heading}>filter by jobs</p>
        <ul className={scss.filterlist}>
            <a className={scss.filteritem} href="">Python</a>
            <a className={scss.filteritem} href="">Python</a>
            <a className={scss.filteritem} href="">Python</a>
            <a className={scss.filteritem} href="">Python</a>
            <a className={scss.filteritem} href="">Python</a>
            <a className={scss.filteritem} href="">Python</a>
        </ul>
        </>
    )
}

export default JobsFilter;