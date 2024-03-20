import React from "react";
import announcement from "../assets/img-2.png";

const Announcement = () => {
  return (
    <>
      <section className="bg-[#0F0F0F] w-full">
        <div className="mx-auto flex lg:justify-around justify-center xl:flex-nowrap flex-wrap items-center pt-20 px-3">
          <img
            src={announcement}
            width={1000}
            height={1200}
            className="pt-10"
            alt=""
          />
          <div className="w-full xl:max-w-[500px] text-[#F8F8F8] md:text-[18px] text-[16px] space-y-5 py-10">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo
              Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata
              Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit
              Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
              Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
              Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum.
              Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum
              Dolor Sit Amet.
            </p>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam Voluptua At Vero Eos Et Accusam Et Justo Duo
              Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata
              Sanctus Est Lorem Ipsum Dolor Sit Amet.
            </p>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo
              Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata
              Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit
              Amet, Consetetur Sadipscing Elitr, Sed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Announcement;
