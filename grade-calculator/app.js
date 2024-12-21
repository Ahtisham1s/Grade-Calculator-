const form = document.getElementById('form')
const inputs = document.querySelectorAll('.input-group input')
const para = document.getElementById('para')
form.addEventListener('submit',onFormSubmit)

function onFormSubmit(e){
    e.preventDefault()
    const total_marks = 500;
    let accumulator = 0;
    inputs.forEach(function(input){
        accumulator = accumulator + Number(input.value)
    })
    let percentage = ((accumulator/total_marks) * 100)
    percentage.toFixed(2)
    para.textContent = `Yor Percentage is ${percentage}%`
}