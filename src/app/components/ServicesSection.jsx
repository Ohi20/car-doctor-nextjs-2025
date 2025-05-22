import dbConnect from "@/lib/dbConnection";
import Image from "next/image";
import React from "react";

const ServicesSection = async () => {
  // const res = await fetch("/services.json");
  const serviceCollection = dbConnect("test_services");
  const data = await serviceCollection.find({}).toArray();
  return (
    <div className="grid grid-cols-12">
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <div>
              <Image src={item.img} width={314} height={208} alt={item.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
