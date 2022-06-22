function display() {
  var str = document.querySelector('input#txt_str');
  var result = document.querySelector('div#result');

  result.style.fontFamily = 'Courgette'

  if (str.value == " ") {

        result.innerHTML = "Enter the String!<br>"

  } else {
        var count = 0
       
        for (let i=0; i < str.value.length; i++){
            if(str.value.charAt(Number(i)) == " "){
                count++
            }
        }

        result.innerHTML += `a) The string has ${Number(str.value.length) - (count)} characters.`

        result.innerHTML += `<br>b) The string  with all latter in UpperCase <strong>${str.value.toUpperCase()}</strong>.`
    
        result.innerHTML += `<br>c) Has ${vowels(str.value)} vowels.`
    
        result.innerHTML += `<br>d) ${start_with(str.value)}.`
  
  }
  
  
  str.value = ' '
  str.focus()
}


function vowels(str) {
    let count=0
    let temp = "aeiou"

    for(let i=0;  i < str.length; i++){
        for(let j=0;  j < temp.length; j++){
            if(str.charAt(i) == temp.charAt(j))
                count++;
        }
    }

    return count;
}


function start_with(str) {
    if("isp" == str.substring(0,3)){
        return "Start with ISP"
    } else if("ior" === str.substring(0,3).toLowerCase()) {
        return "Start with IOR"
    } else {
        return "No starts neither ISP or IOR "
    }
}

function cleanDisplay(){
    var result = document.querySelector("div#result");

    result.innerHTML = ''
}