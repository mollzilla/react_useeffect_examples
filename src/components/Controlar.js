import React from "react";
// import "./styles.css";

export default function App() {
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");

  // para ver los efectos correctamente, actualiza el mini browser
  // de codesandbox una vez se haya cargado la página

  // este esfecto se ejecuta solo despues del
  // primer renderizado
  React.useEffect(() => {
    console.count("Solo mostrare este mensaje una vez");
    document.bgColor = `FFE600`;
  }, []);

  // este efecto se ejecuta cada vez que hay un
  // cambio en toda la aplicación
  React.useEffect(() => {
    console.count(
      "Este efecto corre siempre que haya un cambio en toda la aplicación"
    );
  });

  // este efecto se ejecuta cada vez que hay un
  // cambio en la variable lastname
  React.useEffect(() => {
    console.count("Solo mostrare un mensaje cuando el apellido cambie");
  }, [lastname]);

  const handleChange = (e) => {
    e.persist();
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "lastname") setLastname(e.target.value);
  };

  return (
    <div className="una-vez">
      <div>
        <h3>¡Mira la consola!</h3>
      </div>
      <div>
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
    </div>
  );
}
