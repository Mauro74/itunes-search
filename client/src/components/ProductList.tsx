import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { State } from "../types";

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProductComponent = (): JSX.Element => {
  const products = useSelector((state: State) => state.allProducts?.products);
  const classes = useStyles();

  return (
    <>
      {products?.length > 0 ? (
        <Article>
          {products.map(
            ({
              trackId,
              artistName,
              trackName,
              trackPrice,
              artworkUrl100,
              wrapperType,
              collectionName,
              collectionPrice,
            }) => {
              return (
                <Card key={trackId}>
                  <CardContent>
                    <CardMedia className={classes.media} image={artworkUrl100} title={artistName} />
                    <div>
                      <Typography gutterBottom variant="h5" component="h2">
                        {artistName}
                      </Typography>
                      <p>Type: {wrapperType}</p>
                      <p>Title: {wrapperType === "track" ? trackName : collectionName}</p>
                      <p>Price: &pound;{wrapperType === "track" ? trackPrice : collectionPrice}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            }
          )}
        </Article>
      ) : (
        <Typography align="center" variant="h5" component="h5">
          No results for this search
        </Typography>
      )}
    </>
  );
};

export default ProductComponent;
