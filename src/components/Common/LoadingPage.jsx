import React from 'react'

const LoadingPage = () => {
  return (
    <>
      {
         [...Array(20)].map((_, index) => (
            <div key={index} className="w-full rounded-xl flex flex-col gap-3">
                <div className='w-full h-[170px] rounded-xl bg-blue-600/10'></div>
                <div>
                    <div className="w-full h-[30px] bg-blue-600/10 mb-2 rounded-xl"></div>
                    <div className="w-2/3 h-[30px] bg-blue-600/10 rounded-xl"></div>
                </div>
            </div>
        ))
      }
    </>
  )
}

export default LoadingPage
