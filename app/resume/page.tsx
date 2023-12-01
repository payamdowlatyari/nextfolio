'use client'

const Resume = () => {

  return (
      <div className="min-h-full min-w-full">
        <div className="collapse bg-base-200 text-current">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-medium text-center">
            Experience
          </div>
          <div className="collapse-content"> 
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end timeline-box">
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
                <div className="timeline-end mb-10 timeline-box">
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
                <div className="timeline-start md:text-end mb-10 timeline-box">
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
                <div className="timeline-end mb-10 timeline-box">
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
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-medium text-center">
            Education
          </div>
          <div className="collapse-content"> 
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end timeline-box">
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
                <div className="timeline-end mb-10 timeline-box">
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
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" /> 
          <div className="collapse-title text-xl font-medium text-center">
           Skills
          </div>
          <div className="collapse-content"> 
            <p>Skill 1</p>
            <p>Skill 2</p>
            <p>Skill 3</p>
          </div>
        </div>
    </div>
  );
}

export default Resume;