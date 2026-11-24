const tervehdi = (nimi, kieli) => {
    if (kieli == "fi") {
        return "Hei " + nimi + "!";
    } else if (kieli == "en") {
        return "Hello " + nimi + "!";
    } else if (kieli == "sv") {
        return "Hej " + nimi + "!";
    }
};

console.log(tervehdi("Toni", "fi"));
console.log(tervehdi("Pekka", "en"));