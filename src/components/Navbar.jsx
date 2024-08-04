import React,{useState,} from 'react'
import { Link } from 'react-router-dom'
import { RxCross1,RxHamburgerMenu } from 'react-icons/rx'
import { toast } from 'react-toastify'



const Navbar = () => {


  // var user = ''
  // var token =''


  const [click, setClick] = useState(false);
  const [auth, setAuth] = useState();
  const [isOpen, setIsopen] = useState(false);

  const handleClick = () => setClick(!click);
  const handleLinkClick = () => setClick(false);

  const handleLogout = (event) => {
    event.preventDefault();
    // setAuth({
    //   user: null,
    //   token:""
    // });
    // localStorage.removeItem("auth");
    // toast.success("Logout successfully");
  };


  return<>
  <div className="w-full h-[80px] absolute top-0 left-0 z-50 ">
      <div className="flex justify-between items-center px-10 h-full">
        <Link to="/">
          <img
            // src={logo}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <ul
          className={
            click
              ? "active"
              : "max-[768px]:hidden max-[1290px]:flex gap-6 font-bold"
          }
        >
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/fleet" onClick={handleLinkClick}>
              Vehicle
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="btn-group">
          {auth.user ? (
            <div className=" max-[768px]:hidden">
              <h1
                className="font-semibold cursor-pointer capitalize  border py-1  px-4 rounded-2xl "
                onClick={() => setIsopen((prev) => !prev)}
              >
                {auth.user.name}
              </h1>
              {isOpen && (
                <div className="flex flex-col login-dropdown">
                  <ul className="flex flex-col gap-4 ">
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                    <li>
                      <NavLink to={"/dashboard"}>Dashbaord</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/register">
              <button className="border py-1 px-3 rounded-full font-medium bg-white text-teal-600 hover:bg-transparent hover:text-white   max-[768px]:hidden">
                Register
              </button>
            </Link>
          )}
        </div>
        <div
          className="hidden cursor-pointer max-[768px]:flex relative left-[1.5rem]  "
          onClick={handleClick}
        >
          {click ? (
            <RxCross1 size={20} style={{ color: "#333" }} />
          ) : (
            <RxHamburgerMenu size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  </>
}

export default Navbar