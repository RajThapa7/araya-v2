"use client";

import classNames from "@/utils/classNames";
import { Button, Spinner } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/button";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface MyButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "gradient" | "text";
  className?: string;
  color?: color;
  isSecondary?: boolean;
  isLoading?: boolean;
}

const MyButton = ({
  children,
  variant,
  className,
  color,
  isSecondary = false,
  isLoading = false,
  ...props
}: MyButtonProps) => {
  return (
    <Button
      color={color}
      {...props}
      variant={variant}
      disabled={isLoading}
      className={classNames(
        className,
        `transition-smooth flex min-w-[130px] items-center justify-center gap-x-2 px-4 py-1 ${
          isSecondary
            ? "bg-primary text-accent ring-1 ring-accent hover:bg-accent hover:text-primary"
            : "bg-accent hover:bg-accent-dark"
        }`,
      )}
    >
      {isLoading ? <Spinner color="green" className="h-4" /> : children}
    </Button>
  );
};

export default MyButton;
