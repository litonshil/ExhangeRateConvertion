//selected by ID using DOM
var currFrom,currto,amountFrom,amountTo,perRate,btnSwap;

currFrom = document.getElementById('curr-from');
amountfrom = document.getElementById('amount-from');
currTo = document.getElementById('curr-to');
amountTo = document.getElementById('amount-to');
perRate = document.getElementById('rate');
btnSwap = document.getElementById('swap');

//Initialized state function
calculateConvertedCurrency();

//Swap button working function

function btnSwapWork(){
    var temp = currFrom.value;
	currFrom.value = currTo.value;
	currTo.value = temp;
	calculateConvertedCurrency();
}

//Converted currency calculation function using API
function calculateConvertedCurrency() {
	let fromCurr = currFrom.value;
	let toCurr = currTo.value;
	
	fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurr}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[toCurr];
        perRate.innerText = `1 ${fromCurr} = ${rate} ${toCurr}`;
        let ans=(amountfrom.value * rate);
		amountTo.value = ans.toFixed(2);
	})
}

//Action Work with change of dropdown and field

currFrom.addEventListener('change', calculateConvertedCurrency);
amountfrom.addEventListener('input', calculateConvertedCurrency);
currTo.addEventListener('change', calculateConvertedCurrency);
amountTo.addEventListener('input', calculateConvertedCurrency);
btnSwap.addEventListener('click', btnSwapWork);
