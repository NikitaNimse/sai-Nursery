import Navbar from "./../../Components/Navbar/Navbar.js";
import  "./Home.css"

import FoodCard from "../../Components/FoodCard/FoodCard.js";
const foods=[
    {
     imgUrl:" https://img.freepik.com/free-photo/flat-lay-noodles-with-vegetables-chicken_23-2148377422.jpg?uid=R159919239&ga=GA1.2.193610337.1706629290&semt=ais_hybrid ",
     title:"Noodles" ,
     description:"Noodles are a type of food made  which is rolled flat and cut, into long strips or strings.",
     isveg:true,
     price:80
    },
    {
        imgUrl:"https://img.freepik.com/premium-photo/gyoza-japanese-korean-dumplings-gray-plate-isolated-white-background_946110-14697.jpg?uid=R159919239&ga=GA1.2.193610337.1706629290&semt=ais_hybrid ",
        title:"Momos" ,
        description:"Noodles are a type of food made  which is rolled flat and cut, into long strips or strings.",
        isveg:true,
        price:70
    },
    {
        imgUrl:"https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246055.jpg?uid=R159919239&ga=GA1.2.193610337.1706629290&semt=ais_hybrid  ",

        title:"chinese" ,
        description:" chicken tossed in hot & spicy flavors of garlic, ginger & soya sauce.",
        isveg:false,
        price:120
    },
    {
        imgUrl:"https://img.freepik.com/premium-photo/plate-french-fries-ketchup-with-ketchup-ketchup_1270925-2088.jpg?uid=R159919239&ga=GA1.2.193610337.1706629290&semt=ais_hybrid  ",
        title:"potato Fries" ,
        description:"french fries, side dish or snack typically made from deep-fried potatos",
        isveg:true,
        price:50
    }
]

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