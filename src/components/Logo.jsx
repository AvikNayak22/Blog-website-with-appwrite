import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className={`text-green-500 text-xl logo w-[${width}]`}>PAPER PLANE</div>
  )
}

export default Logo