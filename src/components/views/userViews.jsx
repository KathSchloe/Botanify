import { Outlet, Route, Routes } from "react-router-dom";
import { UserPlantDetails } from "../plants/userPlantDetails";
import { PlantList } from "../plants/userPlants";
import { NavBar } from "../NavBar/NavBar";
import { PlantForm } from "../plants/addPlant";
import { EditPlant } from "../plants/editPlant";
import { AddWtrSchedule } from "../waterSchedule/addWtrSchedule";
import { WaterList } from "../waterSchedule/waterList";

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
            <Route path="EditPlant/:plantId" element={< EditPlant currentUser={currentUser}/>}/>
        <Route path="newPlant" element={<PlantForm currentUser={currentUser}/>}/>
        </Route>
        <Route path="WtrSchedule">
            <Route index element={<WaterList currentUser={currentUser}/>} />
            {/* <Route path="userPlantDetails/:wtrScheduleId" element={<UserWtrDetails currentUser={currentUser}/>}/> */}
            <Route path="editWtrSchedule/:wtrScheduleId" element={< editWtrSchedule currentUser={currentUser}/>}/>
        <Route path="newWtrSchedule" element={<AddWtrSchedule currentUser={currentUser}/>}/>
        </Route>
      </Route>
    </Routes>
  );
};
