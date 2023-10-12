import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home"
import PageNotFound from "./components/404/PageNotFound"
import InventoryPage from "./components/Inventory/InventoryPage";
import Inward from "./components/Inward/Inward"
import OrderPage from "./components/OrderPage/OrderPage"
import RequisitionForm from "./components/Requistion/RequistionForm"
import Protected from "./components/404/Protected";
import { useDispatch } from "react-redux";
import { getUserDetailAction } from "./Actions/userActions";
import { useEffect } from "react";
import UserPage from "./components/Users/UserPage";

function App() {
  const dispatch = useDispatch()

  // const id = sessionStorage.userId
  
  // if(id){
    useEffect(() => {
    dispatch(getUserDetailAction())
    
  }, [dispatch])
    
  // }
  
  
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Protected>
            <Sidebar>
              <Home />
            </Sidebar>
            </Protected>
          }
        />
       
        <Route
          path="/inventory-page"
          element={
            <Protected>
            <Sidebar>
              <InventoryPage />
            </Sidebar>
            </Protected>
          }
        />
        <Route
          path="/inward-page"
          element={
            <Protected>
            <Sidebar>
              <Inward />
            </Sidebar>
            </Protected>
          }
        />
        <Route
          path="/orders-page"
          element={
            <Protected>
            <Sidebar>
              <OrderPage />
            </Sidebar>
            </Protected>
          }
        />
        <Route
          path="/requisiton-page"
          element={
            <Protected>
            <Sidebar>
              <RequisitionForm />
            </Sidebar>
            </Protected>
          }
        />
        <Route
          path="/user-management-page"
          element={
            <Protected>
            <Sidebar>
              <UserPage/>
            </Sidebar>
            </Protected>
          }
        />
         <Route
          path="*"
          element={
              <PageNotFound />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
