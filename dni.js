console.log("Pobawmy się w zgadywanie dni tygodnia!");
const ask = require("readline-sync");

const week = [
    "poniedzialek",
    "wtorek",
    "sroda",
    "czwartek",
    "piatek",
    "sobota",
    "niedziela"
];
var gramy = true;
while (gramy) {
    var nazwaDnia = ask.question("Jaki dzien tygodnia mam na mysli? ").trim();
    const wylosowanyNumerDnia = Math.floor(Math.random() * week.length);
    var numerDniaUsera = week.indexOf(nazwaDnia);

    while (numerDniaUsera != wylosowanyNumerDnia) {
        if (numerDniaUsera == -1) {
            if (nazwaDnia == "")
                console.log("Nie znasz nazw dni tygodni? zapraszamy do podstawówki! Nie wpisałeś nic...");
            else
                console.log("Nie znasz nazw dni tygodni? zapraszamy do podstawówki! Wpisałeś \"" + nazwaDnia + "\"!");
        } else if (wylosowanyNumerDnia > numerDniaUsera)
            console.log("Później");
        else if (wylosowanyNumerDnia < numerDniaUsera)
            console.log("wcześniej")
        nazwaDnia = ask.question("Jaki dzien tygodnia mam na mysli? ").trim();
        numerDniaUsera = week.indexOf(nazwaDnia);

    }
    if (nazwaDnia == week[wylosowanyNumerDnia])
        console.log("Udało Ci sie");
    var odpowiedz = ask.question("Chcesz grac dalej? <tak, nie>: ").trim().toLowerCase();
    while (odpowiedz != "tak" && odpowiedz != "nie") {
        console.log("Tylko TAK lub NIE!");
        odpowiedz = ask.question("Chcesz grac dalej? <tak, nie>: ").trim().toLowerCase();
    }
    if (odpowiedz == "nie")
        gramy = false
}