import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { useLoadingPages } from "../../hooks/useLoadingPages";
import { cleanSearchText } from "../../utils/helpers/helpers";
import { InputSearch } from "../InputSearch/InputSearch";
import { NotProduct } from "../notFountScreen/NotProduct";
import { Spinner } from "../spinner/Spinner";
import {
  Container,
  ProductContent,
  Box,
  Img,
  TextContent,
  H2,
  H3,
  Content,
  ProductPrice,
  ContentPrice,
  Button,
} from "./ProductsStyle";

export const Products = () => {
  const { data } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading] = useLoadingPages();

  // Product search function
  const search = (elements) => {
    const text = cleanSearchText(searchTerm);

    return elements.filter((element) =>
      cleanSearchText(element.name).includes(text)
    );
  };

  // Products List
  const allProducts = search(data).map((item) => {
    return (
      <Box key={item.id}>
        <Link to={`/product/${item.id}`}>
          <Img src={item.img} alt={item.name} />
        </Link>
        <TextContent>
          <H3>{item.name}</H3>
        </TextContent>
        <ContentPrice>
          <ProductPrice>${item.price}</ProductPrice>
          <Link to={`/product/${item.id}`}>
            <Button>Ver Producto</Button>
          </Link>
        </ContentPrice>
      </Box>
    );
  });

  const renderProducts =
    allProducts.length > 0 ? (
      <ProductContent>{allProducts}</ProductContent>
    ) : (
      <NotProduct />
    );

  const requireContent = !loading ? <Spinner /> : renderProducts;

  return (
    <>
      <Content>
        <Container>
          <H2>Productos</H2>
          <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Container>
        {requireContent}
      </Content>
    </>
  );
};
