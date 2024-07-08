import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={3}>
            <Card sx={{bgcolor:"pink"}}>
            <CardContent>
            <Link to="/">
               <Button variant="contained" fullWidth>Home</Button>
               </Link>
               </CardContent>
            </Card>
            </Grid>
           
             
            
            <Grid item xs={3}>
            <Card sx={{bgcolor:"coral"}}>
            <CardContent>
            <Link to="product">
               <Button variant="contained" fullWidth>Product</Button>
               </Link>
               </CardContent>
            </Card>
            </Grid>

            <Grid item xs={3}>
            <Card sx={{bgcolor:"red"}}>
            <CardContent>
            <Link to="contact">
               <Button variant="contained" fullWidth>Contact</Button>
               </Link>
               </CardContent>
            </Card>
            </Grid>

            <Grid item xs={3}>
            <Card sx={{bgcolor:"gray"}}>
            <CardContent>
            <Link to="about">
               <Button variant="contained" fullWidth>About</Button>
               </Link>
               </CardContent>
            </Card>
            </Grid>
        
        </Grid>
    )
}