const form = document.querySelector("form")
form.addEventListener('submit', (e) => {
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter valid height ${height}`}
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please enter valid weight ${weight}`

    }else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2)
       results.innerHTML = `BMI is ${bmi}`;
   
       if (bmi < 18.6) {
       
        results.innerHTML = `under weigth = your bmi ${bmi} less than 18.6`
       }else if(bmi >= 18.6 || bmi <= 24.6 ){
         results.innerHTML = `normal weight = your bmi ${bmi} normal weight 18.6 to 24.6`
       }
       if(bmi > 24){
       results.innerHTML = `your are over weight you bmi is ${bmi}`
       };
    }
        
    
})