function loading() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('photo')
    var date = new Date()
    var hour = date.getHours()

    msg.innerHTML = `<strong>Now it's ${hour} hours.</strong>`

    if (hour >= 0 && hour < 12) {
        img.src = 'images/1.png'
        document.body.style.background = '#fda22a'
    } else if (hour >= 12 && hour < 18){
        img.src = 'images/2.png'
        document.body.style.background = '#d88056'
    } else {
        img.src = 'images/3.png'
        document.body.style.background = '#37118c'
    }
}