'use client'

export default function About() {
    return (
        <div className="flex justify-center w-full h-full items-center">
        <div className="hero w-4/5 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                <h1 className="text-2xl font-bold">Hello.</h1>
                <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam quam nulla porttitor massa. Magnis dis parturient montes nascetur ridiculus mus mauris. Lacus vel facilisis volutpat est. Volutpat lacus laoreet non curabitur gravida arcu ac tortor.                    </p>
                <a href="/resume" className="btn btn-outline glass link no-underline mx-1 rounded">My Resume</a>
                <a href="/portfolio" className="btn btn-outline glass link no-underline mx-1 rounded">My Portfolio</a>
                </div>
            </div>
        </div>
        </div>
    )
}