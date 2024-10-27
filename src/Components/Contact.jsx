import React from 'react'
import { CONTACT, SOCIAL_MEDIA_LINKS } from '../constants'

const Contact = () => {
  return (
    <div  id='contact' className=' py-8'>
          <div className=' mx-auto max-w-6xl'>
          <p className=' my-10 text-center text-3xl lg:text-8xl'>Interested In Working Together?</p>
          <p className=' p-4 text-center text-xl'>{CONTACT.text}</p>
          <p className=' my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl'>{CONTACT.email}</p>
          <p className=' my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl'>{CONTACT.phone}</p>
          </div>
          <div className=' mt-20 max-sm:mt-12 flex justify-center items-center gap-8'>
                  {SOCIAL_MEDIA_LINKS.map((link , index)=>{
                     return (
                        <a href={link.href} key={index}>{link.icon}</a>
                     )
                  })}
          </div>
          <p className=' my-8 text-center text-gray-400'>© [2024] [Shahzaib Yaqoob]. All rights reserved.</p>
    </div>
  )
}

export default Contact