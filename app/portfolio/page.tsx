'use client'

import  data  from './data';

export default function Portfolio () {
    return (
        <div className="flex justify-center w-full h-full items-center">
        <div className="h-[24rem] lg:h-[32rem] w-4/5 md:w-3/4 lg:w-3/6 carousel carousel-vertical rounded-box bg-base-100">
            {data.map((item: any) => {
                  return  (
                    <div key={item} className="carousel-item h-full">
                        <div className="card card-compact w-full h-full shadow-xl">
                            <figure><img className="object-fill scale-100 hover:scale-110 duration-300" 
                            src={item.img} alt={item.title} /></figure>
                                <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <p>
                                    {item.tags.map((tag: any) => {
                                        return  <span key={tag} className="badge badge-neutral text-xs mx-1">{tag}</span>
                                    })}
                                </p>
                                    <div className="card-actions justify-end">
                                        <a href={item.url} className="btn btn-accent btn-xs" target="_blank">Show Project</a>
                                    </div>
                                </div>
                                <div className=' flex flex-row justify-center'>
                                    <p>
                                    {item.pos[0] ?
                                   <svg className="h-6 w-6 animate-bounce text-inherit"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
                                    </svg>: ''}

                                    {item.pos[1] ?
                                    <svg className="h-6 w-6 animate-bounce text-inherit"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                    </svg> : ''}
                                </p>
                                </div>
                        </div>
                    </div>          
                    )
                })}
            </div>
   

        </div>
    );
}