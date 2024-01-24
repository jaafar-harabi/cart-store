import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Badge
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'
import ReactSwitch from 'react-switch'
import {logo} from '../assets'



 
export default function Nav({theme,toggleTheme}) {
  const [openNav, setOpenNav] = React.useState(false);
  const {quantity,cart} = useSelector((state)=>state.cart)
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, [cart]);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">

    
      <Typography className='mx-auto'>
        <Badge content={quantity} >

          <NavLink to='/facturation' >
            <Button className="bg-yellow-600 text-black fa-solid fa-cart-shopping text-xl " >  </Button>
          </NavLink>
          
        </Badge>
      </Typography>
     

    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4" id={theme}>
      <div className="container mx-auto flex items-center justify-between">
      <NavLink to="/">
            <img alt="img" src={logo} className="w-36 h-16"/>
      </NavLink>
       
        <Typography className='ml-5'>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} onColor='#000'   />
            <label id={theme} color={theme} > {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        </Typography>


        
        <div className="hidden lg:block">{navList}</div>
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container ">
          {navList}
          
        </div>
      </Collapse>
    </Navbar>
  );
}