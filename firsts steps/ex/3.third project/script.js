function count(){
    var start = document.getElementById('txt_start')
    var end = document.getElementById('txt_end')
    var jump = document.getElementById('txt_jump')
    var result = document.getElementById('result')

    if (start.value.length == 0 || end.value.length == 0 || jump.value.length == 0){
        result.innerHTML = '<p>Impossible to count!</p>'
    } else if(jump.value == 0){
        window.alert('Consider the Jump 1')
        countLoop(Number(start.value),Number(end.value),Number(1),result) 
    } else {
        countLoop(Number(start.value),Number(end.value),Number(1),result) 
    }
    
}

function countLoop(start,end,jump,result) {
    
    result.innerHTML = '<p>Counting:</p>'
    
    if(start > end){
        for(var i=start; i >= end; i -= jump){
            result.innerHTML += `${i} 👉`
        }
    } else {
        for(var i=start; i <= end; i += jump){
            result.innerHTML += `${i} 👉`
        }
    }
    

    result.innerHTML += '🏴'
}