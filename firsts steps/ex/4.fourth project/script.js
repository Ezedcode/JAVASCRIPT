function creatTable(){
    var number = document.getElementById('txt_Number')
    var tab = document.getElementById('table')

    if(number.value.length == 0){
        window.alert('Pleas enter a number!')
    } else {
        let i = 0
        tab.innerHTML = ''
        while(i <= 11){
            i++
            let result = document.createElement('option')
            result.text = `${number.value} x ${i} = ${i*Number(number.value)}`
            result.value = `tab${i}`
            tab.appendChild(result)
        }
    }
}
