import scss from '../scss/search.module.scss';
import dayjs  from 'dayjs';
import Datefmt from 'dayjs/plugin/relativeTime';




export async function getStaticProps(context) {
    let q = { job: "", loc: "" };
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search)
        q.job = params.get("job");
        q.loc = params.get("location");
    }
    let desc = q.job.toString().replace(' ', '+').toLowerCase();
    let loc = q.loc.toString().replace(' ', '+').toLowerCase();

    const URL = `https://jobs.github.com/positions.json?description=${desc}&location=${loc}`;
    const res = await fetch(URL)
    const data = await res.json()

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default function Search({ data }) {
    dayjs.extend(Datefmt)
    let query = { job: "", loc: "" };
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search)
        query.job = params.get("job");
        query.loc = params.get("location");
    }
  
    const handleChange = (evt) => {
        let t = evt.target;
        setField(field => ({ ...field, [t.name]: t.value }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }
 
console.log(data);
    return (
        <>
            <header className={scss.pagewrap}>
                <div className={scss.searchwrap}>
                    <h1 className={scss.pgtitle}>Find your dream job</h1>
                    <form onSubmit={handleSubmit} className={scss.searchform}>
                        <input name="name" onChange={handleChange} defaultValue={query.job} className={scss.formjob} type="text" />
                        <input name="location" onChange={handleChange} defaultValue={query.loc} className={scss.formloc} type="text" />
                        <input type="submit" />
                    </form>
                </div>
            </header>
            <main className={scss.results}>
                <article className={scss.results_title}>
                    <h2>Showing Results for:</h2>
                    <p>{query.job} <span>jobs in</span> {query.loc}</p>
                </article>

                <article className={scss.results_list}>
                    {
                        data.map(item => {
                            return (
                                <div key={item.id} className={scss.results_item}>
                                    <div className={scss.item_head}>
                                        <div className={scss.item_logo}>
                                            <img src={item.company_logo} alt="" />
                                        </div>
                                        <div className={scss.item_desc}>
                                            <h3>{item.title}</h3>
                                            <p>{item.company} <span>&bull;</span> {item.location}</p>
                                        </div>
                                    </div>
                                    <div className={scss.item_date}>
                                       {
                                           dayjs().to(dayjs(`${item.created_at}`, true))
                                       }
                        </div>
                                </div>
                            )
                        })
                    }

                </article>
            </main>
        </>
    )
}