"use client";
import { Tooltip, Typography } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

interface MyTooltipProps extends PropsWithChildren {
  placement?: string;
  content: string;
}

export function MyTooltip({ content, children, placement }: MyTooltipProps) {
  return (
    <Tooltip
      className="border border-blue-gray-50 bg-white px-2 py-2 shadow-xl shadow-black/10"
      placement={placement}
      content={
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-80"
          >
            {content}
          </Typography>
        </div>
      }
    >
      {children}
    </Tooltip>
  );
}
