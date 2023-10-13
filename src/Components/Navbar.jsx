import {useState} from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  
import logo from "../assets/images/logo.svg";

function Navbar(){
const navLinks =[
    {
        title:"Pricing",
        link:"/"
    },
    {
        title:"Product",
        link:"/"
    },
    {
        title:"About Us",
        link:"/"
    },
    {
        title:"Careers",
        link:"/"
    },
    {
        title:"Community",
        link:"/"
    },
]

const [open,setOpen]=useState(false)

function handleMenu(){
    setOpen((prev)=>!prev);
}
    return(
        <>  
        <div className="pt-10">
            <div className="flex justify-center gap-24 items-center m-auto backdrop-blur-[10px] bg-[#fffffff33]  ">
                <img src={logo}className="max-md:absolute max-md:left-5 max-md:top-14"></img>
                <ul className=" gap-auto cursor-pointer hidden  md:flex">
                   {navLinks.map((link,index) => (
                  <li key={index}href={link.link} className="text-black hover:text-slate-400 p-10">{link.title}</li>
                   ))}
                </ul>

                    {/* Hamburger link */}
                
                    <ul className={` top-20 absolute  pt-10 gap-auto cursor-pointer   ${open ? "block text-center w-96 rounded-3xl  bg-white border-2 gray"  :"hidden top-[-490px]"} md:hidden`}>
                   {navLinks.map((link,index) => (
                  <li key={index}href={link.link} className="text-black hover:text-slate-400 p-10">{link.title}</li>
                   ))}
                </ul>
                <div className="mr-2 flex block absolute right-10 top-3 md:hidden max-sm:right-2">
                    <button onClick={handleMenu} className="text-black m-10">
                        {open? <CloseIcon/> : <MenuIcon/>}
                    </button>
                </div>

           

                <button className="rounded-2xl py-3 px-10 bg-orange-500 text-white hidden md:block hover:opacity-75">Get Started</button>

            </div>

        </div>


      

        </>
    )
}

export default Navbar;