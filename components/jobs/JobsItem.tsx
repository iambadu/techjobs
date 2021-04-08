import Link from "next/link";
import dayjs from 'dayjs';
import Datefmt from 'dayjs/plugin/relativeTime';

import scss from "./jobcard.module.scss";

import { GithubJobs } from "../../lib/api";

interface JobsProps extends GithubJobs {}

const JobsItem: React.FC<JobsProps> = ({
  id,
  title,
  company_logo,
  company,
  created_at,
  location,
  type
}) => {
    dayjs.extend(Datefmt)
  return (
    <Link href={`/job/${id}`}>
      <a className={scss.wrap}>
        <div key={id}>
          <div className={scss.item_head}>
            <div className={scss.item_logo}>
              <img src={company_logo} alt="" />
            </div>
            <div className={scss.item_desc}>
              <h3>{title}</h3>
              <p>
                <b>{company}</b> <span>&bull;</span> {location}
              </p>
              <p className={scss.type}>{type}</p>
            </div>
          </div>
          <div className={scss.item_date}>
            {dayjs().to(dayjs(`${created_at}`, true))}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default JobsItem;
