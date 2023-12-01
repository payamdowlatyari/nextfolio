'use client'

export default function Home() {
  return (
      <div className="hero h-96 bg-scroll" style={{backgroundImage: 'url(https://storage.googleapis.com/www.payamd.com/assets/img/avid-technology-computer-design-wallpaper-preview.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="h-full">
            <h1 className="mb-5 text-5xl font-bold">Your Name</h1>
              <p className="mb-5 max-w-md">
              A brief introduction about yourself such as your job description, services you offer, work experince, 
              education, projects, skills, hobbies, etc.  
              </p>
            <button className="btn glass">Get In Touch</button>
          </div>
        </div>
      </div>   
  );
}
