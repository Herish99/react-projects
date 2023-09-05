import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Personal = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json(); // For JSON data, use .json()
      })
      .then((data) => {
        console.log("personal", data);
        setProd(data);
      });
  }, []);

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {prod.map((itemms) => (
              <div  key={itemms.id} class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">

                <Link to={`/single/${itemms.id}`}> 
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-contain object-center w-full h-full block"
                    src={itemms.image}
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {itemms.catagory}
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {itemms.title}
                  </h2>
                  <p class="mt-1">${itemms.price}</p>
                </div>
                </Link>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Personal;
