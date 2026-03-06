import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <nav
                className="flex fixed w-full h-[5rem] justify-between px-10
             items-center bg-transparent border-b border-gray-700
              backdrop-blur-md backdrop-brightness-50 select-none z-10">
                <h1 className="text-4xl nav-font">Frostii</h1>

                <ul className="flex gap-10 items-center text-sm nav-font">
                    <li>
                        <a href="#" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#plugins" className="nav-link">
                            Plugins
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
