import React from "react";
import { Blog } from "./blog";
import { BrandStrip } from "./brandStrip";
import { ProductBS } from "./productBS";
import { ProductFeatured } from "./productFeatured";
import { ProductRange } from "./productRange";
import { Testimonial } from "./testimonial";
import { WhyUs } from "./whyUs";
import { Hero } from "./hero";

export default function Dashboard() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <ProductRange />
      <ProductBS />
      <ProductFeatured />
      <Testimonial />
      <Blog />
      <WhyUs />
    </>
  );
}
