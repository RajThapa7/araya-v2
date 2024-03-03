"use client";

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

export function MyTab({ data, className }: ITabProps) {
  const [activeTab, setActiveTab] = React.useState(data[0].value);
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="!z-0 flex justify-center gap-6 rounded-none border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`
              ${
                activeTab === value
                  ? " font-semibold text-gray-900"
                  : "font-medium"
              } w-fit pb-2 text-lg`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className={classNames(className, "mt-[1px]")}>
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="rounded-lg border-[0px] border-gray-300 !font-medium !text-black"
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
