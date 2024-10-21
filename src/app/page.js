import Banner from "@/Component/Banner";
import Image from "next/image";
import About from "./about/page";
import Navbar from "@/Component/Navbar";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <div>
      
      <Banner></Banner>
       <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>  
       
    </div>
  );
}
