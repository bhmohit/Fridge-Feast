import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SchoolIcon from '@mui/icons-material/School';
import MovieIcon from '@mui/icons-material/Movie';

export default function Item(props) {
    const itemInfo = props.data;
    const type = props.type;

    const getIcon = (type) => {
        switch (type) {
            case 'YouTube':
                return <YouTubeIcon />;
            case 'Online Course':
                return <SchoolIcon />;
            case 'Documentary':
                return <MovieIcon />;
            default:
                return null;
        }
    };

    return (
        <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }} variant="outlined">
            <CardContent style={{ flex: 1 }}>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                    {itemInfo.Location ? itemInfo.Location : type}{itemInfo.Platform ? ` - ${itemInfo.Platform}` : ""}
                </Typography>
                <Typography variant="h5" component="div">
                    {itemInfo.Video || itemInfo.Documentary || itemInfo.Course || itemInfo.Name}
                </Typography>
                <Typography paddingTop={"10px"} variant="body2">
                    {itemInfo.Description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={itemInfo.Link} endIcon={getIcon(type)}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}