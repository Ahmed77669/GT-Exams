'use client'
import NavBarHome from "@/components/Navbar";
import Signup from "@/components/signup";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Signup closeSignup={function (): void {
        throw new Error("Function not implemented.");
      } } toggleForm={function (formType: "login" | "resetPassword"): void {
        throw new Error("Function not implemented.");
      } }/>
          </main>
  );
}
