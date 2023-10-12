import { useForm, Controller } from "react-hook-form";
// import ReactDOM from "react-dom";
// import InventoryPage from "../Inventory/InventoryPage";
import { useEffect , useState } from "react";
import axios from "axios";
import { server } from "../../store";
// import { useSelector } from "react-redux/es/hooks/useSelector";

const RequisitionForm = () => {
  const [departments, setDepartments] = useState([]);
  const [labs, setLabs] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");
  


  const [vendors, setVendors] = useState([])
  const [selectedVendor, setSelectedVendor] = useState("")
  const [selectedVendorId, setSelectedVendorId] = useState(null);
  

  const user = JSON.parse(sessionStorage.getItem('userId')); 
  const username = user.username 

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`${server}/department/get-department`)
      .then((response) => {
        // console.log(response.data.department);
        setDepartments(response.data.department);
        // console.log(departments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${server}/vendor/get-vendor`,{withCredentials: true})
      .then((response) => {
        console.log(response.data.vendor);
        setVendors(response.data.vendor);
        // console.log(departments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(selectedDept); 
    if (selectedDept) {
      axios
        .get(`${server}/department/get-department-by-name/${selectedDept}`)
        .then((response) => {
          setLabs(response.data.department[0].labs);
          // console.log(response.data);
          
        })
        .catch((error) => {
          console.log(error);
        });
    }

  }, [selectedDept]);

  useEffect(() => {
    console.log(selectedVendorId); 
    if (selectedVendorId) {
      axios
        .get(`${server}/vendor/get-vendor-byId/${selectedVendorId}`,{withCredentials: true})
        .then((response) => {
          setSelectedVendor(response.data.vendor)
           console.log(response.data.vendor);
          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedVendorId]);
  

  return (
    <>
      <div className="text-[24px]">Requisition Form</div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data });
          reset();
        })}
      >
        <div className="w-full  flex flex-col border border-solid rounded-md ">
          <div className="w-full flex rounded-md  ">
            <div className="basis-1/2 mt-4 ml-4 h-auto p-4 bg-gray-200 border-solid border-r-2 border-black">
              <span className="text-xl text-indigo-600">
                Requisitioner Information :
              </span>
              <div className="py-2 px-2">
                <label>Name: </label>
                <input
                  type="text"
                  {...register("requisitioner_name", {
                    required: "Requisitioner name is required",
                  })}
                  id="requisitioner_name"
                  className="border rounded-md focus:border-gray-400 px-1  w-full  focus:outline-none focus:ring-0 "
                  placeholder="Name"
                  value={username}
                />
                {errors.requisitioner_name && (
                  <p className="text-red-500">
                    {errors.requisitioner_name.message}
                  </p>
                )}
              </div>
              <div className="py-2 px-2">
                <label>Department: </label>
                
                <Controller
            name="department"
            control={control}
            rules={{ required: "Please select a department" }}
            render={({ field }) => (
              <select
                className="border rounded-md focus:border-gray-400 px-1 w-full focus:outline-none focus:ring-0"
                {...field}

                onChange={(e) =>{ 
                  field.onChange(e);
                  
                  setSelectedDept(e.target.value)}}
              >
                <option value="">Select Department</option>
                {departments?.map((department, index) => (
                  <option key={index} value={department.name}  >
                    {department.name}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.department && (
            <p className="text-red-500">{errors.department.message}</p>
          )}
        </div>
        <div className="py-2 px-2">
          <span>Lab:  </span>
          <Controller
            name="lab"
            control={control}
            rules={{ required: "Please select Lab" }}
            render={({ field }) => (
              <select
                className="border rounded-md focus:border-gray-400 px-1 w-full focus:outline-none focus:ring-0"
                {...field}
              >
                <option value="">Select a Lab</option>
                {labs && labs.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            )}
          />
                {errors.lab && (
                  <p className="text-red-500">{errors.lab.message}</p>
                )}
              </div>
              <div className="py-2 px-2">
                <span>Expense Type: </span>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "Please select Category Type" }}
                  render={({ field }) => (
                    <select
                      className="border rounded-md focus:border-gray-400 px-1 w-full focus:outline-none focus:ring-0"
                      {...field}
                    >
                      <option value="">Select Expense</option>
                      <option value="Supplies">Supplies</option>
                      <option value="Lab2">Repair</option>
                      <option value="Lab3">External Servies</option>
                      <option value="Lab4">Equipments</option>
            
                    </select>
                  )}
                />
              </div>
            </div>

            <div className="basis-1/2 mt-4 mr-4 p-4 bg-gray-200">
              <span className="text-xl text-indigo-600">
                Recommended Vendor Information:{" "}
              </span>
              <div className="py-2 px-2">
                <Controller
                  name="vedorName"
                  control={control}
                  rules={{ required: "Please select Vendor Name" }}
                  render={({ field }) => (
                    <select
                      className="border rounded-md focus:border-gray-400 px-1 w-full focus:outline-none focus:ring-0"
                      {...field}
                      onChange={(e) =>{ 
                        field.onChange(e);
                        
                        setSelectedVendorId(e.target.value)
                        console.log(selectedVendorId);
                        }

                        
                      }
                      
                    >
                      <option value="">Select Vendor</option>
                      {vendors?.map((vendor, index) => (
                  <option key={index} value={vendor?._id} >
                    {vendor?.name}
                  </option>
                ))}
                    </select>
                  )}
                />
                {errors.vendorName && (
                  <p className="text-red-500">{errors.vendorName.message}</p>
                )}
              </div>
              <div className="py-2 px-2">
                <label>Address: </label>
                {/* <Controller
                  name="vedorAddress"
                  control={control}
                  rules={{ required: "Please select Address" }}
                  render={({ field }) => (
                    <select
                      className="border rounded-md focus:border-gray-400 px-1 w-full focus:outline-none focus:ring-0"
                      {...field}
                    >
                      
                    </select>
                  )}
                  value={selectedVendor.addrs}
                /> */}
                <input
                  type="text"
                  {...register("vedorAddress", {
                    required: "Please select Address",
                  })}
                  id="vedorAddress"
                  className="border rounded-md focus:border-gray-400 px-1 w-full  focus:outline-none focus:ring-0 "
                  placeholder=" vedorAddress "
                  value={selectedVendor.addrs}
                />
                {errors.vedorAddress && (
                  <p className="text-red-500">{errors.vedorAddress.message}</p>
                )}
              </div>
              <div className="py-2 px-2">
                <label>Telephone No: </label>
                <input
                  type="number"
                  {...register("telephone", {
                    required: "Telephone is required",
                  })}
                  id="telephone"
                  className="border rounded-md focus:border-gray-400 px-1 w-full  focus:outline-none focus:ring-0 "
                  placeholder=" Telephone "
                  value={selectedVendor.contact}
                />
                {errors.telephone && (
                  <p className="text-red-500">{errors.telephone.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full p-4 border border-solid ">
            <div className="w-full flex flex-row">
              <div className="basis-1/2 text-xl">
                <h2>Orders</h2>
              </div>
            </div>
            <div>
              <input
                type="text"
                {...register("remark", {
                  required: "Order Name required",
                })}
                id="remark"
                placeholder=" ** Remark **"
                className="bg-transparent w-full my-2 border border-solid border-gray-600 p-2"
              ></input>
            </div>
          </div>
          <div className="grid justify-items-end">
            <button
              className="bg-indigo-500 px-6 py-2 rounded-lg "
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RequisitionForm;
