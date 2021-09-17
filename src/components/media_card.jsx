import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    const navStyle = {
        color: "white",
    };

    return (
        <Link to={"/courses/" + props.courseId} style={navStyle}>
            <Card className={classes.root} elevation={7} >
                <CardActionArea >
                    <CardMedia
                        className={classes.media}
                        image="https://image.shutterstock.com/shutterstock/photos/647656945/display_1500/stock-photo-the-technician-is-putting-the-cpu-on-the-socket-of-the-computer-motherboard-647656945.jpg"
                        // title="Contemplative Reptile"  
                        // image={props.courseImageURL}
                        title={props.courseName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" >
                            {props.courseName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.courseDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}

