const form = document.querySelector('form')


form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const results = document.querySelector('.restuls')

    console.log(`submited ${height}, ${weight}`)
    results.innerHTML=`${height}`

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML=`${height} is not valid! Please enter a valid height`
    }else if(weight==='' || weight < 0 || isNaN(weight)){
        results.innerHTML=`${weight} is not valid! Please enter valid weight`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the results
        results.innerHTML=`${bmi}`
    }





})

