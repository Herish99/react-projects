import React, { useState, useEffect } from "react";
import CompoOfProducts from "./CompoOfProducts";
import Header from "./Header";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      // if (products.length > 0) {
      //   setProducts([data]);
      // }
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col"> */}
      {/* <div class="flex flex-wrap -m-4 text-center"> */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <CompoOfProducts key={index} prod={product} />
            ))}

            {products.length > 0 ? (
              <>
                <CompoOfProducts products={products} />
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </section>

      
      
    </>
  );
};

export default Product;
