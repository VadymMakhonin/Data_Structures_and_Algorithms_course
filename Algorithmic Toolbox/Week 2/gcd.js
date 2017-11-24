let readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    let a = parseInt(line.toString().split(' ')[0], 10);
    let b = parseInt(line.toString().split(' ')[1], 10);
    console.log(gcd(a, b));
    process.exit();
  }
}

function gcd(a, b) {
    if (b === 0) return a;
    else {
        return gcd(b, a % b);
    }
}