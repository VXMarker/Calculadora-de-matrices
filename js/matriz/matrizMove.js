export const initMove = (matriz) => {
  let filMove = null;

  matriz.addEventListener("pointerdown", (e) => {
    const fila = e.target.closest(".fila"); //buscamos la fila
    if (!fila) return;

    if (e.target.closest(".fila-check")) {
      return; //si el check esta activo no activamos el movimiento
    }

    filMove = fila; //definimos la fila que se esta moviendo
    fila.classList.add("dragging"); //estilos de movimiento

    // Capturamos el puntero para continuar recibiendo eventos aunque el cursor salga ligeramente de la fila.
    fila.setPointerCapture(e.pointerId);
  });

  matriz.addEventListener("pointermove", (e) => {
    //Movimiento
    if (!filMove) return;

    const filas = [...matriz.querySelectorAll(".fila")].filter(
      (fila) => fila !== filMove, // seleccionamos todas las filas menos la de arrastre
    );

    const filAim = findFilAim(filas, e.clientY); //definimos la fila de referencia

    if (filAim) {
      matriz.insertBefore(
        //insertamos la fila arrastrada antes de la fila objetivo
        filMove.parentElement,
        filAim.parentElement,
      );

      return;
    }

    matriz.appendChild(filMove.parentElement); //fi no encontramos una fila debajo del cursor, colocamos la fila al final.
  });

  const exitMove = () => {
    //finalizamos el arrastre
    if (!filMove) return;
    filMove.classList.remove("dragging");
    filMove = null;
  };
  matriz.addEventListener("pointerup", exitMove);
  matriz.addEventListener("pointercancel", exitMove);
};

function findFilAim(fils, positionY) {
  for (const fila of fils) {
    const rect = fila.getBoundingClientRect(); //obtenemos las dimensiones y posicion de la fila

    const centerY = rect.top + rect.height / 2; //calculamos el centro
    if (positionY < centerY) {
      return fila;
    }
  }

  return null;
}
