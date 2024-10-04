'use client'
import NavBarHome from "@/components/Navbar";
import Signup from "@/components/signup";
import Image from "next/image";

export default function Home() {
  return (
    <main>
<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
<div className="p-5 rounded-lg max-w-[1600px] w-full">
      <Signup closeSignup={function (): void {
        throw new Error("Function not implemented.");
      } } toggleForm={function (formType: "login" | "resetPassword"): void {
        throw new Error("Function not implemented.");
      } }/>
      </div>
      </div>
          </main>
  );
}
