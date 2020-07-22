import React from "react";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const TrelloCard = ({ text }) => {
    return(
        <Card>
            <CardContent>
                <Typography gutterBottom>{text}</Typography>
            </CardContent>
        </Card>
        
    );
};

const styles = {
    cardContainer: {
        marginBottom: 8
    }
};

export default TrelloCard;