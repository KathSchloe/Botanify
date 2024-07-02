
  //get all water schedules fetch call
  export const GetAllFertSchedules = () => {
    return fetch(`http://localhost:8088/fertSchedule?_expand=plant`).then((res) => res.json());
  };
  
  export const CreateFertSchedule = (fertSchedule) => {
    return fetch(`http://localhost:8088/fertSchedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fertSchedule),
    });
  };
  export const DeleteFertSchedule = (fertScheduleId) => {
    return fetch(`http://localhost:8088/fertSchedule/${fertScheduleId}`, {
      method: "DELETE",
    });
  };
  
  export const UpdateFertSchedule = (fertSchedule) => {
    return fetch(`http://localhost:8088/fertSchedule/${fertSchedule.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fertSchedule),
    });
  };
  
  export const GetFertScheduleById = (fertSchedule) => {
    return fetch(`http://localhost:8088/fertSchedule/${fertSchedule}`).then((res) =>
      res.json()
    );
  };
  
//   export const getNurseryDistributors = () => {
//     return fetch(
//       `http://localhost:8088/nurseryDistributors?_expand=distributor&_expand=nursery`
//     ).then((res) => res.json());
//   };
  