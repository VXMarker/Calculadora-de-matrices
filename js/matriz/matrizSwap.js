export const filSwap = (filA, filB) => {
  if (!filA || !filB) return;
  if (filA === filB) return;

  const containerA = filA.closest(".fila-container");
  const containerB = filB.closest(".fila-container");

  if (!containerA || !containerB) return;

  const placeholder = document.createElement("div"); //definimos un medio de cambio
  placeholder.hidden = true; //ocultar medio de cambio

  containerA.replaceWith(placeholder); //realizamos el intercambio
  containerB.replaceWith(containerA);
  placeholder.replaceWith(containerB);
};
