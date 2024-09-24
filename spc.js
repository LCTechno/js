// key.js - Definir las funciones necesarias
const spcModule = (function() {
  const expirationDate = new Date("2024-09-24T23:59:59");

  // Verificar expiración
  function checkExpiration() {
    const currentDate = new Date();
    if (currentDate > expirationDate) {
      throw new Error("Error Key Servidor origen. Fecha de expiración superada.");
    }
  }

  // Función para obtener atletas
  async function fetchAthletes(apiKey, centerId, resultDiv) {
    checkExpiration();  // Verifica si la fecha es válida

    let hasMorePages;
    let page = 1;
    const perPage = 100;
    const athletes = [];

    resultDiv.innerHTML =
