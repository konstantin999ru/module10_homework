
let myMap = new Map([
    ["name", "Konstantin"],
    ["age", 25],
    ["city", "Moscow"]
]);

myMap.forEach((value, key) => {
    console.log(`Ключ — ${key}, значение — ${value}`);
});