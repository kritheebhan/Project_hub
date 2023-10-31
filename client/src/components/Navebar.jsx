import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navebar extends Component{
  state={clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render (){
  return (
   <div className='margin bg-sky-100 rounded-lg'>
    <nav className='flex px-8 py-5'>
    <Link to='/' className='text-3xl font-medium'>PROJECT HUB</Link>
    <div className='flex ml-auto'>
        <ul className={this.state.clicked ? "#navbar active" : "#navbar"} id="navbar">
          <li><Link to='/' className='px-5 py-2 font-bold '>Home</Link></li>
          <li><Link to='/About' className='px-5 py-2 font-bold '>About</Link></li>
          <li><Link to='' className='px-5 py-2 font-bold '>Projects</Link></li>
          <li><Link to='' className='px-5 py-2 font-bold '>Contact</Link></li>
          <Link to='/Signin' className='signin flex text-medim bg-sky-400 hover:bg-sky-600 text-white px-5 py-3 font-bold ml-4'><span className='mr-2'>Sign In</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg></Link>
        </ul>
       
    </div>
    <div id="mobail" onClick={this.handleClick}>
      <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    
   </nav>
   </div>
  )
}
}
export default Navebar