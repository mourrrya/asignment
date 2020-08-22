import React from "react";
import whyUsImg from "../../assets/img/whyUsImg.png";
import bed from "../../assets/svg/bed.svg";
import symbol from "../../assets/svg/symbol.svg";

export const WhyUs = () => (
    <div className="why-us-main">
      <div className="background-img">
        <img src={whyUsImg} alt="" />
      </div>
      <div className="why-us">
        <h1 className="head">
          <img src={symbol} alt="" />
          <img src={symbol} alt="" />
          Why Choose Us?
        </h1>
        <div className="why-Us__content">
          <p>
            We are a sleep solutions company strengthened by our five decades of
            expertise and best-in-class innovation to offer you our iconic and
            research-backed mattresses and technology-led sleep accessories.
            <br />
            <br />
            From India’s only certified orthopedic mattress range recommended and
            tested by National Health Academy to naturally cool and eco-friendly
            latex mattresses and 100% memory foam pillows to anti-microbial roll
            pack mattresses and mattress protectors, all our offerings are
            designed to provide a deep, healthy and enriching sleep.
            <br />
            <br />
            You can not only shop the Duroflex orthopedic mattress online here but
            find our foldable mattress also known as slim mattress, special pillow
            for neck pain and wide variety of best mattresses suitable for all
            kinds of sleepers.
            <br />
            <br />
            Our bestselling ortho mattresses and memory foam mattresses are highly
            recommended for a healthy sleep that leads to posture alignment and
            wakes you up feeling refreshed.
            <br />
            <br />
          </p>
          <div className="img">
            <img src={bed} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );