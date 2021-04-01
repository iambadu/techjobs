import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

import scss from '../scss/search.module.scss'

export default function Search() {
    let query = {};
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search)
        query.job = params.get("job");
        query.location = params.get("location");
    }
    const [field, setField] = useState({ job: query.job, location: query.location })

    const handleChange = (evt) => {
        let t = evt.target;
    
        setField(field => ({ ...field, [t.name]: t.value }))
    }
    return (
        <>
            <header className={scss.pagewrap}>
                <div className={scss.searchwrap}>
                    <h1 className={scss.pgtitle}>Find your dream job</h1>
                    <form className={scss.searchform}>
                        <input name="name" onChange={handleChange} defaultValue={field.job} className={scss.formjob} type="text" />
                        <input name="location" onChange={handleChange} defaultValue={field.location} className={scss.formloc} type="text" />
                        <input type="submit" />
                    </form>
                </div>
            </header>
            <main className={scss.results}>
                <article className={scss.results_title}>
                    <h2>Showing Results for:</h2>
                    <p>{field.job} <span>jobs in</span> {field.location}</p>
                </article>
            </main>
        </>
    )
}