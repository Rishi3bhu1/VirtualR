import React from 'react'
import {CheckCircle2} from "lucide-react"
import {pricingOptions} from "../constants/index.jsx"
const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((options,index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl">
                  <p className="text-4xl mb-8 text-center">
                    {options.title}
                    {options.title==="Pro"&&<span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mn-4 ml-2">{" "}(Most Popular)</span>}
                    </p>  
                    <p className="mb-8">
                        <span className="text-5xl mt-6 mr-2">{options.price}</span>
                        <span className="tracking-tight text-neutral-400">/Month</span>
                    </p>
                    <ul>
                        {options.features.map((feature,index)=>(
                            <li key={index} className="flex mb-4">
                                <span className="text-green-400 mr-4 "><CheckCircle2/></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="inline-flex justify-center items-center text-center w-full tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200 p-5 mt-20 ">
                    Subscribe
                    </a>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
