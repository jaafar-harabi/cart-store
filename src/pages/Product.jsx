import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { useDispatch,useSelector } from "react-redux";
  import {add,remove} from '../features/Slice'
  import { Toaster } from 'react-hot-toast';

   
  export default function Product({theme}) {
    const {item}=useSelector((state)=>state.cart)
    
    
    const dispatch=useDispatch()
    return (
      
<div id={theme} className="res-prod"  >
<Toaster  position="top-left"/> 
<Card className="mt-14 w-96 h-auto mx-auto border-2 card-responsive " id={theme}>
        <CardHeader floated={false} className="relative h-auto img-responsive" >
          <img
            src={item.img}
            alt="img"
            
            
            
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="text-center" >
            Shoes
          </Typography>
          <Typography className="text-center"> 
            {item.price} $
          </Typography>
          <Button  variant="outlined" color="blue" className="mr-5 hover:scale-125 hover:bg-blue-500 hover:text-white mb-3 mt-5" onClick={()=>dispatch(add(item))}>+</Button>
          <Button  variant="outlined" color="red" className=" hover:scale-125 hover:bg-red-800 hover:text-white mb-3 mt-5"  onClick={()=>dispatch(remove(item))}>-</Button>
        </CardBody>
    
      </Card>
</div>
      
      
      
    );
  }