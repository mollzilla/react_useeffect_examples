import React from "react";
import "../styles/basic.css";

export default function BasicUseEffect() {
  React.useEffect(() => {
    // cambiamos el color del fondo sin ningún CSS
    document.bgColor = `FFE600`;
  });

  return (
    <div className="basic">
      <h3>Hay un efecto secundario aquí...</h3>
    </div>
  );
}