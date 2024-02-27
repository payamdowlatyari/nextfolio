'use client'

export default function Home() {
  return (
//  <section className="dark:bg-gray-800 dark:text-gray-100">
// 	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
// 		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
// 			<h1 className="text-5xl font-bold leadi sm:text-6xl">Ac mattis
// 				<span className="dark:text-violet-400">senectus</span>erat pharetra
// 			</h1>
// 			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
// 				<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
// 			</p>
// 			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
// 				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
// 				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>

// 			</div>
// 		</div>
// 		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
// 			<img src="https://storage.googleapis.com/www.payamd.com/Portfolio/3520511.webp" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
// 		</div>
// 	</div>
  
// </section> 



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
