import React, { useEffect, useState } from "react";
import BasicRating from "./Ratings";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GetRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants/")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);

  return (
    <>
      <CssBaseline />
      {!restaurants ? (
        <h2>Loading...</h2>
      ) : (
        <Container maxWidth="lg">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {restaurants.map((restaurant) => {
              return (
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={restaurant.photoUrl}
                        alt={`Photo of ${restaurant.name}`}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {restaurant.name}
                        </Typography>
                        <BasicRating
                          rating={restaurant.rating}
                          id={restaurant.id}
                          setRestaurants={setRestaurants}
                        />
                      </CardContent>
                    </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
}
