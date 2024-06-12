"use client";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

interface IRatingProps {
  readonly?: boolean;
  value?: number;
  onChange?: (...event: any[]) => void;
  error?: any;
  isFormSettled?: boolean;
  size?: number;
}

export function MyRating({
  value,
  readonly = true,
  onChange,
  error,
  isFormSettled = false,
  size = 22,
}: IRatingProps) {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
    onChange && onChange(rate);
  };

  useEffect(() => {
    isFormSettled && setRating(0);
  }, [isFormSettled]);

  return (
    <div>
      <Rating
        size={size}
        initialValue={readonly ? value : rating}
        readonly={readonly}
        onClick={handleRating}
      />
      {error && <p className="mt-2 text-sm text-red-400">{error?.message}</p>}
    </div>
  );
}
