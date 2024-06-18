
  //get all water schedules fetch call
  export const getAllWtrSchedules = () => {
    return fetch(`http://localhost:8088/waterSchedule`).then((res) => res.json());
  };
  
  export const createWtrSchedule = (waterSchedule) => {
    return fetch(`http://localhost:8088/waterSchedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(waterSchedule),
    });
  };
  export const deleteWtrSchedule = (waterScheduleId) => {
    return fetch(`http://localhost:8088/waterSchedule/${waterScheduleId}`, {
      method: "DELETE",
    });
  };
  
  export const updateWtrSchedule = (waterSchedule) => {
    return fetch(`http://localhost:8088/waterSchedule/${waterSchedule.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(waterSchedule),
    });
  };
  
  export const getWtrScheduleById = (waterSchedule) => {
    return fetch(`http://localhost:8088/waterSchedule/${waterSchedule}`).then((res) =>
      res.json()
    );
  };
  
//   export const getNurseryDistributors = () => {
//     return fetch(
//       `http://localhost:8088/nurseryDistributors?_expand=distributor&_expand=nursery`
//     ).then((res) => res.json());
//   };
  