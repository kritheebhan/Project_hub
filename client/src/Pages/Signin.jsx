import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import img2 from "../components/image/img2.png"
import google from "../components/image/google.png"

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // Here, you can perform validation and authentication logic.
    // You might want to make an API request to a backend server to verify credentials.
    console.log('Email:', email);
    console.log('Password:', password);
  }

  render() {
    const { email, password } = this.state;
    
    return (
      <div>
        <div className="signin1 flex relative ">
        <div className="signin2 bg-white flex flex-col justify-center items-center">
        <div className="text-black text-2xl font-extrabold text-start"><p>Sign In</p></div>
        <div className="w-48 h-11 rounded-lg border border-neutral-200 flex justify-center  items-center my-6">
        <img className="w-5 h-5 mr-2" src={google} alt=''/>
        <button className=" text-zinc-500 text-s font-normal font-['Telegraf'] leading-9">Sign in with Google</button> 
        </div> 
        <div className="text-neutral-400 text-lg font-normal font-['Telegraf'] leading-9">- OR -</div>
        <form onSubmit={this.handleSubmit} className='flex flex-col justify-center items-center'>
          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input className="input-box text-neutral-700 text-base font-normal w-72 md:w-96 py-2"
              placeholder='Email Address'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password:</label> */}
            <input className="input-box text-neutral-700 text-base font-normal w-72 md:w-96 py-2"
              placeholder='Password'
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="signup-button w-72 md:w-96 h-11 rounded-lg text-center leading-10 mt-10 mb-8 hover:bg-sky-400">
            <button type="submit"  className="w-36 text-white font-extrabold ">Sign In</button>
          </div>
          <div><span className="text-neutral-400 text-base font-medium font-['Telegraf'] leading-9">Don't have an account?</span><span className="text-emerald-200 text-base font-normal font-['Telegraf'] leading-9"> </span><Link to='/Signup' className="text-emerald-300 hover:text-blue-500 text-base font-normal font-['Telegraf'] leading-9">Create Account</Link></div>
        </form>
        </div>
        <div className='my-10 mx-6 hidden lg:block'>
        <div className="w-96 h-24 text-white text-4xl font-semibold ">Welcome back</div>
        <img className="img2 right-[90px] top-[125.85px] absolute origin-top-right rotate-[-9.75deg]" src={img2} alt='' />
        </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
