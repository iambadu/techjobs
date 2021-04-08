import { GithubJobs } from "../../../lib/api"

interface JobsProps extends GithubJobs{}

const JobsPage: React.FC<JobsProps> = ({
    id,
    company_logo,
    company,
    created_at,
    location,
    type

}) => {
    return (
        <div>
            
        </div>
    )
}

export default JobsPage
