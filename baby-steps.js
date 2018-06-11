function sum () {
    let res = 0;
    for (i=2; i<process.argv.length; i++) {
        res += Number(process.argv[i]);
    }
     return res;
}

console.log(sum());