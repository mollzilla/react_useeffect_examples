import React from "react";
import "../styles/una_vez.css";

export default function UnaVezYRenderiza() {
  const [name, setName] = React.useState("");

  // para ver los efectos correctamente, actualiza el mini browser
  // de codesandbox una vez se haya cargado la página
  React.useEffect(() => {
    console.log("Este efecto corrio");
    document.bgColor = `FFE600`;
  }, []);

  // se pueden usar varios efectos en un
  // componente
  React.useEffect(() => {
    console.log("Este efecto tambien corrio");
  });

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="una-vez">
      <input
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="ingresa tu nombre"
      />
    </div>
  );
}
