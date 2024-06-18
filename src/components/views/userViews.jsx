import { Outlet, Route, Routes } from "react-router-dom";
import { UserPlantDetails } from "../plants/userPlantDetails";
import { PlantList } from "../plants/userPlants";
import { NavBar } from "../NavBar/NavBar";

export const UserViews = (currentUser) => {
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
        <Route path="plants">
            <Route index element={<PlantList currentUser={currentUser}/>} />
            <Route path="userPlantDetails/:plantId" element={<UserPlantDetails currentUser={currentUser}/>}/>

        </Route>

      </Route>
    </Routes>
  );
};
