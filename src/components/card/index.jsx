import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./index.css";
import useMediaQuery from '@mui/material/useMediaQuery';

export const LocalCard = ({ award, message, image, isEven, name }) => {
    const matches = useMediaQuery('(max-width:600px)');
    const rowClassName = isEven ? 'flex-row-reverse' : 'flex-row';
    return (
        <Card className={`local_card flex border-radius-7 gap1rem align-center padding-8 ${rowClassName}`} sx={{ flexDirection: matches ? 'column' : 'initial' }}>
            <div>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="spot award"
                    className='local_card_card_media'
                    loading="lazy"
                />
            </div>
            <div>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {award} - {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align='left'>
                        {message}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}
