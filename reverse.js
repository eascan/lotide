for (let i = 2; i < process.argv.length; i++) {

  if (typeof process.argv[i] === "string") {
    let word = "";
    for (let j = process.argv[i].length - 1; j >= 0; j--) {
      word += process.argv[i][j];
    }
    console.log(word);
  } else {
    console.log(process.argv[i]);
  }
}









