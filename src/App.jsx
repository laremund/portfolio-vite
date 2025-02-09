// import { useState } from 'react'
// import Card from './Card'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* headshot and basic personal info/links */}
    <header className='header-box'>
        <div className='personal-info-box-box'>
            <div className='personal-info-box'>
                <div className='name-and-role-box'>
                    {/* For larger views: */}
                    <h1>Hi, my name is Lars Remund</h1>
                    {/* For smaller views: */}
                    <h1 className='h1-mobile'>Lars Remund</h1>
                    <h2>Developer, Designer</h2>
                    
                </div>
                {/* Links to accounts */}
                <div className='account-links'>
                    <div className="logo-link"></div>
                    <div className="logo-link"></div>
                    <div className="logo-link"></div>
                    <div className="logo-link"></div>
                    <div className="logo-link"></div>
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
            <div>
                <div className="organization-logo">

                </div>
                <p><em>Utah State University, Logan, UT</em></p>
            </div>
        </div>

        {/* skills */}
        <div className="card">

            {/* development skills */}
            <div className="software-logos-container">
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
            </div>

            {/* design skills */}
            <div className="software-logos-container">
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
                <div className="software-logo"></div>
            </div>
        </div>

        {/* job card #1 */}
        <div className="card">
            <h2>Front-End Engineering Intern</h2>
            <div className="employment-organization">
                <div className="organization-logo-container"></div>
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
                <div className="organization-logo-container"></div>
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
                <div className="organization-logo-container"></div>
                <h3>Nerd United</h3>
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
