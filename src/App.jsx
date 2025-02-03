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
    <section>
        <div>
            <div>
                <div>
                    <h1>Hi, my name is Lars Remund</h1>
                    <h2>Developer, Designer</h2>
                </div>

                <div>
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <div className="logo"></div>
                </div>
            </div>
        </div>
        <div>
            {/* image in here, maybe a background behind it? */}
        </div>
    </section>

    {/* education, skills, employment history */}
    <section className="cards-section">

        {/* education card */}
        <div className="card">
            <div>
                <p>Bachelor's of Science (B.S.),</p>
                <h2>Human Experience Design & Interaction</h2>
                <h3>Computer Science & Multimedia Emphases</h3>
            </div>
            <div>
                <div className="organization-logo-container"></div>
                <p><em>Utah State University, Logan, UT 84321</em></p>
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
            <h2>Web Dev. Intern</h2>
            <div className="employment-organization">
                <div className="organization-logo-container"></div>
                <h3>Nerd United</h3>
            </div>
            <div>
                <p><em>Lehi, UT</em></p>
                <p><em>May 2023 - Aug 2023</em></p>
            </div>
            <p>
                Created website features using languages like React, collaborating closely with an Agile team, to refine interfaces used
                by 25k+ users that generated $XXm in revenue.
            </p>
            <p>
                Regularly shipped new or debugged code to the team repository as part of an Agile scrum team.
            </p>
        </div>
            
        {/* job card #2 */}
        <div className="card">
            <h2>Q.A. Intern</h2>
            <div className="employment-organization">
                <div className="organization-logo-container"></div>
                <h3>Nerd United</h3>
            </div>
            <div>
                <p><em></em></p>
                <p><em></em></p>
            </div>
            <p></p>
            <p></p>
        </div>

        {/* job card #3 */}
        <div className="card">
            <h2>Lab Rep.</h2>
            <div className="employment-organization">
                <div className="organization-logo-container"></div>
                <h3>Nerd United</h3>
            </div>
            <div>
                <p><em></em></p>
                <p><em></em></p>
            </div>
            <p></p>
            <p></p>
        </div>
    </section>

    {/* digital portfolio */}
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

      {/* <Card></Card> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
