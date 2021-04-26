function verify(){
    var result = document.getElementById('result')
    var birthYear = document.getElementById('birth-year')
    var gender = document.querySelector("input[name='gender']:checked")

    var now = new Date()
    var age = now.getFullYear() - birthYear.value

    if(birthYear.value.length == 0 || birthYear.value > now.getFullYear()){
        alert("[ERRO!] Verifique os dados e tente novamente!")
    } else {
        var definition = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'photo')

        if(gender == male){
            if(age < 18){
                definition = 'Menino'
                img.setAttribute('src', 'img/menino.jpg')
            } else if(age >= 18 && age <= 25){
                definition = 'Jovem homem'
                img.setAttribute('src', 'img/moço.jpg')
            } else if(age > 25 && age < 60){
                definition = 'Homem'
                img.setAttribute('src', 'img/homem.jpg')
            } else{
                definition = 'Senhor'
                img.setAttribute('src', 'img/senhor.jpg')
            }
        } else {
            if(age < 18){
                definition = 'Menina'
                img.setAttribute('src', 'img/menina.jpg')
            } else if(age >= 18 && age <= 25){
                definition = 'Jovem mulher'
                img.setAttribute('src', 'img/moça.jpg')
            } else if(age > 25 && age < 60){
                definition = 'Mulher'
                img.setAttribute('src', 'img/mulher.jpg')
            } else{
                definition = 'Senhora'
                img.setAttribute('src', 'img/senhora.jpg')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${definition} com ${age} anos.`
        result.appendChild(img)
    }

    
}

