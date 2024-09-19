import toast from "react-hot-toast";
import { useAuthContext } from "../Context/authContext";

const useLogin = () =>{

    const {setAuthUser} = useAuthContext();

    // Function to set a cookie
    const setCookie = (name, value, hours) => {
        const date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000)); // Set expiration time (in milliseconds)
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`; // path=/ makes the cookie accessible to all pages
    };

    const login =async ({email,password}) => {

        try{
            const response =await fetch(`${process.env.VITE_BACKEND_BASE_URL}/api/login/admin`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json', // Ensure content type is set to JSON
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
         
            if (response.ok) {
                // Set a cookie with the token, expiring in 5 hours
                setCookie('token', data.token, 5);
                setAuthUser(data.token);
                return true;
            }
            else{

                toast.error(data.message); // Show the error message from backend
                return false;
            }
        }catch (error) {
            // toast.error('Error while logining in');
        }
        }
    
    return {login}
}

export default useLogin;