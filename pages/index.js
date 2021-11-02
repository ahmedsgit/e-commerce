import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import Layout from '../components/Layout';
import data from '../utils/data';
import useStyles from '../utils/styles';

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h1>Grab Your Taste</h1>
        <Grid container spacing={3}>
          {data.products.map((product)=>(
            <Grid item md={4} key={product.name}>
              <Card className={ classes.card }>
                <CardActionArea className={ classes.cardImg } style={ { transition: 'transition: all 1s ease-in;' } }>
                  <CardMedia component="img" image={product.image} title ={product.name}/>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
