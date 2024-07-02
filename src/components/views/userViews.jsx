import { Outlet, Route, Routes } from "react-router-dom";
import { UserPlantDetails } from "../plants/userPlantDetails";
import { PlantList } from "../plants/userPlants";
import { NavBar } from "../NavBar/NavBar";
import { PlantForm } from "../plants/addPlant";
import { EditPlant } from "../plants/editPlant";
import { CreateWtrSchedule } from "../waterSchedule/addWtrSchedule";
import { WaterList } from "../waterSchedule/waterList";
import { EditWtrSchedule } from "../waterSchedule/editWtrSchedule";
import { FertList } from "../fertSchedule/fertList";
import { EditFertSchedule } from "../fertSchedule/editFertSchedule";
import { NewFertSchedule } from "../fertSchedule/addFertSchedule";


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
            <Route path="editWtrSchedule/:wtrScheduleId" element={< EditWtrSchedule currentUser={currentUser}/>}/>
        <Route path="newWtrSchedule" element={<CreateWtrSchedule currentUser={currentUser}/>}/>
        </Route>
        <Route path="FertSchedule">
            <Route index element={<FertList currentUser={currentUser}/>} />
            {/* <Route path="userPlantDetails/:wtrScheduleId" element={<UserWtrDetails currentUser={currentUser}/>}/> */}
            <Route path="editFertSchedule/:fertScheduleId" element={< EditFertSchedule currentUser={currentUser}/>}/>
        <Route path="newFertSchedule" element={<NewFertSchedule currentUser={currentUser}/>}/>
        </Route>
      </Route>
    </Routes>
  );
};
