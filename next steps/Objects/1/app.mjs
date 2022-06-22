import changer from "./changer.mjs";

var ingredients = ["water", "honey", "salt", "mustard"];

let capt = changer.capitalize(ingredients);
let od = changer.order(capt);

console.log(capt);
console.log(od);