import { Box, Rating } from "@mui/material";


export default function BasicRating({ rating, id, setRestaurants }) {
 const handleSubmitRating = (newValue) => {

 fetch(`https://bocacode-intranet-api.web.app/restaurants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newValue }),
    })
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch((err) => alert(err));
 }

  return (
    <Box
      sx={{
        "& > legend": { mt: 0 },
      }}
    >
      <Rating
        name="simple-controlled"
        precision={0.5}
        value={rating}
        onChange={(event, newValue) => {
          handleSubmitRating(newValue);
        }}
      />
    </Box>
  );
}


















