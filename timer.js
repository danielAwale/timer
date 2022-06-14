
  let array = process.argv.slice(2).sort(function(a, b){return a-b});
  for (let i = 0; i < array.length; i++) {
    let milisecond = array[i] * 1000;
    if (isNaN(milisecond) || milisecond < 0) {
      process.stdout.write(`skip`);
    } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, milisecond)
    array[i]++
  }
  }




