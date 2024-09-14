import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';


const Modal = ({ children, showModal, setShowModal }) => {

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);

    return (
        <div className='w-full h-screen overflow-hidden'>
            {showModal && createPortal(
                <div onClick={() => setShowModal(false)} className='fixed top-0 left-0 w-full h-screen z-10 bg-[#2424245e] overflow-hidden flex justify-center items-center bg-none'>
                    <div className='flex justify-center items-center w-full bg-none'>
                        {children}
                    </div>

                </div>,
                document.body
            )}
        </div>
    )
}

export default Modal
