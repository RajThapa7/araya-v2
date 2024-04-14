import { IProductData } from "@/types";
import classNames from "@/utils/classNames";
import { useCallback } from "react";

export default function ProductDetail({
  className,
  data,
}: {
  className?: string;
  data: IProductData;
}) {
  const getDescriptionFromArray = useCallback((str: string): string[][] => {
    const array = str.split(";").map((item) => item.split(":"));
    return array;
  }, []);
  const description = getDescriptionFromArray(data.description);
  return (
    <div className={classNames(className)}>
      <h2 className="mb-6 font-semibold text-gray-900">
        Product description of {data.title}
      </h2>

      <table className="w-full border-collapse">
        <tbody className="">
          {description.map((item, index) => (
            <tr
              key={index}
              className="border-b-2 border-gray-300 text-sm text-gray-900 last:border-none hover:bg-gray-200"
            >
              <td className="w-[40%] break-words px-5 pb-2 pt-3 font-semibold">
                {item[0]}
              </td>
              <td className="w-[60%] break-words px-5 pb-2 pt-3">{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
