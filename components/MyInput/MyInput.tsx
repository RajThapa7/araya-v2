"use client";
import {
  FocusEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";
// import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import classNames from "../../utils/classNames";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  // error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  error?: any;
}

const MyInput = forwardRef(
  (props: MyInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, onBlur, onChange, error, ...customProps } = props;

    const handleChange = (event: FocusEvent<HTMLInputElement, Element>) => {
      if (onChange) onChange(event);
    };
    const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
      if (onBlur) onBlur(event);
    };

    return (
      <>
        <input
          ref={ref}
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
          className={classNames(
            "z-1 w-full rounded-md border-none bg-gray-100 px-4 py-3 outline-none focus:ring-1",
            className,
            error ? "ring-1 ring-red-500" : "focus:ring-blue-500",
            props.disabled
              ? "cursor-not-allowed font-medium text-gray-500"
              : "",
          )}
          {...customProps}
        />
        <p className="text-sm text-red-400">{error?.message}</p>
      </>
    );
  },
);

MyInput.displayName = "MyInput";
export default MyInput;
