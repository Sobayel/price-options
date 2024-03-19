import { useState } from "react";
import Link from "../../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiTwotoneCloseSquare } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'NotFound', id: 'notfound' }
      ];
      


    return (
        <nav className="text-black p-6 bg-blue-400">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true? <AiTwotoneCloseSquare></AiTwotoneCloseSquare>
                    : <HiMenuAlt1></HiMenuAlt1>
                }
            </div>
            <ul className={`flex absolute duration-1000 md:static${open? 'top-15' : '-top-60'} bg-yellow-200 px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;