export function shuffle(array) {
  const arr = array.slice();
  let currentIndex = arr.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}

export function prettyName(name) {
  const arr = name.split(",");
  if (arr.length < 2) {
    return name;
  }
  const reversed = arr.reverse();
  return reversed.join(" ");
}
