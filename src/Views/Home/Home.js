import Navbar from "./../../Components/Navbar/Navbar.js";
import  "./Home.css"

import FoodCard from "../../Components/FoodCard/FoodCard.js";
import { foods } from "../../config/data.js";

const Home = () =>{
    return (<>

     <Navbar/>

      <h1 className="title"> Sai Restaurent</h1>
      <div className='food-card-container'>
      { foods.map((foodItem)=>{
          return  <FoodCard 
            imgUrl={foodItem.imgUrl}
            title={foodItem.title}
            description={foodItem.description}
            isveg={foodItem.isveg}
            price={foodItem.price}/>
           
        })
      }
      </div>

 </>)
}
export default Home