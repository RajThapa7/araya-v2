"use client";

import { montserrat } from "@/app/fonts";
import { ITabProps } from "@/types";
import classNames from "@/utils/classNames";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";

export function MyTab({
  data,
  className,
  isProductDescription = false,
}: ITabProps) {
  const [activeTab, setActiveTab] = React.useState(data[0].value);
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className={`!z-0 flex justify-center gap-6 rounded-none bg-transparent p-0 mt-1`}
        indicatorProps={{
          className: `${
            isProductDescription
              ? "border-b-2 border-accent rounded-none bg-transparent shadow-none"
              : "bg-accent rounded-[500px]"
          }`,
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`
              ${
                activeTab === value &&
                `${isProductDescription ? "text-header" : "text-white"}`
              } ${
              !isProductDescription &&
              "ring-1 ring-gray-300 hover:ring-accent rounded-[500px]"
            } w-fit text-lg px-4 py-2 transition-smooth font-semibold ${
              montserrat.className
            } `}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        className={classNames(
          className,
          `p-0 ${isProductDescription && "md:!p-0 mt-[1px]"} rounded-lg`
        )}
      >
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className={`${montserrat.className} border-[0px] border-gray-300 !font-medium !text-black`}
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
