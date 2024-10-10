import Statistics from "./Statistcs";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUser from "./ActiveUser";
import Events from "./Events";
// import './css/home.css'
export default function HomePage() {
    return <div className={"home-page"}>HomePage
        <Statistics />
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUser />
        <Events />
    </div>
}