import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ image, title, description, views, openModal }) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={openModal}> {/* Card click triggers modal */}
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Title:  {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Description:    {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Views: {views}</Button>
      </CardActions>
    </Card>
  );
}
