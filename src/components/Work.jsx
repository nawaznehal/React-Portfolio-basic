import React from 'react'
import r1 from "../assets/r1.png"
import r2 from "../assets/r2.png"
import r3 from "../assets/r3.png"
import html1 from "../assets/html1.png"
import ex2 from "../assets/ex2.png"
import ex3 from "../assets/ex3.png"
import netflix from "../assets/Netflix.png"



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>My Works</p>   
              <p className='py-6'>Check out some of my recent work</p> 
            </div>

            {/* Container    */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
             {/* {items}  */}
             <div 
                style={{backgroundImage: `url(${netflix})`}} 
                className='shadow-lg shadow-[#040c16] group container round-md flex jsutify-center items-center mx-auto content-div'>
                
                {/* effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React X TailwindCss
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
              <div 
                style={{backgroundImage: `url(${r1})`}} 
                className='shadow-lg shadow-[#040c16] group container round-md flex jsutify-center items-center mx-auto content-div'>
                
                {/* effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React Application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
              <div 
                style={{backgroundImage: `url(${html1})`}} 
                className='shadow-lg shadow-[#040c16] group container round-md flex jsutify-center items-center mx-auto content-div'>
                
                {/* effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    HTML Webpage
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
              <div 
                style={{backgroundImage: `url(${r2})`}} 
                className='shadow-lg shadow-[#040c16] group container round-md flex jsutify-center items-center mx-auto content-div'>
                
                {/* effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React Application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
              <div 
                style={{backgroundImage: `url(${r3})`}} 
                className='shadow-lg shadow-[#040c16] group container round-md flex jsutify-center items-center mx-auto content-div'>
                
                {/* effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React Application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
              <div 
                style={{backgroundImage: `url(${ex2})`}} 
                className='shadow-lg shadow-[#040c16] group container round-md flex jsutify-center items-center mx-auto content-div'>
                
                {/* effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React Application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
              <div 
                style={{backgroundImage: `url(${ex3})`}} 
                className='shadow-lg shadow-[#040c16] group container round-md flex jsutify-center items-center mx-auto content-div'>
                
                {/* effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React Application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="">
                      <button className='text-center rounded-lg px-4 py-3 mo-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Work
