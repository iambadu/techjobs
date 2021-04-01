import {useRef, useState} from 'react';
import scss from '../../scss/reel.module.scss';


export default function Reel() {
    const [error, setError] = useState(false)
    let fInpjob = useRef(null);
    let fInploc = useRef(null);

    const handleSubmit = (evt) => {
        let floc = fInploc.current.value;
        let fjob = fInpjob.current.value;
        if(floc === "" && fjob === "" ) {
            evt.preventDefault()
            setError(true)
        } 
    }


    
   
    return (
        <main className="reel">
            <div className={scss.imgwrap}>
                <div className={scss.container}>
                    <div className={scss.reelwrp}>
                        <h1 className={scss.title}>Find the best tech job of your dreams that fits your life</h1>
                        <form onSubmit={handleSubmit} action="./search" className={scss.formwrp}>
                            <input ref={fInpjob} name="job" name="job" className={scss.formjob} placeholder="Job title or keywords" type="text" />
                            <input ref={fInploc} name="location" name="location" className={scss.formloc} placeholder="Location" type="text" />
                            <input  type="submit" value="Search" />
                        </form>
                      {error && <div className={scss.error}>You have to at least enter a job title or a location</div>}  
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

