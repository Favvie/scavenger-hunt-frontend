import React from 'react'
import back from '@/public/images/back.svg'
import Image from 'next/image'
const BackButton = () => {
  return (
    <button><Image src={back} alt='back'/></button>
  )
}

export default BackButton