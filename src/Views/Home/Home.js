import Navbar from "./../../Components/Navbar/Navbar.js";
import  "./Home.css"

import FoodCard from "../../Components/FoodCard/FoodCard.js";
import { FOODS , MAIN_TITLE,TAGLINE, THEME} from "../../config/data.js";

const Home = () =>{
    return (<>
   
     <Navbar/>
     <div >

      <h1 className="title" style={{color:THEME.highlight,margin:0,padding:0}}> { MAIN_TITLE }</h1>
      <h1 className="title" style={{margin:0,padding:0}}> { TAGLINE }</h1>

      <div className='food-card-container'>
      { FOODS.map((foodItem)=>{
          return  <FoodCard 
            imgUrl={foodItem.imgUrl}
            title={foodItem.title}
            description={foodItem.description}
            isveg={foodItem.isveg}
            price={foodItem.price}/>
           
        })
      }
      </div>

      </div>

 </>)
}
export default Home