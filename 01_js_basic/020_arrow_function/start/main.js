function print(callback) {
  const result = fn(2);
  console.log(result);
}

function fn(number = 3) {
  return number * 2;
}
debugger;
print(fn);
