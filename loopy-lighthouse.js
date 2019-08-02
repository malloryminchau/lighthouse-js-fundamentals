for (var num = 100; num <= 200; num = num + 1) {
  if (((num % 3) === 0) && ((num % 4) !== 0)){
    console.log("Loopy");
  }else if (((num % 4) === 0) && ((num % 3) !== 0)) {
    console.log("Lighthouse");
  }else if (((num % 3) === 0) && ((num % 4) === 0)) {
    console.log("LoopyLighthouse");
  }else {
    console.log(num);
  }
}