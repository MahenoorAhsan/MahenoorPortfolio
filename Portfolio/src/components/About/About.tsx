import React from 'react'
import styles from './About.module.css'

export const About= ()=>{

    return <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src="../../../assets/girlWithLaptop.jpg" alt="me sitting with a laptop"
            className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="../../assets/frontend.png" alt="Cursor" className={styles.icon}/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with a experience in building responsive
                            and optimized sites.slkwhdhroifewhroiwehioen buwFUW BUiwebrw eigfueif veyvfy vyeufyewf vieYFY huewiu uegye jyegfyuew yfyuw vewyufvu vuyvf
                            vueywfugy if deivwy iqwef fhrvf bekwfu
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="../../assets/backend.jpg" alt="Server" className={styles.icon}/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimized backend systems and APIs.
                        slkwhdhroifewhroiwehioen buwFUW BUiwebrw eigfueif veyvfy vyeufyewf vieYFY huewiu uegye jyegfyuew yfyuw vewyufvu vuyvf
                        vueywfugy if deivwy iqwef fhrvf bekwfu
                        </p>
                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <img src="design.png" alt="Cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have design multiple landing pages and have systems as well
                        </p>
                    </div>
                </li> */}
            </ul>
        </div>
    </section>
}