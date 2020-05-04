let counter = document.querySelector("#counter").value; //counter showing in the browser
let limit = 0;  //INITIALIZING LIMIT VALUE
let minLimit = 0;   //FOR NEGETIVE VALUE CONVERSION
let count = parseInt(counter);  //converting from string to number/integer
//FUNCTION FOR SETTING UPA A MAXIMUM AND A MINIMUM VALUE    
const limited = () => {
    let lim = document.querySelector("#limit").value;

    limit = parseInt(lim);

    minLimit = -(limit); // FOR NEGETIVE NUMBER

    return limit;
}
//FUNCTION FOR COUNTING UP/ INCREAMENT
const inc = () => {
    // LOGIC TO DETERMINE MAXIMUM AND MINIMUM VALUE AND THEN COUNTING UP
    if(limit !== 0 ){
        if((limit <= count) && (minLimit <= count) ){
            alert("YOU HAVE REACHED THE LIMIT !!!"); // alert() FUNCTION TO ALERT THAT YOU HAVE REACHED THE MAXIMUM OR MINIMUM VALUE/LIMIT
        }
        else{
            // COUNTING UP LOGIC
            count += 1;            
            counter = count;
            //PASSING THE NEW VALUE TO THE DOM
            document.querySelector("#counter").value = counter;
        }
    }
    else{
    count += 1;
    counter = count;
    document.querySelector("#counter").value = counter;
    };
}
//FUNCTION FOR COUNTING DOWN/ DECREAMENT
const dec = () => {
    if(limit !== 0 ){
        if((limit >= count) && (minLimit >= count) ){
                alert("YOU HAVE REACHED THE LIMIT !!!");
        }
        else{
            // COUNTING DOWN LOGIC
            count -= 1;
            counter = count;
            //PASSING THE NEW VALUE TO THE DOM
            document.querySelector("#counter").value = counter;
        }
    }
    else{
    count -= 1;
    counter = count;
    document.querySelector("#counter").value = counter;
    };
}
//END

