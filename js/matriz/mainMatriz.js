import { initMove } from "./matrizMove.js";
import { initSelect } from "./matrizSelect.js";

const matriz = document.querySelector(".matriz");

if (!matriz) {
  console.error('No se encontró el elemento ".matriz".');
} else {
  initMove(matriz);
  initSelect(matriz);
}

//agregar creacion de matriz 

