'use client'

const Resume = () => {

  return (
      <div className="min-h-full min-w-full">
        <div className="collapse bg-base-100 text-current my-2">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-medium text-center uppercase">
            Experience
          </div>
          <div className="collapse-content"> 
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end timeline-box bg-base-300">
                  <time className="font-mono italic">Dec 2020 - Nov 2023</time>
                  <div className="text-md font-semibold uppercase">Sotware Engineer, Amplify.ai</div>
                  <div className="text-left text-sm">
                  Design, develop, test, and deploy virtual assistant apps <br/>
                  Developed 50+ chatbots on various social media platforms <br/>
                  Created automated tools and services with Jenkins <br/>
                  Used AWS to maintain the platform and create features <br/>
                  Developed user interfaces using JS frameworks   
                  </div>             
                  </div>
                <hr/>
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10 timeline-box bg-base-300">
                  <time className="font-mono italic">Sep 2019 - Present</time>
                  <div className="text-md font-semibold uppercase">Full Stack Web Developer, Freelance</div>
                  <div className="text-left text-sm">
                  Design and develop interactive user interfaces<br/>
                  Create responsive and low-cost business websites<br/>
                  Develop and deploy server-side web applications<br/>
                  Design system artitechture for full-stack applications  
                  </div>              
                  </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10 timeline-box bg-base-300">
                  <time className="font-mono italic">Sep 2020 - Dec 2020</time>
                  <div className="text-md font-semibold uppercase">LEARNING ASSISTANT, UCI Computer Science</div>
                  <div className="text-left text-sm">
                    Worked with I&C SCI 31 course (Intro to Programming) staff<br/>
                    Supported instructor by assisting students in active learning<br/>
                    Held weekly office hours and grade quizzes and assignments<br/>
                  </div>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10 timeline-box bg-base-300">
                  <time className="font-mono italic">Dec 2019 - June 2020</time>
                  <div className="text-md font-semibold uppercase">RESEARCH ASSISTANT, UCI INFORMATICS</div>
                  <div className="text-left text-sm">
                    Reviewed and classified 150+ scientific papers<br/>
                    Co-authored a published an article in personal informatics<br/>
                    Developed interactive UI for importing, saving, and browsing articles<br/>
                    Implemented functions to import and convert BibTex to JSON files
                  </div>              
                  </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse bg-base-100 my-2">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-medium text-center uppercase">
            Education
          </div>
          <div className="collapse-content"> 
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end timeline-box bg-base-300">
                  <time className="font-mono italic">Sep 2021 - June 2022</time>
                  <div className="text-md font-semibold uppercase">FULL STACK WEB DEVELOPMENT, PG Certificate</div>
                  <div className="text-left text-md">California Institute of Technology</div>
                  <div className="text-left text-sm">
                  Capstone: A full-stack bank portal application
                  </div>             
                  </div>
                <hr/>
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10 timeline-box bg-base-300">
                  <time className="font-mono italic">Sep 2018 - Dec 2020</time>
                  <div className="text-md font-semibold uppercase">SOFTWARE ENGINEERING, B.S.</div>
                  <div className="text-left text-md">University of California, Irvine</div>
                  <div className="text-left text-sm">
                  Capstone: Grid-Level Energy Negotiation for EVSE Systems<br/>
                  Research Area: Informatics and Human-Computer Interaction<br/>
                  Honor Society: National Society of Leadership and Success (ΣAπ)
                  </div>              
                  </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse bg-base-100 my-2">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-medium text-center uppercase">
           Skills
          </div>
          <div className="collapse-content m-2"> 
          <div className="divider"><span className="badge badge-outline m-1">Frontend</span></div>
            <div className="flex flex-row justify-center">
              <span className="tooltip" data-tip="CSS3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" className="w-12 m-1"/>   
              </span>        
              <span className="tooltip" data-tip="HTML5">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" className="w-12 m-1"/>          
              </span>
              <span className="tooltip" data-tip="JavaScript">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" className="w-12 m-1"/>
              </span>
              <span className="tooltip" data-tip="TypeScript">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" className="w-12 m-1"/>
              </span>
              <span className="tooltip" data-tip="ReactJS">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-12 m-1"/>
              </span>
              <span className="tooltip" data-tip="Angular">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" className="w-12 m-1"/>
              </span>
              <span className="tooltip" data-tip="SvelteJS">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" className="w-12 m-1"/>
              </span>  
            </div>
            <div className="divider"><span className="badge badge-outline m-1">Backend</span></div>
            <div className="flex flex-row justify-center">
              <span className="tooltip" data-tip="NodeJS">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-12 m-1"/>         
              </span>
              <span className="tooltip" data-tip="ExpressJS">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-12 m-1"/>
              </span>
              <span className="tooltip" data-tip="Java">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-12 m-1"/>          
              </span>
              <span className="tooltip" data-tip="Spring">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-12 m-1"/>          
              </span>
              <span className="tooltip" data-tip="MongoDB">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-12 m-1"/>
              </span>
              <span className="tooltip" data-tip="MySQL">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-12 m-1"/>          
              </span>
            </div>
            <div className="divider"><span className="badge badge-outline m-1">DevOps</span></div>
            <div className="flex flex-row justify-center">
              <span className="tooltip" data-tip="git">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-12 m-1"/>         
              </span>
              <span className="tooltip" data-tip="Jenkins">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" className="w-12 m-1"/>
              </span>
              <span className="tooltip" data-tip="AWS">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" className="w-12 m-1"/>          
              </span>         
            </div>
          </div>
        </div>
        <div className="collapse bg-base-100 my-2">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-medium text-center uppercase">
            PUBLICATIONS
          </div>
          <div className="collapse-content"> 
          <div className="flex flex-row justify-center ">
            <a href="https://dl.acm.org/doi/10.1145/3432231" className="font-semibold">
              Mapping and Taking Stock of the Personal Informatics Literature
            </a>
            </div>
            <div className="flex flex-row justify-center">
              <p className="text-xs sm:basis-1/2 lg:basis-3/5 font-extralight m-1">
              Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies December 2020 Article No.: 126              
              </p>
            </div>
            <div className="flex flex-row justify-center">
            <p className="text-xs sm:basis-1/2 lg:basis-3/5 m-2">
            Abstract: The research community on the study and design of systems for personal informatics has grown over the past decade. 
            To take stock of what the topics the field has studied and methods the field has used, we map and label 523 publications from ACM's library, IEEE Xplore, 
            and PubMed. We surface that the literature has focused on studying and designing for health and wellness domains, an emphasis on understanding and overcoming barriers to data collection and reflection, 
            and progressively fewer contributions involving artifacts being made. Our mapping review suggests directions future research could explore, such as identifying and resolving barriers to tracking stages 
            beyond collection and reflection, engaging more with domain experts, and further discussing the privacy and ethical concerns around tracked data.
            </p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Resume;