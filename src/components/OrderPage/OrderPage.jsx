import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAction } from "../../Actions/orderActions";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";

const Order = () => {
  const [open, setOpen] = useState(true);
  const [contentopen, setcontentOpen] = useState(false);
  const dispatch = useDispatch();
  const { loading, orders } = useSelector((state) => state.orders);

  const filters = [
    {
      id: 1,
      name: "Types of Inventory",
      options: [
        { value: "Consumable", label: "Consumable" },
        { value: "Non-Consumable", label: "Non-Consumable" },
      ],
    },
    {
      id: "category",
      name: "Category",
      options: [
        { value: "Electronic", label: "Electronic" },
        { value: "Furniture", label: "furniture" },
        { value: "Furniture", label: "Furniture" },
        { value: "Food", label: "Food" },
      ],
    },
    {
      id: "Inventory",
      name: "Inventory",
      options: [
        { value: "Pen", label: "Pen" },
        { value: "Marker", label: "Marker" },
        { value: "Stapler", label: "Stapler" },
        { value: "Punch Machine", label: "Punch Machine" },
        { value: "Display Board", label: "Display Board" },
      ],
    },
  ];

  const handleApprove = () => {
    console.log("approve");
  };

  const handleDecline = () => {
    console.log("decline");
  };

  useEffect(() => {
    dispatch(getAllOrdersAction());
    //console.log(orders);
  }, [dispatch]);

  const toggleFilter = () => {
    setOpen(!open);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            {" "}
            {/* top bar orders */}
            <div>
              <div className="text-[24px]">Orders</div>
              <div className="flex">
                <a
                  href="/"
                  className="font-medium text-[#5C59E8] mr-3 hover:underline flex items-center"
                >
                  Dashboard
                </a>
                <p className="font-medium text-2xl text-[#A3A9B6] mr-3">
                  {" "}
                  <ArrowForwardIosIcon />{" "}
                </p>
                <p className="flex items-center text-base text-[#667085]">
                  Order List
                </p>
              </div>
            </div>
            <div className="mt-4 md:flex justify-center md:justify-center">
              <div className="inline-flex rounded-md shadow-sm md:mr-52">
                <button
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#DEDEFA] focus:text-[#5C59E8] "
                >
                  All Time
                </button>
                <button
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] "
                >
                  12 Months
                </button>
                <button
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] "
                >
                  30 Days
                </button>
                <button
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] "
                >
                  7 Days
                </button>
                <button
                  href="#"
                  className=" md:w-30 px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] "
                >
                  24 Hour
                </button>
              </div>

              <div className="mt-3 md:mt-0 md:flex">
                <button
                  onClick={toggleFilter}
                  href="#"
                  className="md:mr-6 mr-3 md:w-40 md:ml-0 w-2/5 ml-6 px-4 py-2 rounded-md shadow-sm text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 rounded-l-lg rounded-r-lg hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] "
                >
                  <TuneIcon /> Filters
                </button>

                <div className="p-0">
                  {!open && (
                    <>
                      <div className="p-2 border w-[250px] z-50 absolute  border-stone-400  drop-shadow-xl bg-white rounded-lg ">
                        <p className="font-bold  text-lg">Filters</p>

                        <div>
                          {filters.map((filter) => (
                            <div key={filter.id}>
                              <div className=" bg-[#F0F1F3] rounded-lg">
                                {" "}
                                <button
                                  onClick={() => setcontentOpen(!contentopen)}
                                  className=" bg-[#F9F9FC]] "
                                >
                                  <h2 className=" font-medium p-1  bg-[#F0F1F3]">
                                    {filter.name}
                                  </h2>
                                </button>{" "}
                              </div>
                              <ul>
                                {contentopen &&
                                  filter.options.map((option) => (
                                    <li
                                      className="p-2 text-[#667085]"
                                      key={option.value}
                                    >
                                      <label className="">
                                        <input
                                          type="checkbox"
                                          value={option.value}
                                        />
                                        <a className="p-1">{option.label}</a>
                                      </label>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <button
                            className=" p-2 border-2 rounded-lg m-2 border-gray-500"
                            onClick={toggleFilter}
                          >
                            Cancel
                          </button>
                          <button
                            className=" p-2 border-2 rounded-lg m-2 border-gray-500 bg-slate-500 text-white"
                            onClick={toggleFilter}
                          >
                            Apply Filter
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <button
                  href="#"
                  className="md:mr-2 md:w-40  w-2/5  mr-5 px-2 py-2 rounded-md shadow-sm text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 rounded-l-lg rounded-r-lg hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] "
                >
                  <CalendarMonthIcon /> Select Dates
                </button>
              </div>
            </div>
          </div>

          <div className="block bg-transparent m-4 p-4 w-full overflow-x-auto ">
            <table className="w-full shadow-md  border-2 rounded-2xl ">
              <thead className="w-full">
                <tr className="border border-solid ">
                  <th className="text-md px-6 py-3">Order Id</th>
                  <th className="text-md px-6 py-3">Product</th>
                  <th className="text-md px-6 py-3">Customer</th>
                  <th className="text-md px-6 py-3">Quantity</th>
                  <th className="text-md px-6 py-3">Price</th>
                  <th className="text-md px-6 py-3">Total</th>
                  <th className="text-md px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {orders?.map((order) => (
                  <tr key={order?._id}>
                    <th className="text-md border-b text-center text-[#5C59E8] px-6 py-3">
                      {order?._id.substring(0, 6)}
                    </th>
                    <td className="text-md border-b text-center px-6  py-3">
                      {order?.item?.name}
                    </td>
                    <td className="text-md border-b text-center px-6 py-3">
                      {order?.user?.username}
                    </td>
                    <td className="text-md border-b text-center px-6 py-3">
                      {order?.quantity}
                    </td>
                    <td className="py-3 border-b px-6 text-center">
                      {order?.price}
                    </td>
                    <td className="text-md border-b text-center  px-6 py-3">
                      {order?.price * order?.quantity}
                    </td>
                    <td className="text-md border-b px-6 py-3">
                      <div className="flex justify-between  ">
                        <button
                          onClick={() => handleApprove(order)}
                          className="rounded-full p-2 border-slate-900 "
                        >
                          {" "}
                          <p className="text-green-600">Approve</p>
                        </button>
                        <button
                          onClick={() => handleDecline(order)}
                          className="rounded-full p-2  bg-red"
                        >
                          <p className="text-red-600">Decline</p>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Order;
