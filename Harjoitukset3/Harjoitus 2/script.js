const tuotteet = [
  { nimi: "Kahvi", hinta: 3.5, kategoria: "juomat" },
  { nimi: "Tee", hinta: 2.9, kategoria: "juomat" },
  { nimi: "Pulla", hinta: 2.5, kategoria: "leivonnaiset" },
  { nimi: "Croissant", hinta: 3.2, kategoria: "leivonnaiset" },
  
 { nimi: "Voikroisantti", hinta: 0.99, kategoria: "leivonnaiset" },
 { nimi: "Maito", hinta: 4.49, kategoria: "juomat" },
 { nimi: "Leipä", hinta: 2.99, kategoria: "leivonnaiset" },
 { nimi: "Lihapasteija", hinta: 6.99, kategoria: "leivonnaiset" }, 
];

function edullisemmat(raja) {
    return tuotteet.filter((tuote) => tuote.hinta < raja);
}

console.table(edullisemmat(4));