const number = 1;

let newProm = (val) => {
    return new Promise((resolve, reject) => {
    if (val > 10) {
        resolve(val);
    } else {
        reject("number too low");
        /* reject(new Error ("Number too low!")); */
    }
})}

newProm(number)
    .then((val) => console.log(val))
    .catch((err) => console.error(err))

    setTimeout((() => console.log("I'm still running.")),1000);