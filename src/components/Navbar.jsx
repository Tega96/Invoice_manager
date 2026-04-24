import Logo from "./Logo"

const Navbar = () => {
    return (
        <nav className="h-screen w-25.5">
            <div className="w-full h-full rounded-tr-[20px] rounded-br-[20px] bg-[#373B53] dark:bg-[#1E2139] flex flex-col justify-between items-center">
                <Logo />
                <div className="">
                    <button>Toggle</button>
                    <div className="">
                        <img src="" alt="" className="w-6 h-6 rounded-full" />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;