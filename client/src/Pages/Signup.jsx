import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import img1 from "../components/image/img1.png"
import google from "../components/image/google.png"

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
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
    const { firstName, lastName, email, password } = this.state;
    // Here, you can perform validation and user registration logic.
    // You might want to make an API request to a backend server to create a new user.
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  }

  render() {
    const { firstName, email, password } = this.state;
    
    return (
      
      <div className="signup1 flex relative ">
        <div className='my-10 mx-6 hidden lg:block'>
        <div className="w-96 h-24 text-white text-4xl font-semibold ">Let's Get Started</div>
        <img className="img1 left-[34px] top-[235.85px] absolute origin-top-left rotate-[-9.75deg]" src={img1} alt='' />
        </div>
        <div className="signup2 bg-white flex flex-col justify-center items-center">
        <div className="text-black text-2xl font-extrabold text-start"><p>Create Account</p></div>
        <div className="w-48 h-11 rounded-lg border border-neutral-200 flex justify-center  items-center my-6">
        <img className="w-5 h-5 mr-2" src={google} alt=''/>
        <button className=" text-zinc-500 text-s font-normal font-['Telegraf'] leading-9">Sign up with Google</button> 
        </div> 
        <div className="text-neutral-400 text-lg font-normal font-['Telegraf'] leading-9">- OR -</div>
        <form onSubmit={this.handleSubmit} className='flex flex-col justify-center items-center'>
          <div>
            {/* <label htmlFor="firstName">First Name:</label> */}
            <input className="input-box text-neutral-700 text-base font-normal w-72 md:w-96 py-2"
            placeholder='Full Name'
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input  className="input-box text-neutral-700 text-base font-normal w-72 md:w-96 py-2"
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
            <input  className="input-box text-neutral-700 text-base font-normal w-72 md:w-96 py-2"
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
            <button type="submit" className="w-36 text-white font-extrabold ">Create Account</button>
          </div>
          <div><span className="text-neutral-400 text-base font-medium font-['Telegraf'] leading-9">Already have an account?</span><span className="text-emerald-200 text-base font-normal font-['Telegraf'] leading-9"> </span><Link to='/Signin' className="text-emerald-300 hover:text-blue-500 text-base font-normal font-['Telegraf'] leading-9">Log in</Link></div>
        </form>
      </div>
      </div>
    );
  }
}

export default SignUpForm;
