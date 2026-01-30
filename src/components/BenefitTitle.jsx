import React from 'react'

export default function BenefitTitle({title,bg,borderColor,className,color}) {
  return (
    <div className='general-title'>
      <div style={{clipPath:"",
        borderColor:borderColor,
        color:color,

      }} className={` ${className} border-[.5vw] text-nowrap opacity-100`}>
 <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          style={{
            backgroundColor: bg,
          }}
        >
          <h2
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}
