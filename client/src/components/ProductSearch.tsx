import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks";
import ProductComponent from "./ProductList";
import { fetchProducts, removeProducts } from "../redux/actions/productAction";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

const Main = styled.main`
  max-width: 60rem;
  margin: 2rem auto;
`;

const SearchContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-bottom: 1rem;
`;
const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;

const ProductListing = (): JSX.Element => {
  const LIMIT = 10;
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [limit, setLimit] = useState<number>(LIMIT);
  const [searching, setSearching] = useState<boolean>(false);
  const [validation, setValidation] = useState<boolean>(false);

  const handleScroll = () => {
    const atBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (atBottom) {
      increaseResults();
    }
  };

  const increaseResults = () => {
    setLimit(limit + LIMIT);
    dispatch(fetchProducts(searchTerm, limit));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      setSearching(true);
      dispatch(fetchProducts(searchTerm, limit));
      setValidation(false);
    } else {
      setValidation(true);
      return;
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setLimit(LIMIT);
    setSearchTerm("");
    setSearching(false);
    dispatch(removeProducts());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);

  return (
    <Main>
      <SearchContainer>
        <h2>Search</h2>
        <Form onSubmit={handleSearch}>
          <TextField
            variant="filled"
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="enter search term"
          />
          <Button variant="contained" color="secondary" type="submit">
            Search
          </Button>
          <Button variant="contained" onClick={handleClear}>
            Clear
          </Button>
        </Form>
        {validation && <p className="error">please enter a search term</p>}
      </SearchContainer>
      {searching && <ProductComponent />}
    </Main>
  );
};

export default ProductListing;
