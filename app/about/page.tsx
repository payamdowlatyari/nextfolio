'use client'

export default function About() {
    return (
        <div className="flex justify-center w-full h-full items-center">
        <div className="hero w-4/5 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://storage.googleapis.com/www.payamd.com/Portfolio/me-sf2.jpeg" className="w-60 brightness-110 rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-2xl font-bold">My name is Payam Dowlatyari.</h1>
                <p className="py-6">
                
                I am a software engineer, UX designer, photographer, and blogger.
                I studied Software Engineering at UC Irvine and joined Amplify.ai in 2020.
                I have designed and implemented web applications and user interfaces since 2019.
                I am interested in reading about psychology, sociology, philosophy, history, and enjoy walking, cycling and taking photographs.                    </p>
                <a href="/resume" className="btn btn-outline glass link no-underline mx-1 rounded">My Resume</a>
                <a href="/portfolio" className="btn btn-outline glass link no-underline mx-1 rounded">My Portfolio</a>
                </div>
            </div>
        </div>
        </div>
    )
}