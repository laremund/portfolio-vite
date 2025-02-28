// import { useState } from 'react'
// import Card from './Card'
// import LogoLink from './LogoLink';
import { IconContext, } from "react-icons";
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiGit, SiTypescript, SiPython, 
    SiCypress, SiJira, SiFigma, SiWebflow,SiAdobeillustrator, SiAdobeindesign, 
    SiAdobephotoshop, SiAdobepremierepro, SiGithub, SiLinkedin, SiHandshake, SiPinterest } from "react-icons/si";
import { FaJava, FaMicrosoft  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { NerdIcon, NerdIconDarkMode, UtahStateIcon, UtahStateIconDarkMode } from "./assets/icons/index.js";
import './App.css'

function App() {

  return (
    <>
    {/* headshot and basic personal info/links */}
    <header className='header-container'>
        {/* Links to accounts */}
        <div className='links-section'>
            <IconContext.Provider value={{className:"react-icons"}}>
                <a target="_blank" href="https://github.com/laremund" className="logo-link">
                    <SiGithub/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/lars-remund-347a10213/" className="logo-link">
                    <SiLinkedin/>
                </a>
                <a target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=larsgremund@gmail.com" className="logo-link">
                    <IoMdMail/>
                </a>
                <a target="_blank" href="https://usu.joinhandshake.com/profiles/tk3cse" className="logo-link">
                    <SiHandshake/>
                </a>
                <a target="_blank" href="https://www.pinterest.com/larsremund/" className="logo-link">
                    <SiPinterest/>
                </a>
            </IconContext.Provider>
        </div>
        <div className='intro-headshot-section'>
            <div className='personal-info-box'>
                <div className='name-and-role-box'>
                    {/* For larger views: */}
                    <h1>Hi, my name is Lars Remund</h1>
                    {/* For smaller views: */}
                    <h1 className='h1-mobile'>Lars Remund</h1>
                    <h2>Developer / Designer</h2>
                </div>

            </div>
        </div>
        <div className='headshot-box'>
            {/* image in here, maybe a background behind it? */}
        </div>
    </header>

    {/* education, skills, employment history */}
    <section className="cards-section">

        {/* education card */}
        <div className="card">
            <div>
                <p>Bachelor`&apos;`s of Science (B.S.),</p>
                <h2>Human Experience Design & Interaction</h2>
                <h3>Computer Science & Multimedia Emphases</h3>
            </div>
            <div className='school-block'>
                <div className="organization-logo">
                    <UtahStateIcon/>
                </div>
                <p><em>Utah State University, Logan, UT</em></p>
            </div>
        </div>

        {/* skills */}
        <div className="card">

            {/* development skills */}
            <div className="software-logos-container">
                <IconContext.Provider value={{className:"react-icons"}}>
                    <div className="software-logo">
                        <SiJavascript/>
                    </div>
                    <div className="software-logo">
                        <SiReact/>
                    </div>
                    <div className="software-logo">
                        <SiHtml5/>
                    </div>
                    <div className="software-logo">
                        <SiCss3/>
                    </div>
                    <div className="software-logo">
                        <SiGit/>
                    </div>
                    <div className="software-logo">
                        <SiTypescript/>
                    </div>
                    <div className="software-logo">
                        <SiPython/>
                    </div>
                    <div className="software-logo">
                        <FaJava/>
                    </div>
                    <div className="software-logo">
                        <SiCypress/>
                    </div>
                    <div className="software-logo">
                        <SiJira/>
                    </div>                    
                </IconContext.Provider>

            </div>

            {/* design skills */}
            <div className="software-logos-container">
                <IconContext.Provider value={{className: "react-icons"}}>
                    <div className="software-logo">
                        <SiFigma/>
                    </div>
                    <div className="software-logo">
                        <SiWebflow/>
                    </div>
                    <div className="software-logo">
                        <SiAdobephotoshop/>
                    </div>
                    <div className="software-logo">
                        <SiAdobepremierepro/>
                    </div>
                    <div className="software-logo">
                        <SiAdobeillustrator/>
                    </div>
                    <div className="software-logo">
                        <SiAdobeindesign/>
                    </div>
                    <div className="software-logo">
                        <FaMicrosoft/>
                    </div>
                </IconContext.Provider>

            </div>
        </div>

        {/* job card #1 */}
        <div className="card">
            <h2>Front-End Engineering Intern</h2>
            <div className="employment-organization">
                <div className="organization-logo-container">
                    <NerdIcon/>
                </div>
                <h3>Nerd United</h3>
            </div>
            <div>
                <p><em>Lehi, UT</em></p>
                <p><em>May 2023 - Aug 2023</em></p>
            </div>
            <p>
                Developed and deployed website features (wallet creation, 
                checkout/cart, payments) for an interface with 25k+ users that 
                generated $20m+ in revenue.
            </p>
            <p>
                Worked in an Agile scrum team - Jira, GitHub, AWS.     
            </p>
        </div>
            
        {/* job card #2 */}
        <div className="card">
            <h2>Q.A. Engineering Intern</h2>
            <div className="employment-organization">
                <div className="organization-logo-container">
                    <NerdIcon/>
                </div>
                <h3>Nerd United</h3>
            </div>
            <div>
                <p><em>Lehi, UT</em></p>
                <p><em>May 2023 - Aug 2023</em></p>
            </div>
            <p>
                Automated testing using JavaScript and Python and coordinated 
                with a scrum team to prepare for product releases.
            </p>
            <p>
                Extensively tested new and existing website features.
            </p>
        </div>

        {/* job card #3 */}
        <div className="card">
            <h2>Lab Representative</h2>
            <div className="employment-organization">
                <div className="organization-logo-container">
                    <UtahStateIcon/>
                </div>
                <h3>Utah State University</h3>
            </div>
            <div>
                <p><em>Logan, UT</em></p>
                <p><em>Mar 2022 - Present</em></p>
            </div>
            <p>
                Managed store website updates and ran the store using Computer 
                and Electrical Engineering skills.
            </p>
            <p>
                Facilitated labs and research projects with professors and grad 
                students.
            </p>
        </div>
    </section>

    {/* digital portfolio, HIDDEN FOR NOW */}
    <section className="expanded-cards-section">
        <section>
            <h1>Portfolio</h1>
        </section>
        <section className="cards-section">
            
            <div className="card">
                <div className="project-window"></div>
                <div className="project-caption-container">
                    <p>description of project</p>
                </div>
            </div>

            <div className="card">
                <div className="project-window"></div>
                <div className="project-caption-container">
                    <p>description of project</p>
                </div>
            </div>

            <div className="card">
                <div className="project-window"></div>
                <div className="project-caption-container">
                    <p>description of project</p>
                </div>
            </div>
        </section>
    </section>
    </>
  )
}

export default App
