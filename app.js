let api = fetch('https://api.frankfurter.dev/v1/latest')
    .then((res) => res.json())   // convert response to JSON
    .then((data) => {
        dropdown(data.rates);      // pass only rates object
    });

function dropdown(data) {
    let currency = Object.entries(data);
    console.log(currency);
    // for(let i=0;i<=currency.length;i++){
    //     currency +=`<option value="${currency[i][0]}">${currency[i][0]}</option>`;
    // }
}