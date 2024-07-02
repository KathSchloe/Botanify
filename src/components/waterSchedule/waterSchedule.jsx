import "./waterSchedule.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, Col, Row, Button } from "reactstrap";
import { DeleteWtrSchedule, GetAllWtrSchedules } from "../services/waterService.jsx";

export const wtrScheduleList = ({ currentUser }) => {
  const [allWtrSchedules, setAllWtrSchedules] = useState([]);
  const [userWtrSchedules, setUserWtrSchedules] = useState([]);

  //employee view 
  useEffect(() => {
    GetAllWtrSchedules().then((wtrScheduleArray) => {
      setAllWtrSchedules(wtrScheduleArray);
    });
  }, []);

//function to handle deleting water schedule from database 
  const handleDelete = (waterSchedule) => {
    DeleteWtrSchedule(waterSchedule.id).then(() => {
      GetAllWtrSchedules().then((wtrScheduleArray) => {
        setAllWtrSchedules(wtrScheduleArray);
      });
    });
  };

  // JSX to display allWtrSchedules using Reactstrap
  return (
    <section>
      <header className="wtrSchedule-header">Watering Schedules</header>
      <Link to={`/newWtrSchedule`}>
        <Button color="success" size="sm">Add New Water Schedule</Button>
      </Link>
      <div className="wtrSchedule">
        <div>
          <Row>
            {allWtrSchedules.map((waterSchedule) => {
              return (
                <Col key={waterSchedule.id}>
                  <Card
                    style={{
                      width: "12rem",
                      padding: "1em",
                      margin: 5,
                    }}
                  >
                    <CardBody>
                      <h2>{waterSchedule.plantName}</h2>
                      {/* Edit water schedule Button */}
                      <Link to={`/editWtrSchedule/${waterSchedule.id}`}>
                        <Button color="dark" size="sm" style={{ margin: 5 }}>
                          Edit
                        </Button>
                      </Link>

                      {/* Delete water schedule Button */}
                      <Button
                        color="success"
                        size="sm"
                        onClick={() => handleDelete(waterSchedule)}
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