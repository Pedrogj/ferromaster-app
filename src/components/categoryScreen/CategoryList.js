import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { routes } from "../../routers/Routes";
import { 
  Container, 
  Box, Img, 
  TextContent, 
  H3, 
  ContentPrice, 
  ProductPrice, 
  Button 
} from "./CategoryListStyle";
import { Spinner } from "../spinner/Spinner";

export const CategoryList = ({ category }) => {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  const { getCategoriesById } = useContext(DataContext);

  const products = getCategoriesById(category);

  const requireProducts = products.map((item) => (
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
  ));

  const requireContent = !showContent ? <Spinner /> : requireProducts;

  return (
    <>
      <Link to={routes.root}></Link>
      <Container>{requireContent}</Container>
    </>
  );
};
