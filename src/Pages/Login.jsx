import React, { useState ,useEffect} from 'react'
import Logo from '../assets/img/Logo.png'
import toast from 'react-hot-toast';
import useLogin from '../hooks/useLogin';
import { useAuthContext } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);  // New state to toggle password visibility
    const {login} = useLogin();

    const {authUser} = useAuthContext();
    

    useEffect(() => {
    if (authUser) {
        navigate('/admin-dashboard'); // Navigate to the login page if user is not authenticated
    }
    }, [authUser, navigate]);

    {authUser ? navigate('/admin-dashboard') : null}

   

    const handleSubmit =async (e) =>{
        e.preventDefault();
        
        if (!email || !password) {
            toast.error("Please fill all the fields.")
            return;
        }
        const success = await login({email,password});
        if(success){
            toast.success('Login Successful');
            setTimeout(() => {
                window.location.href = '/admin-dashboard';
            }, 1000);
        }
    }



  return (
    <div>
        <section className="bg-gray-50  h-screen ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                <img className="w-8 h-8 mr-2" src={Logo} alt="logo"/>
                Graysol    
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6 text-[17px]" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary-600 focus:border-secondary-default block w-full p-2.5" placeholder="name@company.com" required="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary-default focus:border-secondary-default block w-full p-2.5 text-[15px]" required="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <div
                                        className="absolute bottom-3 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                                        onClick={()=>setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                                    </div>
                        </div>
                       
                        <button type="submit" className="w-full text-white bg-secondary-default hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                       
                    </form>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}
