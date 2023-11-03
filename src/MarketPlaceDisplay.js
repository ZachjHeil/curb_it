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
} from '@mui/material'; // Updated import for MUI v5
import { styled } from '@mui/material/styles';
import InfiniteScroll from 'react-infinite-scroll-component';

// Updated makeStyles to styled for MUI v5
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  maxWidth: 345,
}));

const StyledMedia = styled(CardMedia)({
  height: 140,
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const StyledTypographyPrice = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  fontSize: '1.2em',
  fontWeight: 'bold',
}));

const StyledTypographyTitle = styled(Typography)({
  fontSize: '1em',
  fontWeight: 'bold',
});

const StyledTypographySeller = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2),
}));

function MarketPlaceDisplay() {
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
    // Remove dependencies if loadMore does not depend on changing values, or make sure dependencies are stable.
  }, []);

  return (
    <StyledContainer>
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Next Page
          </StyledButton>
        }
      >
        <Grid container justifyContent="center" alignItems="center">
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StyledCard>
                <CardActionArea>
                  <StyledMedia
                    image={item.image}
                    title={item.title}
                  />
                  <StyledCardContent>
                    <StyledTypographyTitle gutterBottom>
                      {item.title}
                    </StyledTypographyTitle>
                    <StyledTypographyPrice color="primary">
                      {item.price}
                    </StyledTypographyPrice>
                    <StyledTypographySeller variant="body2">
                      Sold by {item.seller}
                    </StyledTypographySeller>
                  </StyledCardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </StyledContainer>
  );
}

export default MarketPlaceDisplay;
