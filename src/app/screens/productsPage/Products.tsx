import React, { useEffect } from "react"
import { createSelector, Dispatch } from "@reduxjs/toolkit"
import { Box, Button, Container, Stack } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import Badge from "@mui/material/Badge"
import Pagination from "@mui/material/Pagination"
import PaginationItem from "@mui/material/PaginationItem"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Product } from "../../../lib/types/product"
import { setProducts } from "./slice"
import { retrieveProducts } from "./selector"
import { useDispatch, useSelector } from "react-redux"
import { ProductCollection } from "../../../lib/enums/product.enum"
import ProductService from "../../services/ProductService"
import { serverApi } from "../../../lib/config"
/* REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data:Product[]) => dispatch(setProducts(data))
});
const productsRetriever = createSelector(
    retrieveProducts, (products) => ({
        products,
    }))

export default function Products () {
    const { setProducts} = actionDispatch(useDispatch());
    const { products } = useSelector(productsRetriever);

    useEffect(() => {
        const products = new ProductService();
        products.getProducts({
            page: 1, 
            limit: 8,
            order: "createdAt",
            productCollection: ProductCollection.DISH,
            search: "",
        })
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }, []);

    function setSearchText(value: string): void {
        throw new Error("Function not implemented.")
    }

    function searchProductHandler() {
        throw new Error("Function not implemented.")
    }

    return (
        <div className={"products"}>
            <Container>
                {/* toldirish kerak */}
                <Stack flexDirection={"column"} alignItems={"center"}>
                    {/* <Box className="top-text">Burak Restaurant</Box> */}
                    <Stack className={"avatar-big-box"}>
                        <Stack className={"top-text"}>
                            <p>Burak Restaurant</p>

                            <Stack className={"single-search-big-box"}>
                                <input 
                                    type={"search"}
                                    className={"single-search-input"}
                                    name={"singleReasearch"}
                                    placeholder={"Type here"}
                                    value={"searchText"}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") searchProductHandler();
                                      }}
                                />

                                <Button 
                                    className={"single-button-search"}
                                    variant="contained"
                                    endIcon={<SearchIcon />}
                                    onClick={searchProductHandler}
                                    >
                                        Search
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack className={"dishes-filter-section"}>
                        <Stack className={"dishes-filter-box"}>
                            <Button 
                                variant={"contained"}
                                color={"primary"}
                                className={"order"}
                                // color={
                                //     productSearch.order === "createdAt" ? "primary" : "secondary"
                                //   }
                                //   onClick={() => searchOrderHandler("createdAt")}
                            >
                                New
                            </Button>
                            <Button 
                                variant={"contained"}
                                color={"secondary"}
                                className={"order"}
                            >
                                Views
                            </Button>
                            <Button 
                                variant={"contained"}
                                color={"secondary"}
                                className={"order"}
                            >
                                Price
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className={"list-category-section"}>
                        <Stack className={"product-category"}>
                            <div className={"category-main"}>
                                {/* 5 button tiqamiz */}
                                <Button variant={"contained"}color={"secondary"}>Other</Button>
                                <Button variant={"contained"}color={"secondary"}>Dessert</Button>
                                <Button variant={"contained"}color={"secondary"}>Drink</Button>
                                <Button variant={"contained"}color={"secondary"}>Salad</Button>
                                <Button variant={"contained"}color={"primary"}>Dish</Button>
                            </div>

                        </Stack>
                        <Stack className={"product-wrapper"}>
                            {products.length !== 0 ? (
                                products.map((product: Product ) => {
                                    const imagePath = `${serverApi}/${product.productImages[0]}`
                                    const sizeVolume = product.productCollection === ProductCollection.DRINK 
                                    ? product.productVolume + " litr" 
                                    : product.productSize + " size"
                                    return (
                                        <Stack key={product._id} className={"product-card"}>
                                            <Stack className={"product-img"} sx={{ backgroundImage: `url(${imagePath})`}}>
                                                <div className={"product-sale"}>{sizeVolume}</div>
                                                <Button className={"shop-btn"}>
                                                    <img src={"/icons/shopping-cart.svg"} style={{ display: "flex"}}/>
                                                </Button>
                                                <Button className={"view-btn"} sx={{right: "36px"}}>
                                                    <Badge 
                                                        badgeContent={product.productViews} 
                                                        color="secondary"
                                                    >
                                                        <RemoveRedEyeIcon 
                                                            sx={{ 
                                                                // color: 20 ? "gray" : "white",
                                                                color: product.productViews === 0 ? "gray" : "white",
                                                                }}
                                                        />
                                                    </Badge>
                                                </Button>
                                            </Stack>
                                            <Box className={"product-desc"}>
                                                <span className={"product-title"}>
                                                    {product.productName}
                                                </span>
                                                <div className={"product-desc"}>
                                                    <MonetizationOnIcon />
                                                    {product.productPrice} {/*12ni urniga ==> {product.productPrice}*/}
                                                </div>
                                            </Box>
                                        </Stack>
                                    );
                                })
                            ) : (
                                <Box className="no-data">Products are not available!</Box>
                            )}
                        </Stack>
                    </Stack> 

                    <Stack className={"pagination-section"}>
                        <Pagination 
                            count={3}
                            page={1}
                            renderItem={(item) => (
                                <PaginationItem 
                                    components = {{
                                        previous: ArrowBackIcon,
                                        next: ArrowForwardIcon,
                                    }}
                                    {...item}
                                    color={"secondary"}
                                />
                            )}
                        />
                    </Stack> 
                </Stack>
            </Container>
            {/* Toldirish kerak */}
            <div className={"brands-logo"}>
                <Container className={"family-brands"}>
                    <Box className={"category-title"}>Our Family Brands</Box>
                    <Stack className={"brand-list"}>
                        <Box className={"review-box"}>
                            <img src={"/img/gurme.webp"} alt="" />
                        </Box>

                        <Box className={"review-box"}>
                            <img src={"/img/sweets.webp"} alt="" />
                        </Box>

                        <Box className={"review-box"}>
                            <img src={"/img/seafood.webp"} alt="" />
                        </Box>

                        <Box className={"review-box"}>
                            <img src={"/img/doner.webp"} alt="" />
                        </Box>
                </Stack>
                </Container>
      </div>

            <div className={"address"}>
                <Container>
                    <Stack className={"address-area"}>
                        <Box className={"title"}>Our address</Box>
                        <iframe
                        style={{ marginTop: "60px" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!2skr"
                        width="1320"
                        height="500"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </Container>
            </div>

        </div>
    );
}