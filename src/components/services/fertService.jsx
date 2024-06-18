
  //get all water schedules fetch call
  export const getAllFertSchedules = () => {
    return fetch(`http://localhost:8088/fertSchedule`).then((res) => res.json());
  };
  
  export const createFertSchedule = (fertSchedule) => {
    return fetch(`http://localhost:8088/fertSchedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fertSchedule),
    });
  };
  export const deleteFertSchedule = (fertScheduleId) => {
    return fetch(`http://localhost:8088/fertSchedule/${fertScheduleId}`, {
      method: "DELETE",
    });
  };
  
  export const updateFertSchedule = (fertSchedule) => {
    return fetch(`http://localhost:8088/fertSchedule/${fertSchedule.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fertSchedule),
    });
  };
  
  export const getFertScheduleById = (fertSchedule) => {
    return fetch(`http://localhost:8088/fertSchedule/${fertSchedule}`).then((res) =>
      res.json()
    );
  };
  
//   export const getNurseryDistributors = () => {
//     return fetch(
//       `http://localhost:8088/nurseryDistributors?_expand=distributor&_expand=nursery`
//     ).then((res) => res.json());
//   };
  