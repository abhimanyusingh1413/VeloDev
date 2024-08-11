import React, { useRef, useEffect } from "react";
import Typed from 'typed.js';

import { testimonials } from "../constants"
const Testimonials = () => {
    const el = useRef(null);
    useEffect(()=>{
        const options = {
            strings: ['heelo', 'abc'],
            typeSpeed: 40,
            backSpeed: 20,
            loop: true
          };
        const typed = new Typed(el.current, options);

        return()=>{
            typed.destroy();
        }
        
    },[])
    

      
    
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
      Why Our Clients
      <span className="bg-gradient-to-r from-blue-500 to-red-400 text-transparent bg-clip-text" ref={el}>
        </span>
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                        <p>{testimonial.text}</p>
                        <div className="flex mt-8 items">
                            <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" 
                            src={testimonial.image} 
                            alt={testimonial.user}
                             />
                        </div>
                        <h6>{testimonial.user}</h6>
                        <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials
