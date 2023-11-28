'use client'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-neutral text-neutral-content">
      <Navbar/>
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Your Name</h1>
                  <p className="mb-5">
                  A brief introduction about yourself such as your job description, services you offer, work experince, 
                  education, projects, skills, hobbies, etc.  
                  </p>
                <button className="btn glass">Get In Touch</button>
              </div>
            </div>
          </div>       
     <Footer/>
    </main>
  )
}
