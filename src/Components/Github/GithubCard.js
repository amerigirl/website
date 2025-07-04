import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function GithubCard({ info }) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
      <CardMedia sx={{ height: 140 }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {info.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Repo</Button>
      </CardActions>
    </Card>
  );
}
