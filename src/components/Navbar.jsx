import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between px-16 py-8 items-center bg-gray-600 text-white">
      <Link to="/">
        <img 
          src="/running.png"
          alt="logo"
          className="w-[40px] h-[40px] cursor-pointer" />
      </Link>
      <div className="justify-between">
        <ul className="flex flex-row gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
{/*           <li>Explore</li>
          <li>Explore</li> */}
        </ul>
      
      </div>
    </div>
  )
}

export default Navbar;