import React from 'react'
import PaddingWrapper from "../components/PaddingWrapper"

const MainIndex = ({ children }) => {
  return (
    <>
      <PaddingWrapper>
        {children}
      </PaddingWrapper>
    </>
  )
}

export default MainIndex
