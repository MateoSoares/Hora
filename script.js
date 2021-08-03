function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var com = document.getElementById('compri')
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanhajs.jpg'
        com.innerText = 'Bom Dia!'
        document.body.style.backgroundColor = 'rgb(226, 71, 71)'
    } else if (hora >= 12 && hora <18) {
        img.src = 'fototardejs.jpg'
        com.innerText = 'Boa Tarde!'
        document.body.style.backgroundColor = 'rgb(177, 27, 27)'
    } else {
        img.src = 'fotonoitejs.jpg'
        com.innerText = 'Boa Noite!'
        document.body.style.backgroundColor = 'rgb(134, 19, 19)'
    }
}
