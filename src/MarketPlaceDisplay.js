import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfiniteScroll from 'react-infinite-scroll-component';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  card: {
    margin: theme.spacing(2),
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  price: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '1em',
    fontWeight: 'bold',
  },
  seller: {
    color: theme.palette.text.secondary,
  },
  loadMoreButton: {
    margin: theme.spacing(2),
  },
}));

function MarketPlaceDisplay() {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    if (items.length >= 30) {
      setHasMore(false);
      return;
    }

    const newItems = Array.from({ length: 5 }, (_, index) => ({
      title: `Item ${items.length + index + 1}`,
      price: `$${10 * (items.length + index + 1)}.00`,
      seller: `Seller ${items.length + index + 1}`,
      image: '/images/placeholder.jpg',
    }));

    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <Container className={classes.container}>
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <Button
            className={classes.loadMoreButton}
            variant="contained"
            color="primary"
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </Button>
        }
      >
        <Grid container justify="center" alignItems="center">
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.title} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography className={classes.price} color="primary">
                      {item.price}
                    </Typography>
                    <Typography className={classes.seller} variant="body2">
                      Sold by {item.seller}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
}

export default MarketPlaceDisplay;
