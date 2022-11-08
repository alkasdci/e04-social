import { useContext } from 'react';
import {FaHome} from 'react-icons/fa'
import {HiOutlineLogout} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { AppContext } from './Context';

function Header() {

    const {dispatch} = useContext(AppContext)

    const handleLogout = () => dispatch({
        type: 'logout'
    })

    return (  
        <div
            className="flex justify-center 
            items-center w-full bg-teal-400
            h-[100px]
            text-[2rem]
            text-white
            gap-[20px]
            "
        >
            <Link to='/posts'><FaHome className="hover:text-red-400" /></Link>
            <Link to='/profile'><CgProfile className="hover:text-red-400" /></Link>
            <Link to='/'><HiOutlineLogout onClick={handleLogout} className="hover:text-red-400" /></Link>
        </div>
    );
}

export default Header;