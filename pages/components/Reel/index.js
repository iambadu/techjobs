import scss from './reel.module.scss';

export default function Reel() {
    return (
        <main className="reel">
            <div className={scss.imgwrap}>
                <div className={scss.container}>
                    <div className={scss.reelwrp}>
                        <h1 className={scss.title}>Find the best tech job of your dreams that fits your life</h1>
                        <form className={scss.formwrp} action="#">

                            <input className={scss.formjob} placeholder="Job title or keywords" type="text" />
                            <input className={scss.formloc} placeholder="Location" type="text" />
                            <input type="submit" value="Search" />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

