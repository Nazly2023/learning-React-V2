const active = true;

let message = "";
if (active) {
  message = "Active";
} else {
  message = "Inactive";
}

console.log(message);

// Condición ternaria
const msg = active ? "Active" : "Inactive";

// Condición ternaria solo con UNA condición
const msg1 = !active && "Active";

console.log(msg);
console.log(msg1);
