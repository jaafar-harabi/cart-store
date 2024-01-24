import { useDispatch,useSelector } from "react-redux";
import {add,remove} from '../features/Slice'
import { Toaster } from 'react-hot-toast';
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardHeader
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";




const ProductId = ({theme}) => {
  const {item,quantity}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  return (
<div id={theme} className="res-prod"  > 
<Toaster  position="top-left"/>
<Card className="mt-12 w-96 mx-auto border-2 card-responsive max-w-full" id={theme}>
        <CardHeader floated={false} className="relative h-auto img-responsive">
          <img
            src={item.img}
            alt="img"  
            
          />
        </CardHeader>
        <CardBody >
          <div className="grid grid-cols-3 mt-3">
            <Button  variant="outlined" color="blue" className="mr-5 hover:scale-125 hover:bg-blue-500 hover:text-white "  onClick={()=>dispatch(add(item))}>+</Button>
              <Typography className="text-center mx-auto"> 
              {item.price * quantity}   $
            </Typography>
            <Button  variant="outlined" color="red" className=" hover:scale-125 hover:bg-red-800 hover:text-white "   onClick={()=>dispatch(remove(item))}>-</Button>

          </div>

          <div className="grid grid-flow-row mt-3 ">

          <Typography className='text-center '> 
              Total : {quantity} 

            </Typography>

            <Typography className='text-center mt-3'>
            <NavLink to='/'>
              <Button variant="gradient" color="amber"  >

              Purchase

              </Button>
            </NavLink>

            </Typography>

          </div>
          
          

          </CardBody>

          

    
      </Card>
</div>
  )
}

export default ProductId