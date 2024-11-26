"use client";
import useFetchDeliveryAddress from "@/api/hooks/delivery-address/useFetchDeliveryAddress";
import AddNewAddress from "@/features/store/delivery-location/addNewAddress";
import { openModal } from "@/lib/modal/modalSlice";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
const Page = () => {
  const dispatch = useDispatch();
  const data = useFetchDeliveryAddress();

  return (
    <div>
      <div className="mb-4 flex flex-row justify-between">
        <h2 className="header-4">Delivery Location</h2>
        <p
          onClick={() =>
            dispatch(
              openModal({
                content: <AddNewAddress />,
              }),
            )
          }
          className="flex cursor-pointer flex-row items-center gap-1 hover:text-accent"
        >
          <IoIosAdd size={22} className="text-accent" />
          Add New Address
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {data.data?.data.map(
          ({
            _id,
            area,
            city,
            label,
            landmark,
            name,
            number,
            province,
            userId,
          }) => (
            <div className="flex flex-col gap-2 border-2 p-4 text-sm" key={_id}>
              <div className="flex flex-row justify-between">
                <p className="font-semibold text-gray-600">{name}</p>
                <p className="cursor-pointer text-blue-500">Edit</p>
              </div>
              <p className="font-semibold text-gray-600">{number}</p>
              <p className="mt-2 font-semibold">
                {province} Province, {city}, {area} Area near {landmark}
              </p>
              <Tag tag={label} />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

const Tag = ({ tag }: { tag: string }) => {
  return (
    <span className="w-fit whitespace-nowrap bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
      {tag}
    </span>
  );
};

export default Page;
