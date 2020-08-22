import React from "react";
import { Blog } from "./blog";
import { BrandStrip } from "./brandStrip";
import { ProductBS } from "./productBS";
import { ProductFeatured } from "./productFeatured";
import { ProductRange } from "./productRange";
import { Testimonial } from "./testimonial";
import { WhyUs } from "./whyUs";
import { Footer } from "./footer";
import { Hero } from "./hero";
import Header from "../header/header";

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
