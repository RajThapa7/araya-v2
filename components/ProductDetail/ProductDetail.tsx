import classNames from "@/utils/classNames";

const data = {
  brand: "asus",
  "Dimension (WxHxB)":
    "10x20x30 sdsadasdasd asdasdfdsfsadfasd df fsd fsdfsadf sdf f asdsa",
  brandy: "fdsfjsdlf\nsdfsdfsd\ndsdfds",
  "Product Dimensions": "10x20x30",
  brandq: "asus",
};

export default function ProductDetail({ className }: { className?: string }) {
  return (
    <div className={classNames(className)}>
      <h2 className="mb-6 font-semibold text-gray-900">
        Product description of HP Victus 15, i5 12th gen, 512GB SSD, 16GB RAM
      </h2>

      <table className="w-full border-collapse">
        <tbody className="">
          {Object.entries(data).map(([key, value]) => (
            <tr
              key={key}
              className="border-b-2 border-gray-300 text-sm text-gray-900 last:border-none hover:bg-gray-200"
            >
              <td className="w-[40%] break-words px-5 pb-2 pt-3 font-semibold">
                {key}
              </td>
              <td className="w-[60%] break-words px-5 pb-2 pt-3">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
