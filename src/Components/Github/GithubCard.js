import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function GithubCard() {
    return (
      
    <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project#1
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Project#1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Repo</Button>
      </CardActions>
    </Card>
  );
}
