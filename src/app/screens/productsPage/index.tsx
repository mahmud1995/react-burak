import React from "react";
import { Link, Route, Switch, useLocation, useRouteMatch} from "react-router-dom"
import { Container } from "@mui/material";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/products.css"



export default function ProductsPage() {
    const product = useRouteMatch();
    console.log("products:", product);

    return (
        <div className={"products-page"}>
            <Switch>
                <Route path={`${product.path}/:productId`}> 
                    <ChosenProduct />                       {/* ChosenProductni biz qilgan comp*/}
                </Route>
                <Route path={`${product.path}`}>
                    <Products />
                </Route>
            </Switch>
        </div>
    )  
}