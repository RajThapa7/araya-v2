"use client";
import { Button } from "@/components";
import Image from "next/image";
import { FaTree } from "react-icons/fa";

const data = [
  {
    id: 0,
    title: "Simple Watch",
    price: "500",
  },
  {
    id: 1,
    title: "Simple Watch",
    price: "500",
  },
];

export default function FeaturedSection() {
  return (
    <div className="px-6 bg-primary-dark py-20 lg:py-32">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center gap-8 pb-24 lg:pb-44">
          <FaTree className="text-body text-4xl" />
          <p className="text-body text-center text-xl md:text-2xl lg:text-3xl max-w-2xl">
            Araya Arts is an ode to discovery, a love letter to life lived on
            the borderlands.
          </p>
        </div>
        <section>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 pb-6">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-semibold text-header sm:text-3xl lg:text-4xl">
                    Watches
                  </h2>

                  <p className="mt-5 text-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <Button isSecondary className="mt-8">
                  shop all{" "}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {data.map(({ id, price, title }) => (
                  <li key={id}>
                    <a href="#" className="group block">
                      <div className="relative w-full h-44 sm:h-72 md:h-80 xl:h-96">
                        <Image
                          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                          alt=""
                          className="aspect-square w-full rounded object-cover"
                          fill
                        />
                      </div>

                      <div className="mt-3">
                        <h3 className="font-semibold text-header  group-hover:underline group-hover:underline-offset-4">
                          {title}
                        </h3>

                        <p className="mt-1 text-sm text-body">Rs. {price}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
