import React from 'react'

const PaddingWrapper = ({ children }) => {
  return (
    <div className='w-full px-4 md:px-10'>
      {children}
    </div>
  )
}

export default PaddingWrapper
