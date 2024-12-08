import React from 'react'
import { SiGithub , SiLinkedin } from "react-icons/si"

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-3 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold max-sm:text-lg'>Shahzaib Yaqoob</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl max-sm:text-2xl'>
                <a href="https://github.com/mshahzaib4/mshahzaib4"><SiGithub/></a>
                <a href="https://www.linkedin.com/in/shahzaibyaqoob/"><SiLinkedin/></a>
            </div>

        </div>

        <p className='text-gray-400 max-sm:text-lg self-center'>@2024 Shahzaib Yaqoob</p>
        
    </div>
  )
}

export default Footer