import { filSwap } from "./matrizSwap.js";

export function initSelect(matriz) {
  matriz.addEventListener("click", (e) => {
    const boton = e.target.closest(".fila-check"); //buscamos todos los checks

    if (!boton) return;
    e.stopPropagation();

    const filaContainer = boton.closest(".fila-container"); //buscamos todos los contenedores de las filas
    if (!filaContainer) return;

    const fila = filaContainer.querySelector(".fila");

    /*
     * Buscamos una fila previamente seleccionada.
     */

    const filaAnterior = matriz.querySelector(".fila-container.selected");

    if (!filaAnterior) {
      //no existe fila seleccionada
      onSelectFil(filaContainer);
      return;
    }

    if (filaAnterior === filaContainer) {
      //se selecciono la misma fila
      offSelectFil(filaContainer);
      return;
    }

    const otraFila = filaAnterior.querySelector(".fila");
    filSwap(otraFila, fila);

    offSelectFil(filaAnterior); //limpiamos los select
    offSelectFil(filaContainer);
  });
}

const onSelectFil = (filaContainer) => {
  filaContainer.classList.add("selected");
};
const offSelectFil = (filaContainer) => {
  filaContainer.classList.remove("selected");
};
