import facebook from "../assets/images/icon-facebook.svg"
import youtube from "../assets/images/icon-youtube.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"


function Footer(){
    return(
       <>
       <div className="bg-neutral-800 flex items-start justify-around max-lg:items-center">

        <div className="flex-col">
            <h1 className="text-3xl text-white mb-32 mt-5 max-lg:mb-5">Manage</h1>

            <div className="flex mb-10  cursor-pointer">
            <img src={facebook} className="mr-2 max-lg:mr-3"></img>
            <img src={youtube} className="mr-2 max-lg:mr-3"></img>
            <img src={twitter} className="mr-2 max-lg:mr-3"></img>
            <img src={pinterest} className="mr-2 max-lg:mr-3"></img>
            <img src={instagram} className="mr-2 max-lg:mr-3"></img>
            </div>
        </div>

        <div className="flex-col items-center justify-center mt-5 max-md:hidden">
        <ul className="text-gray-300 cursor-pointer ">
            <li className="pb-6">Home </li>
            <li className="pb-6">Pricing </li>
            <li className="pb-6">Products </li>
            <li className="pb-6 ">About Us </li>
        </ul>
        </div>

        <div className="flex-col items-center justify-center mt-5 max-md:hidden">
        <ul className="text-gray-300 cursor-pointer ">
            <li className="pb-6">Careers </li>
            <li className="pb-6">Community </li>
            <li className="pb-6">Privacy Policy </li>
      
        </ul>
        </div>

        <div className="flex-col items-center justify-center mt-5">
        <div className="flex">
        <input className="p-3 rounded-full" placeholder="Updates in your inbox..." ></input>
        <button className="bg-orange-500 px-3 py-2 rounded-full ml-3 text-white hover:opacity-75">Go</button>
        </div>

        <p className="text-gray-600 mt-36 max-lg:mt-10">&copy; Copyright 2023. All Rights reserved</p>
        </div>
  
       </div>
       </>
    )
}

export default Footer;