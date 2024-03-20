import React from "react";
import MarketingAssociate from "./MarketingAssociate";
import SalesDevelopment from "./SalesDevelopment";
import AccountManagers from "./AccountManagers";

const MustHireRole = () => {
  return (
    <>
      <section className="mx-auto container py-20">
        <h1 className="text-center text-[#0F0F0F] md:text-[55px] lg:text-[70px] text-[40px] font-extrabold leading-tight">
          Top 3 Must-Hire Roles <br />
          For Digital Marketing Success
        </h1>
        <MarketingAssociate />
        <SalesDevelopment />
        <AccountManagers />
      </section>
    </>
  );
};

export default MustHireRole;
