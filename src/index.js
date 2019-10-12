module.exports = function zeros(expression) {
  let nums = expression.split('*');
  let Twos = 0;
  let Fives = 0;
  for (let i = 0; i < nums.length; i++) {
    let number;
    let factCount = 0;
    if (nums[i].slice(-2, -1) != '!') {
      number = nums[i].slice(0, -1);
      factCount++;
    }
    if (nums[i].slice(-2) == '!!') {
      number = nums[i].slice(0, -2);
      factCount += 2;
    }
    while (number > 0) {
      let n = number;
      while (n % 5 == 0) {
        n /= 5;
        Fives++;
      }
      n = number;
      while (n % 2 == 0) {
        n /= 2;
        Twos++;
      }
      number = number - factCount;
    }
  }

  return (Twos < Fives) ? Twos : Fives;
}