function verify(){
    var date = new Date()
    var year = date.getFullYear()
    var f_year = document.getElementById('txt_year')
    var result = document.querySelector('div#result')

    if (f_year.value.length == 0 || f_year.value > year) {
        window.alert('[Error] Verify the data and try again')
    } else {
        var f_gen = document.getElementsByName('rad_gen')
        var age = year - Number(f_year.value)
        var gender = ''
        var img = document.createElement('img')
        var content = document.getElementById('content')
        img.setAttribute('id', 'photo')

        if(f_gen[0].checked) {
            gender = 'Man'
            content.style.background = 'rgb(249, 182, 88)'
            content.style.color = 'black'
            img.style.padding = '30px'

            if (age >= 0 && age <= 10 ) {
                img.setAttribute('src', 'image/1.png')
            } else if(age < 21) {
                img.setAttribute('src', 'image/2.png')
            } else if(age < 50) {
                img.setAttribute('src', 'image/3.png')
            } else {
                img.setAttribute('src', 'image/4.png')
            }
        } else if(f_gen[1].checked) {
            gender = 'Woman'
            content.style.background = 'rgb(51, 4, 87)'
            content.style.color = 'white'
            img.style.padding = '20px'

            if (age >= 0 && age <= 10 ) {
                img.setAttribute('src', 'image/1f.png')
            } else if(age < 21) {
                img.setAttribute('src', 'image/2f.png')
            } else if(age < 50) {
                img.setAttribute('src', 'image/3f.png')
            } else {
                img.setAttribute('src', 'image/4f.png')
            }

        } 
         
        result.style.textAlign = 'center'
        result.innerHTML = `We detect ${gender} with ${age} years old`
        result.appendChild(img)
    }
}