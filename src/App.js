import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario/Formulario";
import Cita from "./components/Cita/Cita";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [appointments, setAppointments] = useState(citasIniciales);

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(appointments));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [appointments]);

  const makeAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(newAppointments);
  };

  const title =
    appointments.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario makeAppointment={makeAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((cita) => (
              <Cita
                key={cita.id}
                cita={cita}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
