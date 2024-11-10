import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";


interface HomeNavbarProps {
    cartItems: CartItem[];
    onAdd:(item: CartItem) => void;
    onRemove:(item: CartItem) => void;
    onDelete:(item: CartItem) => void;
    onDeleteAll:() => void; 
    setSignupOpen: (isOpen: boolean) => void;
    setLoginOpen: (isOpen:boolean) => void;
}

export default function HomeNavbar(props:HomeNavbarProps) {
    const {
        cartItems, 
        onAdd, 
        onRemove, 
        onDelete, 
        onDeleteAll, 
        setSignupOpen, 
        setLoginOpen
    } = props;
    const authMember = null;


    // Handlers 

    

    return (
    <div className="home-navbar">
         <Container className="navbar-container">
         <Stack className="menu"
                sx={{height:"50px"}} 
                flexDirection={"row"} 
                justifyContent={"space-between"} 
                alignItems={"center"}
            >
                <Box>
                    <NavLink to={"/"}>
                        <img className="brand-logo" src="/icons/burak.svg" />
                    </NavLink>
                </Box>
                <Stack 
                    flexDirection={"row"} 
                    justifyContent={"space-between"} 
                    minWidth={"700px"}
                    alignItems={"center"}
                >
                <Box className={"hover-line"}>
                    <NavLink to={"/"} activeClassName={"underline"}>Home</NavLink>
                </Box>
                <Box className={"hover-line"}>
                    <NavLink to="/products" activeClassName={"underline"}>Products</NavLink>
                </Box>
                {authMember ? (
                    <Box className={"hover-line"}>
                        <NavLink to={"/orders"} activeClassName={"underline"}>Orders</NavLink>
                    </Box>
                ) : null}
                {authMember ? (
                    <Box className={"hover-line"}>
                        <NavLink to={"/member-page"} activeClassName={"underline"}>My page</NavLink>
                    </Box>
                ) : null}
                <Box className={"hover-line"}>
                    <NavLink to={"/help"} activeClassName={"underline"}>Help</NavLink>
                </Box>

                {/* Basket */}
                <Basket 
                    cartItems={cartItems}
                    onAdd = {onAdd}
                    onRemove = {onRemove} 
                    onDelete = {onDelete}
                    onDeleteAll = {onDeleteAll}  
                />

                {!authMember ? (
                    <Box>
                        <Button 
                            className="login-button" 
                            variant="contained"
                            onClick={() => setLoginOpen(true)}
                        >
                            Login
                        </Button>
                    </Box>
                ) : (
                    <img 
                    className="user-avatar"
                    src={"/icons/default-user.svg"}
                    aria-haspopup={"true"}
                    />
                )}
                </Stack>
            </Stack>

            <Stack className={"header-frame"}>
                <Stack className={"detail"}>
                    <Box className={"head-main-text"}>
                        World's Most Delicious Cousine
                    </Box>
                    <Box className={"wel-txt"}>
                        The Choice, not just a choice
                    </Box>
                    <Box className={"service-text"}>
                        24 hours service
                    </Box>
                    <Box className={"signup"}>
                        {!authMember ? (
                            <Button 
                            variant={"contained"} 
                            className={"signup-button"}
                            onClick={()=> setSignupOpen(true)}
                            >
                                SIGN UP
                            </Button>
                            ) : null}
                    </Box>
                </Stack>
                <Box className={"logo-frame"}>
                    <div className={"logo-img"}></div>
                </Box>
            </Stack>
        </Container>
    </div>
    );
}