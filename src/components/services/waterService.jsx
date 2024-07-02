
  //get all water schedules fetch call
  export const GetAllWtrSchedules = () => {
    return fetch(`http://localhost:8088/waterSchedule?_expand=plant`).then((res) => res.json());
  };
  
  export const NewWtrSchedule = (waterSchedule) => {
    return fetch(`http://localhost:8088/waterSchedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(waterSchedule),
    });
  };
  export const DeleteWtrSchedule = (waterScheduleId) => {
    return fetch(`http://localhost:8088/waterSchedule/${waterScheduleId}`, {
      method: "DELETE",
    });
  };
  
  export const UpdateWtrSchedule = (waterSchedule) => {
    return fetch(`http://localhost:8088/waterSchedule/${waterSchedule.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(waterSchedule),
    });
  };
  
  export const GetWtrScheduleById = (waterSchedule) => {
    return fetch(`http://localhost:8088/waterSchedule/${waterSchedule}?_expand=plant`).then((res) =>
      res.json()
    );
  };
  
//   export const getNurseryDistributors = () => {
//     return fetch(
//       `http://localhost:8088/nurseryDistributors?_expand=distributor&_expand=nursery`
//     ).then((res) => res.json());
//   };
  