import { v4 as uuid} from 'uuid'
import product1 from '../images/product1.jpg';
import speaker from '../images/speaker.jpg';
import bulb from '../images/bulb.jpg';
import camera from '../images/camera.jpg';
import watch from '../images/watch.jpg';
import macbook from '../images/macbook.jpg';


const PRODUCT_ARR=[
    {
      id:uuid(),
      title:'BSpark 1T',
      price:30,
      rating:5,
      image:product1,
      quantity:1,
    },
    {
      id:uuid(),
      title:'ASpark 2T',
      price:5,
      rating:4,
      image:product1,
      quantity:1,
    }, 
    {
      id:uuid(),
      title:'Spark 3T',
      price:100,
      rating:5,
      image:product1,
      quantity:1,
    },
    {
      id:uuid(),
      title:'Camera',
      price:10,
      rating:5,
      image:camera,
      quantity:1,
    },
    {
      id:uuid(),
      title:'LED Bulbs',
      price:1,
      rating:1,
      image:speaker,
      quantity:1,
    },
    {
      id:uuid(),
      title:'Watch',
      price:5,
      rating:5,
      image:watch,
      quantity:1,
    },
    {
      id:uuid(),
      title:'LED Smart bulb',
      price:80,
      rating:3,
      image:bulb,
      quantity:1,
    },
    {
      id:uuid(),
      title:'MacBook Air',
      price:200,
      rating:5,
      image:macbook,
      quantity:1,
    }
]

export {PRODUCT_ARR};