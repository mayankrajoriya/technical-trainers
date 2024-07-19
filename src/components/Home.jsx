import React from 'react'
import Navbar from './Navbar'
import "./stylesheet/home.css"
import hero from "../assets/hero.webp"

const Home = () => {
  return (
    <div className='home w-full h-screen text-white' id='home'>
        <Navbar/>
        
        <div className='home-component flex justify-between'>
            <div home-text>
                <h2>आज ही अपनी Diploma Internship हमारे साथ शुरू करें !
                </h2>
                <p className='mt-6'>Our industrial training program offers hands-on experience and a recognized certificate, equipping college students with practical skills and career-enhancing opportunities.
                </p>
                <div className='register-div'><a href="https://whatsapp.com/channel/0029VadZsIS5kg7BcrCsPs1q" className='register inline-block border rounded-lg p-2 mt-10'>रजिस्टर करें
                </a></div>
                
            </div>
            <div className='hero-img w-1/2'>
                <img src={hero}  alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home