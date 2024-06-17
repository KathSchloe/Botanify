import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav bar/Navbar";
import { plants } from "../components/plants/userPlants";
import { userPlantDetails } from "../components/plants/userPlantDetails";

export const CustomerViews = (currentUser) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="flowers">
            <Route index element={<userPlants currentUser={currentUser}/>} />
            <Route path="userPlantDetails/:plantId" element={<userPlantDetails currentUser={currentUser}/>}/>

        </Route>

      </Route>
    </Routes>
  );
};
