var radio = document.querySelector('.bt_manual');
var contador = 0;

    document.getElementById('slide0').checked = true

    // Intervalo de Passagens entre as imagens

    setInterval(() => {
        proximaImg()
    }, 3000)

    function proximaImg() {
        contador++

        if (contador > 4){
            contador = 0;
        }

    document.getElementById('slide'+contador).checked = true
    }