
let counter = document.querySelector("#counter").value;

let count = parseInt(counter);
    

const inc = () => {
    count += 1;

    counter = count;

    document.querySelector("#counter").value = counter;
}

const dec = () => {
    count -= 1;

    counter = count;

    document.querySelector("#counter").value = counter;
}
