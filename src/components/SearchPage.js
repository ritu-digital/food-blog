import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import '../SearchPage.css';

const SearchPage = ({ recipes }) => {
  return (
    <>
      <div className='searchPage'>
        <Card className='searchPage__container'>
          <br />
          <CardHeader title={recipes.title} subheader={recipes.bio} />
          <br />
          <CardMedia>
            <div className='img-container'>
              <img src={recipes.image} alt={recipes.title} />
            </div>
          </CardMedia>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
          <CardContent style={{ padding: '30px 40px', textAlign: 'justify' }}>
            <Typography paragraph>Method:</Typography>

            <div className='instruction__recipe'>
              <Typography paragraph>{recipes.step1}</Typography>
              <Typography paragraph>{recipes.step2}</Typography>
              <Typography paragraph>{recipes.step3}</Typography>
              <Typography paragraph>{recipes.step4}</Typography>
            </div>
          </CardContent>
        </Card>
        <div className='searchPage__sidebar'></div>
      </div>
    </>
  );
};

export default SearchPage;
