const arvosana = (pisteet) => {
    if (pisteet < 50) {
        return 0;
    } else if (pisteet < 60) {
        return 1;
    } else if (pisteet < 70) {
        return 2;
    } else if (pisteet < 80) {
        return 3;
    } else if (pisteet < 90) {
        return 4;
    } else {
        return 5;
    }
    console.log("Arvosana: " + arvosana(pisteet));
};

console.log(arvosana(35)); 
console.log(arvosana(75)); 
