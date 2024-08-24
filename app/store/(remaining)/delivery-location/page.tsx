"use client";
import AddNewAddress from "@/features/store/delivery-location/addNewAddress";
import { openModal } from "@/lib/modal/modalSlice";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
const Page = () => {
  const dispatch = useDispatch();
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

      <div className="grid grid-cols-2 bg-white p-6">
        <div className="flex flex-col gap-2 border-2 p-4 text-sm">
          <div className="flex flex-row justify-between">
            <p>Raj Thapa</p>
            <p className="cursor-pointer text-blue-500">Edit</p>
          </div>
          <p>9848741130</p>
          <p>
            Bagmati Province,Kathmandu Outside Ring Road,Budhanilkantha -
            Chunikhel Buspark Area,Chunikhel, Kathmandu,near Karuna Hospital
          </p>
          <Tag tag="Home" />
        </div>
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
