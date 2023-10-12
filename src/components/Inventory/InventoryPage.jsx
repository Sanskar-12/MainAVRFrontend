import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TuneIcon from "@mui/icons-material/Tune";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getAllInventoryAction } from "../../Actions/inventoryActions";
import Loader from "../Loader/Loader";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const InventoryPage = () => {
  const [open, setOpen] = useState(true);
  const [contentopen, setcontentOpen] = useState(false);
  //   const [filer,setFilter]= useState({});
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e);
    console.log(search);
  };

  //   const handleFilter=(data)=>[
  //     ...data,

  //   ]
  const toggleFilter = () => {
    setOpen(!open);
  };

  //   const InventoryListItems = [
  //     { name: 'test', sku:'123' ,stock:2, Location:'Room 100' , date:'1 Sept 2023'},

  //   ];

  return (
    <div className=''>

      
      <div className="">
          <div className="text-[24px]">Inventory List</div>
          <div className="flex">
            <a href="/" className="font-medium text-[#5C59E8] mr-3 hover:underline flex items-center">Dashboard</a>
            <p className="font-medium text-2xl text-[#A3A9B6] mr-3"> <ArrowForwardIosIcon/>  </p>
            <p className="flex items-center text-base text-[#667085]">Order List</p>
          </div>
        </div>



        <div className="mt-4 md:flex justify-center md:justify-center">

<div className="inline-flex rounded-md shadow-sm md:mr-52">
  <button href="#" className="px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#DEDEFA] focus:text-[#5C59E8] ">
    All Time
  </button>
  <button href="#" className="px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] ">
    12 Months
  </button>
  <button href="#" className="px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] ">
    30 Days
  </button>
  <button href="#" className="px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] ">
    7 Days
  </button>
  <button href="#" className=" md:w-30 px-4 py-2 text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] ">
    24 Hour
  </button>
</div>

<div className="mt-3 md:mt-0 md:flex" >
 
 <button  onClick={toggleFilter} href="#" className="md:mr-6 mr-3 md:w-40 md:ml-0 w-2/5 ml-6 px-4 py-2 rounded-md shadow-sm text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 rounded-l-lg rounded-r-lg hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] ">
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
                  <li className="p-2 text-[#667085]" key={option.value}>
                    <label className="">
                      <input type="checkbox" value={option.value} />
                      <a className="p-1">{option.label}</a>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex justify-end'>
        <button className=' p-2 border-2 rounded-lg m-2 border-gray-500' onClick={toggleFilter}>Cancel</button>
        <button className=' p-2 border-2 rounded-lg m-2 border-gray-500 bg-slate-500 text-white' onClick={toggleFilter}>Apply Filter</button>
      </div>
    </div>
  </>
 )}
</div>

  <button href="#" className="md:mr-2 md:w-40  w-2/5  mr-5 px-2 py-2 rounded-md shadow-sm text-sm font-medium text-[#667085] bg-white border-t border-b border-gray-200 rounded-l-lg rounded-r-lg hover:bg-gray-100 hover:text-[#5C59E8] focus:z-10 focus:ring-2 focus:ring-[#5C59E8] focus:text-[#5C59E8] ">
 <CalendarMonthIcon /> Select Dates
 </button>

</div>

</div>



      <div className="flex  flex-row grow-0 bg-white border-slate-50 rounded-md mt-4 w-full">
        <div className="flex ml-4">
        <div className="mt-2 px-2 ">
          <SearchIcon />
        </div>
          <input
            className="p-2  border rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0"
            placeholder="Search.."
            type="text"
            onInput={(e) => handleSearch(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="mt-4">
        <Table />
      </div>

    </div>
  );
};



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







export function Table() {
  // const [editableOrderId, setEditableOrderId] = useState(-1);

  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(getAllInventoryAction());
  }, [dispatch]);

  // const handleEdit = (order) => {
  //   setEditableOrderId(order.id);
  // };
  // const handleDelete = (order) => {
  //   console.log("data will be deleted in backend ");
  //   console.log(order);
  // };

  // const handleUpdate = () => {
  //   console.log("Updated");
  // };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="block bg-transparent m-4 p-4 w-full overflow-x-auto min-h-full">
            
                <table className="w-full  shadow-md border-2 rounded-2xl ">
                  <thead className="w-full">
                    <tr className=" border border-solid ">
                      <th className="text-md px-6 py-3">Products</th>
                      <th className="text-md px-6 py-3 ">Id</th>
                      <th className="text-md px-6 py-3">Category</th>
                      <th className="text-md px-6 py-3">Stock</th>
                      <th className="text-md px-6 py-3">TimeLine</th>
                      <th className="text-md px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((products) => (
                      <tr key={products?._id}>
                        <th className="text-md text-center border-b px-6 py-3 bg-white">
                          {products?.name}
                        </th>
                        <td className="text-md text-center px-6 text-[#5C59E8]  bg-white font-medium py-3 border-b">
                        {products?._id && products._id.substring(0, 6)}
                        </td>
                        <td className="text-md border-b text-center  bg-white px-6 py-3">
                          {products?.categorie?.name}
                        </td>
                        <td className="text-md  border-b text-center  bg-white px-6 py-3">
                          {products?.stock}
                        </td>
                        {/* <td className="py-3  border-b px-6 text-center">
                          {order.id === editableOrderId ? (
                            <select onChange={(e) => handleUpdate(e, order)}>
                              <option value="1">Room 1</option>
                              <option value="2">Room 2</option>
                              <option value="3">Room 3</option>
                              <option value="4">Room 4</option>
                              <option value="5">Room 5</option>
                              <option value="6">Room 6</option>
                              <option value="7">Room 7</option>
                              <option value="8">Room 8</option>
                              <option value="9">Room 9</option>
                              <option value="10">Room 10</option>
                            </select>
                          ) : (
                            <span>{order.allotment}</span>
                          )}
                        </td> */}
                        <td className="text-md text-center  bg-white border-b px-6 py-3">
                          {products?.createdAt?.split("T")[0]}
                        </td>
                        <td className="text-md px-6 py-3  bg-white border-b">
                          <div className="flex justify-around  ">
                            
                            <button
                              // onClick={() => handleEdit(order)}
                              className="rounded-full p-2 border-slate-900 "
                            >
                              <EditIcon />
                            </button>
                            <button
                              // onClick={() => handleDelete(order)}
                              className="rounded-full p-2  bg-red"
                            >
                              <DeleteIcon />
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
}

export default InventoryPage;
