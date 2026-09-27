import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
const API_URL = import.meta.env.VITE_API_URL;
const LoginForm = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const [user,setuser] = useState(null);
    const formData = {
        email : email,
        password: password
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(API_URL,formData);
            setMessage(response.data.message);
            setuser(response.data.user)
        }
        catch(err){
            setMessage(err.response?.data?.message || 'Something went wrong...')
        }

        if(user){
            navigate("/dashboard");
        }else{
            navigate("/login");
        }
    }





    return(
        <>
        <div className="lg:w-[58%] bg-[#fbfdfc] flex items-center">

          <div className="w-full max-w-[470px] mx-auto px-7 sm:px-10 py-14">

          <form>
            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-[#344c47] mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="
                  w-full
                  h-12
                  px-4
                  rounded-xl
                  border
                  border-[#d9e4e1]
                  outline-none
                  text-sm
                  focus:border-[#075c4c]
                  focus:ring-2
                  focus:ring-[#075c4c]/10
                "
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>


            {/* Password */}
            <div className="mt-6">

              <label className="block text-sm font-semibold text-[#344c47] mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="
                    w-full
                    h-12
                    px-4
                    pr-12
                    rounded-xl
                    border
                    border-[#d9e4e1]
                    outline-none
                    text-sm
                    focus:border-[#075c4c]
                    focus:ring-2
                    focus:ring-[#075c4c]/10
                  "
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              

              </div>

            </div>


            {/* Remember + Forgot Password */}
            <div className="flex items-center justify-between mt-5">

              <label className="flex items-center gap-2 text-sm text-gray-600">

                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#075c4c]"
                />

                Remember me

              </label>


              <button className="text-sm text-[#075c4c]">
                Forgot password?
              </button>

            </div>


            {/* Login Button */}
            <button
              className="
                w-full
                h-12
                mt-7
                rounded-xl
                bg-[#075c4c]
                hover:bg-[#064c3d]
                text-white
                font-semibold
                transition cursor-pointer
              "
              onClick={handleLogin}
            >
              Login →
            </button>
          </form>

          </div>

        </div>
        </>
    )
}

export default LoginForm;