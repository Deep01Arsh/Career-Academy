import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-bold mx-auto py-5 pb-20 text-center   text-black">
        We are passionate about revolutionizing the way we learn. Our
        innovative platform combines technology expertise<HighlightText text={""} />{" "}
        <span >
            {" "}
            
        </span>
        , and community to
        <HighlightText text={" create an "} />
       
        <span >
            {" "}
            <HighlightText text={" unparalleled educational"} />
            <HighlightText text={" experience."} />
        
        </span> 
    </div>
  )
}

export default Quote