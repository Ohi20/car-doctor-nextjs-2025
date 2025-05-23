import dbConnect, { collectionNamesObj } from "@/lib/dbConnection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesSection = async () => {
  // const res = await fetch("/services.json");
  const serviceCollection = dbConnect(collectionNamesObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();
  return (
    <div className="grid grid-cols-12">
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border"
          >
            <figure className="w-full h-3/4 flex justify-center items-center">
              <Image
                className="w-full h-full obejct-fit"
                src={item.img}
                width={314}
                height={208}
                alt={item.title}
              />
            </figure>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="font-bold text-xl text-orange-500">
                  {item.price}
                </p>
              </div>
              <div>
                <Link
                  href={`/services/${item._id}`}
                  className="text-orange-500"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
