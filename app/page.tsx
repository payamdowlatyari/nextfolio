'use client'

export default function Home() {
  return (
      <div className="hero h-96" style={{backgroundImage: 'url(https://storage.googleapis.com/www.payamd.com/assets/img/avid-technology-computer-design-wallpaper-preview.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="h-full">
            <h1 className="mb-5 text-5xl font-bold">Payam Dowlatyari</h1>
              <p className="mb-5 max-w-md">
              I'm a software engineer, UX designer, photographer, and blogger.
              </p>
            <a href="/contact" className="btn glass link no-underline">Get In Touch</a>
          </div>
        </div>
      </div>   
  );
}
