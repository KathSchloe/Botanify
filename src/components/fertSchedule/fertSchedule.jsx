import "./fertSchedule.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, Col, Row, Button } from "reactstrap";
import { DeleteFertSchedule, GetAllFertSchedules } from "../services/fertService.jsx";

export const fertScheduleList = ({ currentUser }) => {
  const [allFertSchedules, setAllFertSchedules] = useState([]);
  const [userFertSchedules, setUserFertSchedules] = useState([]);

  //employee view 
  useEffect(() => {
    GetAllFertSchedules().then((fertScheduleArray) => {
      setAllFertSchedules(fertScheduleArray);
    });
  }, []);

//function to handle deleting fert schedule from database 
  const handleDelete = (fertSchedule) => {
    DeleteFertSchedule(fertSchedule.id).then(() => {
      GetAllFertSchedules().then((fertScheduleArray) => {
        setAllFertSchedules(fertScheduleArray);
      });
    });
  };

  // JSX to display allFertSchedules using Reactstrap
  return (
    <section>
      <header className="fertSchedule-header">Fertilization Schedules</header>
      <Link to={`/newFertSchedule`}>
        <Button color="success" size="sm">Add New</Button>
      </Link>
      <div className="fertSchedule">
        <div>
          <Row>
            {allFertSchedules.map((fertSchedule) => {
              return (
                <Col key={fertSchedule.id}>
                  <Card
                    style={{
                      width: "12rem",
                      padding: "1em",
                      margin: 5,
                    }}
                  >
                    <CardBody>
                      <h2>{fertSchedule.plantName}</h2>
                      {/* Edit water schedule Button */}
                      <Link to={`/editFertSchedule/${fertSchedule.id}`}>
                        <Button color="dark" size="sm" style={{ margin: 5 }}>
                          Edit
                        </Button>
                      </Link>

                      {/* Delete water schedule Button */}
                      <Button
                        color="success"
                        size="sm"
                        onClick={() => handleDelete(fertSchedule)}
                      >
                        Delete
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </section>
  );
};