export const money = (n: number) =>
  n.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
