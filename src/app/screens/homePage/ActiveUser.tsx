// import React, { act } from "react";
// import { Box, Container, Stack } from "@mui/material";
// import { CssVarsProvider } from "@mui/joy";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Card from "@mui/joy/Card";
// import CardOverflow from "@mui/joy/CardOverflow";
// import Typography from "@mui/joy/Typography";
// import Divider from "../../components/divider";
// import VisibilityIcon from "@mui/icons-material/Visibility";


// const activeUsers = [
//     { memberNick: "Jony", memberImage: "/img/martin.webp" },
//     { memberNick: "Tony", memberImage: "/img/justin.webp" },
//     { memberNick: "Moly", memberImage: "/img/rose.webp" },
//     { memberNick: "Bony", memberImage: "/img/nusret.webp" },
// ];

// export default function ActiveUser() {
//     return (
//         <div className="active-users-frame">
//             <Container>
//                 <Stack className={"main"}>
//                     <Box className={"category-title"}>Active Users</Box>
//                     <Stack className={"cards-frame"}>
//                         <CssVarsProvider>
//                         {activeUsers.length !== 0 ? (
//                                 activeUsers.map((ele, index) => {
//                                     return (
//                                         <Card key={index} variant="outlined" className={"card"}>
//                                             <CardOverflow>
//                                                 <div className="product-sale">Normal size</div>
//                                                 <AspectRatio>
//                                                     {/* <img src={ele.imagePath} alt="" /> */}
//                                                 </AspectRatio>
//                                             </CardOverflow>

//                                             <CardOverflow variant="soft" className="product-detail">
//                                                 <Stack className="info">
//                                                     <Stack flexDirection={"row"}>
//                                                         <Typography className={"title"}>
//                                                             {ele.memberNick}
//                                                         </Typography>
//                                                         <Divider width="2" height="24" bg="#d9d9d9" />
//                                                     </Stack>
//                                                 </Stack>
//                                             </CardOverflow>
//                                         </Card>
//                                     );
//                                 })
//                             ) : (
//                                 <Box className="no-data">New products are not available!</Box>
//                             )}
//                         </CssVarsProvider>
//                     </Stack>
//                 </Stack>
//             </Container>
//         </div>
//     );
// }
import React from "react";
import Container from '@mui/material/Container'
import { Box, Stack } from "@mui/material";
import Card from "@mui/joy/Card"
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
    { memberNick: "Martin", memberImage: "/img/martin.webp" },
    { memberNick: "Justin", memberImage: "/img/justin.webp" },
    { memberNick: "Rose", memberImage: "/img/rose.webp" },
    { memberNick: "Nusret", memberImage: "/img/nusret.webp" },
];

export default function ActiveUsers() {
    return (
        <div className={"active-users-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Active Users</Box>
                   <Stack className={"cards-frame"}>
                    <CssVarsProvider>
                       {activeUsers.length !== 0 ? (
                         activeUsers.map((ele, index) => {
                            return (
                                <Card key={index} variant="outlined" className={"card"}>
                                    <CardOverflow>
                                        <AspectRatio ratio="1">
                                        <img src={ele.memberImage} alt="" />
                                        </AspectRatio>
                                    </CardOverflow>
                                    <Typography className={"member-nickname"}>
                                        {ele.memberNick}
                                    </Typography>
                                </Card>
                            )
                        })
                       ) : (
                        <Box className={"no-data"}>No Active Users!</Box>
                       )}
                    </CssVarsProvider>
                   </Stack>
                </Stack>
            </Container>
        </div>
    )
}