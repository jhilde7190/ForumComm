var number = 0;
var zeroCool = "";

while (number < 100) {
  number++;
  if ((number % 3 != 0) && (number % 5 != 0)) {
    console.log(number);
    continue;
  }
  zeroCool = "";
  zeroCool += (number % 3 == 0) ? "Zero" : "";
  zeroCool += (number % 5 == 0) ? "Cool" : "";
  console.log(zeroCool);
}
