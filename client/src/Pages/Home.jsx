import React from 'react'
import h_img from '../components/image/Home.jpg'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div id="intro">
       <div className='text-center lg:text-left lg:py-54 py-36 lg:ml-20 m-5' id='intro-1'>
       <h2 className='text-5xl lg:text-6xl md:text-6xl font-semibold'>
       Turning Your Ideas into Reality
        </h2>
        <p className=" font-normal py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae sint laudantium molestias, et cupiditate quidem soluta reprehenderit. Tempore vel veniam maxime.</p>
        <div class="pt-8">
          <Link to='/Signup' className="signup bg-sky-400 hover:bg-sky-600 text-white px-10 py-4 " href="">
          <span className="font-bold text-medim text-lg">Sign up</span></Link>
        </div>
       </div>
       <div className='flex justify-center'  id='intro-2'>
       <img src={h_img} alt="" className='img' />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Home