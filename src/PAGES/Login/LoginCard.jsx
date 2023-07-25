import React,{useDebugValue, useState} from 'react'
import LoginSVG from "../../images/LoginHome.svg"
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { loginUser } from '../../Redux/Slices/UserSlice';
import { useDispatch } from 'react-redux';

const LoginCard = () => {

  const [showPassword,setShowPassword] = useState(false);

  const [loginCred, setLoginCred] = useState({
    email: undefined,
    password: undefined,
  });
  const [regCred, setRegCred] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const [register,setRegister] = useState(false);
  const token  = localStorage.getItem("token")

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister=()=>{
    
    // setRegCred({
    //   username: undefined,
    //   email: undefined,
    //   password: undefined,
    // })
    // setLoginCred({
    //   email: undefined,
    //   password: undefined,
    // })
    setRegister(!register);
  }

  const handleChange = (e) => {
    if (!register)
      setLoginCred((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    else setRegCred((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    // console.log(loginCred,regCred);
  };

  const handleSubmit=async (e)=>{
    // e.preventDefault();
    if(token){
      localStorage.clear("token");
      localStorage.clear("user");
      toast.success(`Come Back Soon`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/login");
    }
    else{

    
    if (register) {
      try {
        // console.log(regCred)
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, regCred);
        if(res.status==200)
       { toast.success(`Register Successfully!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/login");
        setRegister(!register);
      }
        else{
            toast.error(res.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
        // alert("Registered Successfully!");
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, loginCred);
        if(res.status==200){
        dispatch(loginUser(res.data.user));
        localStorage.setItem("user",JSON.stringify(res.data.user));
        toast.success(`Welcome ${res.data.user.name}!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // setCookie("access_token", res.data.token);
        localStorage.setItem("token",JSON.stringify(res.data.token));
        // console.log(res.data)

        // getCart(res.data.details._id, res.data.token);
        navigate("/");
        }
        else{
          console.log("check");
            toast.error(res.data.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
      } catch (err) {
        console.log(err);
      }

    setLoginCred({
      email:undefined,
      password:undefined
    })
    setRegCred({
      email:undefined,
      password:undefined,
      username:undefined
    })
    }
  }
  }








  return (
    <div>




        <section class="h-screen">
  <div class="container h-full px-6 py-24">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      {/* <!-- Left column container with background--> */}
      <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src={LoginSVG}
          class="w-full"
          alt="Phone image" />
      </div>

      {/* <!-- Right column container with form --> */}
      <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
            <div className='mb-4'>
                    <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Login to your account</p>
                    <p onClick={()=>{handleRegister()}} tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">{register?"Already Have an Account?":"Dont have account?"} <a href="javascript:void(0)"   class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"> {register?"Login here":"Sign up here"}</a></p>
            </div>
        {/* <form> */}
          {/* <!-- Username input --> */}
         { token?<>Already Leaving?</>:register?<div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-[#FFF5E4] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="username"
              onChange={handleChange}
              value = {regCred.username}
              placeholder="Username" />
            <label
              for="username"
              class="pointer-events-none absolute left-3 top-0 mb-0  max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >Username
            </label>
          </div>
          {/* <!-- Email input --> */}
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-[#FFF5E4] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="email"
              value = {regCred.email}
              onChange={handleChange}
              placeholder="Email address" />
            <label
              for="email"
              class="pointer-events-none absolute left-3 top-0 mb-0  max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >Email address
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div class="relative flex mb-6  items-center" data-te-input-wrapper-init>
            <input
              class="peer block min-h-[auto] w-full rounded border-0 bg-[#FFF5E4] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              type={showPassword?"text":"password"}
              id="password"
              onChange={handleChange}
              value = {regCred.password}
              placeholder="Password" />
            <label
              for="password"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >Password
            </label>
            <div onClick={()=>setShowPassword(!showPassword)} class="absolute right-0 mr-3 cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z" fill="#71717A"/>
                                    </svg>
                                    
                            </div>
            
          </div>
          </div>:
          <div>
          {/* <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-[#FFF5E4] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="username"
              onChange={handleChange}
              placeholder="Username" />
            <label
              for="exampleFormControlInput3"
              class="pointer-events-none absolute left-3 top-0 mb-0  max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >Username
            </label>
          </div> */}
          {/* <!-- Email input --> */}
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-[#FFF5E4] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="email"
              onChange={handleChange}
              value = {loginCred.email}
              placeholder="Email address" />
            <label
              for="email"
              class="pointer-events-none absolute left-3 top-0 mb-0  max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >Email address
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div class="relative flex mb-6  items-center" data-te-input-wrapper-init>
            <input
              class="peer block min-h-[auto] w-full rounded border-0 bg-[#FFF5E4] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              type={showPassword?"text":"password"}
              id="password"
              onChange={handleChange}
              value = {loginCred.password}
              placeholder="Password" />
            <label
              for="password"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >Password
            </label>
            <div onClick={()=>setShowPassword(!showPassword)} class="absolute right-0 mr-3 cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z" fill="#71717A"/>
                                    </svg>
                                    
                            </div>
            
          </div>
          </div>}

          {/* <!-- Remember me checkbox --> */}
          <div class="mb-6 flex items-center justify-between">
            {/* <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                type="checkbox"
                value=""
                id="exampleCheck3"
                checked />
              <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                for="exampleCheck3">
                Remember me
              </label>
            </div> */}

            {/* <!-- Forgot password link --> */}
           {token?<></>: <a
              href="#!"
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
              >Forgot password?</a>}
          </div>

          {/* <!-- Submit button --> */}
          <button
            onClick={()=>{handleSubmit()}}
            class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
            data-te-ripple-init
            data-te-ripple-color="light">
            {token?"log Out":!register?"Log in":"Sign in"}
          </button>

          {/* <!-- Divider --> */}
          {/* <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center font-semibold">
              OR
            </p>
          </div>

          
          <a
            class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  bg-[#3b5998]"
            // style="background-color: #3b5998"
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            Continue with Facebook
          </a>
          <a
            class="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] 
            bg-[#55acee]"
            // style="background-color: #55acee"
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            Continue with Twitter
          </a> */}
        {/* </form> */}
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default LoginCard