//N.B: requires a local server


fetch ('./data.json')    //no semi-colon

// OR:
// var myInit = {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json'},
//     mode: 'cors',
//     cache: 'default'
    
// };
// let myRequest  = new Request('./data.json', myInit);  //allows to add an init object as second parameter defining the request(method,headers,mode,cache)
// fetch(myRequest)

.then(function (response) {                   //handles the promise returned
        return response.json();                //converts the text to json file
})


.then(function (data) {            //handles json data
    let current = document.querySelector('.current');
   let previous = document.getElementsByClassName('previous');
    document.getElementById('daily').addEventListener('click', () => {
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
            
        // }
        const currentData = data[0].timeframes.daily.current;
        const previousData = data[0].timeframes.daily.previous;
        current.innerHTML = currentData + "hrs";
        previous.innerHTML = "Last week - " + previousData +"hrs";
        console.log(88);
        
    })


    document.getElementById('weekly').addEventListener('click', function weekly(params) {
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
            
        // }
        const currentData = data[0].timeframes.weekly.current;
        const previousData = data[0].timeframes.weekly.previous;
        current.innerHTML = currentData + "hrs";
        previous.innerHTML = "Last week - " + previousData +"hrs";
        console.log(88);
        
    })


    document.getElementById('monthly').addEventListener('click', function monthly(params) {
        // for (let i = 0; index < array.length; index++) {
        //     const element = array[index];
            
        // }
        const currentData = data[0].timeframes.monthly.current;
        const previousData = data[0].timeframes.monthly.previous;
        current.innerHTML = currentData + "hrs";
        previous.innerHTML = "Last week - " + previousData +"hrs";
        console.log(88);
        
    })

 
})