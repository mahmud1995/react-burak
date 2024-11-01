import React, { useEffect } from "react";
import Statistics from "./Statistcs";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUser from "./ActiveUser";
import Events from "./Events";
import "../../../css/home.css"
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { setPopularDishes } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { Product } from "../../../lib/types/product";
import { retrievePopularDishes } from "./selector";
import { useDispatch, useSelector } from "react-redux";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
    
const popularDishesRetriever = createSelector(
    retrievePopularDishes,
    (popularDishes) => ({ popularDishes })
);
// import './css/home.css'
export default function HomePage() {
    const { setPopularDishes } = actionDispatch(useDispatch);
    const { popularDishes} = useSelector(popularDishesRetriever)
    
    useEffect(() => {
        // Backend server data FETCH => DATA
        const product = new ProductService();
        product.getProducts({
            page: 1,
            limit: 4,
            order: "prductViews",
            productCollection: ProductCollection.DISH,
        }).then(data => {
            console.log("data passed here:", data);
            setPopularDishes(data);
        }).catch((err) => console.log(err));
    })

    return <div className={"home-page"}>
        <Statistics />
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUser />
        <Events />
    </div>
}