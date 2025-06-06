import LightboxSlideshow from "./assets/components/LightboxSlideshow.jsx";
import {    
            brainstormApp1, brainstormApp2, brainstormApp3, brainstormApp4, 
            canvasRedesign1, canvasRedesign2, canvasRedesign3, canvasRedesign4,
            portfolioSite1, portfolioSite2, portfolioSite3,
            checklistAppImage, spotifyAppImage, philosophySite, artShareLA, 
            jjkKillBill
        } from "./assets/images/index.js";
import { IconContext, } from "react-icons";
import { 
            SiJavascript, SiReact, SiHtml5, SiCss3, SiGit, SiTypescript, SiPython, 
            SiCypress, SiJira, SiFigma, SiWebflow,SiAdobeillustrator, SiAdobeindesign, 
            SiAdobephotoshop, SiAdobepremierepro, SiGithub, SiLinkedin, SiHandshake, 
            SiPinterest
        } from "react-icons/si";
// import { FaJava, FaMicrosoft  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { NerdIcon, UtahStateIcon } from "./assets/icons/index.js";
import './App.css';

function App() {

    const canvasRedesign = [
        {
            title: "Canvas Messaging Redesign",
            imageUrl: canvasRedesign1,
            description: "Group project improving UX of an app"
        },
        {
            title: "Canvas Messaging Redesign",
            imageUrl: canvasRedesign2,
            description: "Group project improving UX of an app"
        },
        {
            title: "Canvas Messaging Redesign",
            imageUrl: canvasRedesign3,
            description: "Group project improving UX of an app"
        },
        {
            title: "Canvas Messaging Redesign",
            imageUrl: canvasRedesign4,
            description: "Group project improving UX of an app"
        }
    ];

    const brainstormApp = [
        {
            title: "Final Project for ITLS-4225",
            imageUrl: brainstormApp1,
            description: "Final Project for ITLS-4225"
        },
        {
            title: "Final Project for ITLS-4225",
            imageUrl: brainstormApp2,
            description: "Final Project for ITLS-4225"
        },
        {
            title: "Final Project for ITLS-4225",
            imageUrl: brainstormApp3,
            description: "Final Project for ITLS-4225"
        },
        {
            title: "Final Project for ITLS-4225",
            imageUrl: brainstormApp4,
            description: "Final Project for ITLS-4225"
        }
    ];

    const portfolioSite = [
        {
            title: "This Site",
            imageUrl: portfolioSite1,
            description: "Portfolio / Resume Site"
        },
        {
            title: "This Site",
            imageUrl: portfolioSite2,
            description: "Portfolio / Resume Site"
        },
        {
            title: "This Site",
            imageUrl: portfolioSite3,
            description: "Portfolio / Resume Site"
        }
    ];

    const currentProjectsSlides = [
        {
            title: "To-Do Scheduling App",
            imageUrl: checklistAppImage,
            description: "To-Do Scheduling App"
        },
        {
            title: "Fix-Spotify App",
            imageUrl: spotifyAppImage,
            description: "Fix-Spotify App"
        },
        {
            title: "Kierkegaard's Corner",
            imageUrl: philosophySite,
            description: "Kierkegaard's Corner"
        }
    ];
    const projectsSlides = [
        {
            title: "Art Share LA Series",
            imageUrl: artShareLA,
            description: "Art Share LA Series - Class Project"
        },
        {
            title: "Kill Bill X Jujutsu Kaisen",
            imageUrl: jjkKillBill,
            description: "Kill Bill X Jujutsu Kaisen"
        }
    ];
  return (
    <>
    {/* basic personal info/links and headshot */}
    <header className='header-section'>
        {/* Links to accounts */}
        <div className='links-section'>
            <div className="links-box">
                <IconContext.Provider value={{className:"react-icons"}}>
                    <a target="_blank" href="https://github.com/laremund" className="link-icon-box">
                        <SiGithub/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/lars-remund-347a10213/" className="link-icon-box">
                        <SiLinkedin/>
                    </a>
                    <a target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=larsremund2@gmail.com" className="link-icon-box">
                        <IoMdMail/>
                    </a>
                    <a target="_blank" href="https://usu.joinhandshake.com/profiles/tk3cse" className="link-icon-box">
                        <SiHandshake/>
                    </a>
                    <a target="_blank" href="https://www.pinterest.com/larsremund/" className="link-icon-box">
                        <SiPinterest/>
                    </a>
                </IconContext.Provider>
            </div>
        </div>
        <div className='intro-headshot-section'>
            <div className='heading-box'>
                    <h1 className="desktop-h1">Hi, my name is <span className="bold-h1">Lars Remund</span></h1>
                    <h1 className="mobile-h1">
                        Hi, my name is <br/><span className="bold-h1">Lars Remund</span>
                    </h1>
                    <h2 className="special-h2">Developer / Designer</h2>
            </div>
        </div>
        {/* <div className='headshot-box'> */}
            {/* image in here, maybe a background behind it? */}
        {/* </div> */}
    </header>

    <section className="main-grid-section">

        {/* Resume */}
        <div className="resume-box">
            {/* Education */}
            <div className="resume-headers-box">
                <h2 className="resume-h2">Education</h2>
            </div>
            <div className="job-box">
                <p>Bachelor's of Science (B.S.),</p>
                <h2>Human Experience Design & Interaction</h2>
                <h3>Computer Science & Multimedia Emphases</h3>
                <div className='organization-box'>
                    <div className="icon-box">
                        <UtahStateIcon/>
                    </div>
                    <p className="special-p">Utah State University</p>
                </div>
            </div>

            <div className="resume-headers-box">
                <h2 className="resume-h2">Employment</h2>
            </div>

            {/* Job #1 */}
            <div className="job-box">
                <h2>Front-End Engineering Intern</h2>
                <div className="employment-organization-box">
                    <div className="icon-box">
                        <NerdIcon/>
                    </div>
                    <h3>Nerd United</h3>
                </div>
                <div className="place-time-box">
                    <p className="special-p">Lehi, UT</p>
                    <p className="special-p">May 2023 - Aug 2023</p>
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

            {/* Job #2 */}
            <div className="job-box">
                <h2>Q.A. Engineering Intern</h2>
                <div className="employment-organization-box">
                    <div className="icon-box">
                        <NerdIcon/>
                    </div>
                    <h3>Nerd United</h3>
                </div>
                <div className="place-time-box">
                    <p className="special-p">Lehi, UT</p>
                    <p className="special-p">May 2023 - Aug 2023</p>
                </div>
                <p>
                    Automated testing using JavaScript and Python and coordinated 
                    with a scrum team to prepare for product releases.
                </p>
                <p>
                    Extensively tested new and existing website features.
                </p>
            </div>

            {/* Job #3 */}
            <div className="job-box">
                <h2>Lab Representative</h2>
                <div className="employment-organization-box">
                    <div className="icon-box">
                        <UtahStateIcon/>
                    </div>
                    <h3>Utah State University</h3>
                </div>
                <div className="place-time-box">
                    <p className="special-p">Logan, UT</p>
                    <p className="special-p">Mar 2022 - Present</p>
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
        </div>

        <div className="grid-spacer"></div>

        <div className="placeholder-box">
            <div className="section-headers-box">
                <h2 className="resume-h2">Brainstorming App</h2>
            </div>
            <LightboxSlideshow slides={brainstormApp}/>
            <div className="design-link-box">
                <a className="design-link" target="_blank" href="https://www.figma.com/design/DQQ8CS6ZRvjQhxKRQeSnYW/Individual-Final-Project?node-id=8031-874&t=voZqgXFfkOF7fFNf-1">Figma</a>
                <a className="design-link" target="_blank" href="https://drive.google.com/drive/folders/1ye_SWJhh5LuZxtIc86f8mLwwa1YiRSOj?usp=sharing">Process PDFs (Google Drive)</a>
            </div>
        </div>
        <div className="placeholder-box">
            <div className="section-headers-box">
                <h2 className="resume-h2">Canvas App Redesign</h2>
            </div>
            <LightboxSlideshow slides={canvasRedesign}/>
            <div className="design-link-box">
                <a className="design-link" target="_blank" href="https://www.figma.com/design/sQPwpzDFOhPzNK5rXEBvUx/Canvas-Messaging-Redesign?node-id=0-1&p=f&t=5nxrKBX1j4pUz1IT-0">Figma</a>
                <a className="design-link" target="_blank" href="https://drive.google.com/drive/folders/1ye_SWJhh5LuZxtIc86f8mLwwa1YiRSOj?usp=sharing">Process PDFs (Google Drive)</a>
            </div>
        </div>
        <div className="placeholder-box">
            <div className="section-headers-box">
                <h2 className="resume-h2">Portfolio Site</h2>
            </div>
            <LightboxSlideshow slides={portfolioSite}/>
        </div>
        <div className="placeholder-box">
            <div className="section-headers-box">
                <h2 className="resume-h2">In-Progress Apps:</h2>
            </div>
            <LightboxSlideshow slides={currentProjectsSlides}/>
        </div>
        <div className="placeholder-box">
            <div className="section-headers-box">
                <h2 className="resume-h2">Graphic Design Projects</h2>
            </div>
            <LightboxSlideshow slides={projectsSlides}/>
        </div>
        {/* Github contributions chart component from a guy on reddit, doesn't look
        great with my current design */}
        {/* <div className="placeholder-box">
            <img src="https://ghchart.rshah.org/laremund" alt="" />
        </div> */}
    </section>

{/* skills section, commented out until design is done */}
        {/* skills */}
        {/* <div className="card"> */}
            {/* development skills */}
            {/* <div className="software-logos-container">
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
            </div> */}

            {/* design skills */}
            {/* <div className="software-logos-container">
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
            </div> */}
        {/* </div> */}

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
