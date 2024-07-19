import React from 'react'
import "./stylesheet/contact.css"

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1 className="border-b text-2xl mb-8 pb-3">Contact Us</h1>
      <div className=''>
        <input type="email" placeholder='Email' className='block p-2 rounded-md outline-none text-black'/>
        <input type="text" placeholder='Message' className='block py-1 px-2 rounded-md my-3 h-16 outline-none text-black'/>
        <button className='bg-blue-700 p-2 rounded-md'>Submit</button>
      </div>
    </div>
  )
}

export default Contact