'use client'

export default function Portfolio () {
    return (
        <div className="flex justify-center w-full h-full">
        <div className="h-96 w-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
                <div className="card card-compact w-full h-full shadow-xl">
                    <figure><img className="object-fill grayscale scale-95 hover:grayscale-0 hover:scale-100 duration-300" src="https://storage.googleapis.com/www.payamd.com/Portfolio/PaperBrowser.png" alt="Paper Browser" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">Paper Browser</h2>
                    <p>A research manegement user intrface</p>
                        <p>
                        <span className="badge badge-neutral text-xs mx-1">Angular</span>
                        <span className="badge badge-neutral text-xs mx-1">Bootstrap</span>
                        </p>
                        <div className="card-actions justify-end">
                            <a href="https://personal-informatics.depstein.net/" className="btn btn-accent btn-xs" target="_blank">Show Project</a>
                        </div>
                    </div>
                </div>          
            </div> 
            <div className="carousel-item h-full">
            <div className="card card-compact w-full h-full shadow-xl">
                    <figure><img className="object-fill grayscale scale-95 hover:grayscale-0 hover:scale-100 duration-300" src="https://storage.googleapis.com/www.payamd.com/Portfolio/MyDash_Projects_L.png" alt="My Dashbaord" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">My Dashbaord</h2>
                        <p>A project management user intrface</p>
                        <p>
                        <span className="badge badge-neutral text-xs mx-1">React.js</span>
                        <span className="badge badge-neutral text-xs mx-1">Node.js</span>
                        <span className="badge badge-neutral text-xs mx-1">Express.js</span>
                        <span className="badge badge-neutral text-xs mx-1">MongoDB</span>
                        </p>
                        <div className="card-actions justify-end">
                        <a href="https://dashboard-mern-r47l.vercel.app/" className="btn btn-accent btn-xs" target="_blank">Show Project</a>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="carousel-item h-full">
            <div className="card card-compact w-full h-full shadow-xl">
                    <figure><img className="object-fill grayscale scale-95 hover:grayscale-0 hover:scale-100 duration-300" src="https://storage.googleapis.com/www.payamd.com/Portfolio/M-Studio2.png" alt="M-Studios" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">M-Studios</h2>
                        <p>A responsive business portfolio</p>
                        <p>
                        <span className="badge badge-neutral text-xs mx-1">JavaScript</span>
                        <span className="badge badge-neutral text-xs mx-1">Bootstrap</span>
                        </p>
                        <div className="card-actions justify-end">
                        <a href="https://m-studios.us/" className="btn btn-accent btn-xs" target="_blank">Show Project</a>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="carousel-item h-full">
            <div className="card card-compact w-full h-full shadow-xl">
                    <figure><img className="object-fill grayscale scale-95 hover:grayscale-0 hover:scale-100 duration-300" src="https://storage.googleapis.com/www.payamd.com/Portfolio/CalPlug.png" alt="M-Admin Web Portal" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Admin Web Portal</h2>
                        <p>A full-stack admin application</p>
                        <p>
                        <span className="badge badge-neutral text-xs mx-1">React.js</span>
                        <span className="badge badge-neutral text-xs mx-1">Node.js</span>
                        <span className="badge badge-neutral text-xs mx-1">Express.js</span>
                        <span className="badge badge-neutral text-xs mx-1">MongoDB</span>
                        </p>
                        <div className="card-actions justify-end">
                        <a href="https://payamdowlatyari.github.io/admin-web-portal/" className="btn btn-accent btn-xs" target="_blank">Show Project</a>
                        </div>
                    </div>
                </div>            
            </div> 
            </div>
        </div>
    );
}