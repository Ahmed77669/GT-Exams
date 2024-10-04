import React from 'react';
import { Poppins } from "next/font/google";
import { CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

interface LoginProps {
  toggleForm: (formType: 'signup' | 'resetPassword') => void; // Toggle to reset password or signup
}

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Login: React.FC<LoginProps> = ({ toggleForm }) => {
  const route = useRouter();

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <section className={poppins.className}>
        <div className="flex justify-center items-start fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1000]">
          <div className="p-5 rounded-lg max-w-[1600px] w-full mt-10 bg-[#000000e7]">
            <div className="flex flex-col min-h-[748.5px]">
              <div className="w-450 h-400 bg-teal-600 rounded-l-lg flex items-center">
                <div className="text-white text-5xl ml-5">Welcome Back</div>
              </div>
              <div className="flex flex-col items-center text-white text-2xl mt-10">
                <p className="text-center mb-10">Log In</p>
                <form className="flex flex-col items-center" onSubmit={(e) => { e.preventDefault(); route.push('/home'); }}>
                  <input
                    type="email"
                    className='text-field w-96 mb-4 p-3 text-lg rounded-md'
                    placeholder='Email'
                    required
                  />
                  <input
                    type="password"
                    className='text-field w-96 mb-4 p-3 text-lg rounded-md'
                    placeholder='Password'
                    required
                  />
                  <div className="flex mb-5 w-96">
                    <p className="text-sm">
                      Forgot your password?{" "}
                      <span
                        className="text-teal-600 cursor-pointer"
                        onClick={() => toggleForm('resetPassword')} // Trigger the reset password form
                      >
                        Reset here
                      </span>
                    </p>
                  </div>
                  <button className='signup-pop w-96 bg-teal-600 text-white rounded-md p-3 transition duration-200 hover:bg-teal-700' type="submit">
                    Log In
                  </button>
                </form>
                <div className="text-center mt-5">
                  <p className="text-lg">
                    Don't have an account?{" "}
                    <span
                      className="text-teal-600 cursor-pointer"
                      onClick={() => toggleForm('signup')} // Switch to Signup form
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <IconButton aria-label="close" style={{ width: "auto", margin: "20px" }}>
                  <CloseRounded style={{ color: "white", fontSize: "50px" }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Login;
