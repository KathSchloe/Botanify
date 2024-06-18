
import { useEffect, useState } from "react";
import { UserViews } from "./userViews";
import { EmployeeViews } from "./employeeViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localBotanifyUser = localStorage.getItem("botanify_user");
    const botanifyUserObj = JSON.parse(localBotanifyUser);

    setCurrentUser(botanifyUserObj);
  }, []);

  return currentUser?.isEmployee ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <UserViews currentUser={currentUser}/>
  );
};