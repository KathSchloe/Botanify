//All fetch services relating to login.jsx and register.jsx and database.json. This includes: receiving data, creating data, and editing data.

export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
      res.json()
    );
  };
  //create new account
  export const createUser = (user) => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };
  
  export const getAllUsers = () => {
    return fetch(`http://localhost:8088/users`).then((res) =>
      res.json()
    );
  }