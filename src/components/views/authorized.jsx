//redirect the user to the login page if they are not currently logged in.

import { Navigate, useLocation } from "react-router-dom"


export const Authorized = ({ children }) => {
  let location = useLocation()
  if (localStorage.getItem("botanify_user")) {
    return children
  }
  else {
    return <Navigate to={`/login`} state={{ from: location }} replace />
  }
}
