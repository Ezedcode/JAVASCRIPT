let num = document.getElementById('f_number')
let list = document.getElementById('f_list')
let result = document.getElementById('result')
let values = []

function isNumber(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false 
    }
}

function inList(n, values) {
    if(values.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `value ${num.value} add`
        list.appendChild(item)
    } else {
        window.alert('Invalid value or already exist on the list.')
    }
    num.value = ''
    num.focus()
}


function finish() {
    if(values.length == 0) {
        window.alert('Add values before to finish')
    } else {
        let tot =  values.length
        let bigger = values[0]
        let smaller = values[0]
        let sum = 0
        
        for(let i in values) {
            sum += values[i]
            if(values[i] > bigger)
                bigger = values[i]
            if(values[i] < smaller)
                smaller = values[i]
        }
        result.innerHTML = ''

        result.innerHTML += `<p>At all, we have ${tot} in the list</p>`
        result.innerHTML += `<p>the Bigger value informed was ${bigger}.</p>`
        result.innerHTML += `<p>the Smaller value informed was ${smaller}.</p>`
        result.innerHTML += `<p>Adding all the values, we have ${sum}.</p>`
        result.innerHTML += `<p>to doing the media, we have  ${sum/tot}.</p>`
        
    }
}