'use client'

export default function Home() {
  return (
 <div className="relative z-20 flex items-center overflow-hidden bg-base-200 text-current">
    <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-current">
            </span>
            <h1 className="flex flex-col text-6xl font-black leading-none uppercase font-bebas-neue sm:text-8xl">
                Hello. 
                <span className="text-4xl sm:text-6xl">
                    Welcome to my Portfolio
                </span>
            </h1>
            <p className="text-sm sm:text-base ">
            Powered by with Next.js and Tailwind.css            
            </p>
            <div className="flex mt-8">
                <a href="/contact" className="btn bg-orange-500 hover:bg-orange-600 mx-1 rounded">
                Get In Touch
                </a>
                <a href="/about" className="btn btn-outline glass link no-underline mx-1 rounded">About Me</a>
            </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img src="https://storage.googleapis.com/www.payamd.com/svg/coding.svg" className="max-w-xs m-auto md:max-w-sm"/>
        </div>
    </div>
</div>  
  );
}
