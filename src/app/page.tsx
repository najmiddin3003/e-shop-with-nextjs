import Product from "@/components/product";
import React from "react";
import { ProductType } from "../../interfaces";
import Hero from "@/components/hero";

const page = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  const products: ProductType[] = await res.json();

  console.log(products);
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-20">
      <Hero />
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">Sammi shop deals</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
