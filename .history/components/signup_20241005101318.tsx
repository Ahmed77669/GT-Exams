import React, { useState } from 'react';
import { Poppins } from "next/font/google";
import { CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import google from '@/public/google.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

interface SignupProps {
  closeSignup: () => void;
  toggleForm: (formType: 'login' | 'resetPassword') => void;
}

const pageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Signup: React.FC<SignupProps> = ({ closeSignup, toggleForm }) => {
  const [user, setUser] = useState({ name: "", email: "", password: ""});
  const route = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(user);
    if (user) {
      const response = await fetch('/api/auth/register', {
          method: "POST",
          body: JSON.stringify(user)
      });
      route.push('./home');
      return response;
  }
  return null;
  };




  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <section className={poppins.className}>
        <div className="flex justify-center items-center h-screen ">
          <div className="bg-black/90 w-full max-w-6xl rounded-2xl min-h-[680px]">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="bg-teal-600 w-full h-96 rounded-tl-2xl rounded-br-[300px] flex items-center">
                <h1 className="text-6xl ml-5">Welcome</h1>
              </div>
              <div className="flex flex-col items-center justify-center mt-20">
                <p className="text-center mb-10 text-4xl">Sign Up</p>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    className="text-field w-96 text-lg p-3 mb-10 rounded-lg text-black"
                    placeholder="User Name"
                    onChange={e => setUser(p => ({ ...p, name: e.target.value }))}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="text-field w-96 text-lg p-3 mb-10 rounded-lg text-black"
                    placeholder="Email"
                    onChange={e => setUser(p => ({ ...p, email: e.target.value }))}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    className="text-field w-96 text-lg p-3 mb-10 rounded-lg text-black"
                    placeholder="Password"
                    onChange={e => setUser(p => ({ ...p, password: e.target.value }))}

                    required
                  />
                  <button className="w-96 bg-teal-600 text-white p-3 rounded-lg hover:opacity-90 font-semibold">
                    Sign Up
                  </button>
                </form>
                <div className="flex items-center mt-4 w-full">
                  <hr className="flex-1 border-t border-gray-500" />
                  <p className="mx-3 text-lg">or</p>
                  <hr className="flex-1 border-t border-gray-500" />
                </div>
                <div className="flex justify-center mt-4">
                  <button className="w-96 bg-white text-gray-600 p-1 rounded-lg flex items-center hover:opacity-90">
                    <Image src={google} alt="google icon" width={45} />
                    <span className="flex-1 text-center text-lg font-semibold">Sign Up with Google</span>
                  </button>
                </div>
                <div className="text-center mt-6">
                  <p className="text-lg">
                    Have already an account?{" "}
                    <span
                      className="text-teal-600 cursor-pointer"
                      onClick={() => toggleForm("login")}
                    >
                      click here
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-end  items-start ">
                <IconButton aria-label="close" onClick={closeSignup} className="m-5">
                  <CloseRounded className="text-white" style={{ fontSize: "50px" }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Signup;
