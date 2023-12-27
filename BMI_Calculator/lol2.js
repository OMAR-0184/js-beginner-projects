const form = document.querySelector('form');

form.addEventListener('submit', function(e){
e.preventDefault;

const height = parseInt(document.querySelector('#Height').value);
const weight = parseInt(document.querySelector('#Weight').value);
const results = document.querySelector('#results');

if(height==='' || height<0 || isNaN(height))
{
results.innerHTML = 'Please put a valid Input';
}
if(weight==='' || weight<0 || isNaN(weight))
{
results.innerHTML = 'Please put a valid Input';
}

else{
const BMI = ((weight*10000)/(height*height)).toFixed(2);

results.innerHTML = `<span> ${BMI} </span>`
}


})