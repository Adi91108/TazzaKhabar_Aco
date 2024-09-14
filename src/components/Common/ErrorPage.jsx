import React from 'react'
import Error404 from "../../assets/Error.jpg"

const ErrorPage = () => {
    return (
        <>
            <div className="w-full pt-10 flex flex-col justify-center items-center font-bold text-[40px] text-[#9b9b9b]">
                <img src={Error404} alt="Error404" width={1000} height={1000} className="w-[200px] md:w-[400px] object-contain" />
                <h1 className='text-[16px] md:text-[22px] bg-none'>Oops! API limit exced try after 24hrs</h1>
                <h1 className='text-[16px] md:text-[16px] bg-none'>Refresh the Page</h1>
            </div>
        </>
    )
}

export default ErrorPage
