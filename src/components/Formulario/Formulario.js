import React, { useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Formulario = ({ makeAppointment }) => {
  const [appointment, setAppointment] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const handleAppointment = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = appointment;

  const submitAppointment = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    appointment.id = uuid();

    makeAppointment(appointment);

    setAppointment({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : (
        ""
      )}
      <form onSubmit={submitAppointment}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleAppointment}
          value={mascota}
        />

        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={handleAppointment}
          value={propietario}
        />

        <label>Fecha de alta</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleAppointment}
          value={fecha}
        />

        <label>Hora de Alta</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleAppointment}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleAppointment}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  makeAppointment: PropTypes.func.isRequired,
};

export default Formulario;
