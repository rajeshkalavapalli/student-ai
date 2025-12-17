import schola from "../../assets/images/schola.png"
import { Link } from "react-router-dom"

export default function Navbar() {
    const navButton = ["home", "about", "contact", "support"]

    return (
        <div className="schola-nav flex items-center justify-between px-10 h-20 bg-[#dac7d4] mt-[1px]">


            <div className="schola-logo w-32">
                <img src={schola} alt="schola logo" />
            </div>


            <nav className="flex gap-10 text-[#FFFCFB]">
    {navButton.map((nav) => (
        <Link 
            key={nav} 
            to={`/${nav}`} 
            className="capitalize hover:text-[#7f576e]"
        >
            {nav}
        </Link>
    ))}
</nav>


            <Link to="/Login">

                <button className="rounded-xl w-24 hover:bg-[#6a4a5c]  text-[#FFFCFB] motion-safe:animation-spin " >
                    Login
                </button>

            </Link>
        </div>
    )
}
