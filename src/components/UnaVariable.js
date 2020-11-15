import React from "react";
import "../styles/una_variable.css";

export default function UnaVariable() {
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");

  // para ver los efectos correctamente, actualiza el mini browser
  // de codesandbox una vez se haya cargado la página
  React.useEffect(() => {
    console.count("Solo mostrare este mensaje una vez");
  }, []);

  React.useEffect(() => {
    console.count(
      "Este efecto corre siempre que haya un cambio en toda la aplicación"
    );
  });

  React.useEffect(() => {
    console.count("Solo mostrare un mensaje cuando el apellido cambie");
  }, [lastname]);

  const handleChange = (e) => {
    e.persist();
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "lastname") setLastname(e.target.value);
  };

  return (
    <div className="una-variable">
      <input
        name="name"
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="ingresa tu nombre"
      />
      <input
        name="lastname"
        value={lastname}
        onChange={handleChange}
        type="text"
        placeholder="ingresa tu apellido"
      />
    </div>
  );
}
