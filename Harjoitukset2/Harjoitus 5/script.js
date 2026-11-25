const asetukset = { teema: null, fonttikoko: 0 };

console.log(asetukset.teema || "vaalea");

console.log(asetukset.fonttikoko || 12); // tulostaa 12 koska 0 on falsy

console.log(asetukset.teema ?? "vaalea");

console.log(asetukset.fonttikoko ?? 12); // tulostaa 0 koska ?? tarkistaa vain null ja undefined