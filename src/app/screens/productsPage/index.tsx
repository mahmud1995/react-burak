import React from "react";
import { Link, Route, Switch, useLocation, useRouteMatch} from "react-router-dom"
import { Container } from "@mui/material";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";



export default function ProductsPage() {
    const products = useRouteMatch();
    console.log("products:", products);

    return (
        <div className={"products-page"}>
            <Switch>
                <Route path={`${products.path}/:productId`}> 
                    <ChosenProduct />                       {/* ChosenProductni biz qilgan comp*/}
                </Route>
                <Route path={`${products.path}`}>
                    <Products />
                </Route>
            </Switch>
        </div>
    )  
}