import {useState} from 'react';
import Link from 'next/link';

import scss from '../scss/header.module.scss';

function Header() {
    const [state, setState] = useState(false)
    return (
        <>
        <header className={scss.header}>
            <div className={scss.headerwrap}>
                <div className={scss.mobiwrap}>
                    <div className={scss.logo}>
                        <Link href="/">
                       <a>
                           <img src="/img/logo.png" alt="" />
                       </a>
                        </Link>
                    </div>
                </div>
                {/* <nav className={`${scss.topnav} ${state ? scss.active : ""}`}>
                    <ul className={scss.topnav_list}>
                        <li className={scss.topnav_item}>
                            <a className={scss.topnav_link} href="#">Post a job</a>
                        </li>
                        <li className={scss.topnav_item}>
                            <a className={scss.topnav_link} href="/">See all jobs</a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </header>

        </>
    )
}

export default Header;