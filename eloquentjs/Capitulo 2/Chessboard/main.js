let espacios = "";

for (let a = 0; a <= 7; a++) {
  for (let b = 0; b <= 7; b++) {
    if ((a + b) % 2 == 0)
      espacios += " ";
    else
      espacios += "#";
  }
  espacios += "\n";
}

console.log(espacios);