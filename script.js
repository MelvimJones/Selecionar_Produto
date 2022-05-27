let total = 0

function adcionar() {
    let add = document.getElementById("fruta").value
    switch (add) {
        case "banana":
            total += 5,50
            alert("Voce adicionou a Banana - Total:  " + total)
            break;
        case "laranja":
            total += 8
            alert("Voce adicionou a laranja - Total:  " + total)
            break;
        case "limao":
            total += 7
            alert("Voce adicionou a limao - Total:  " + total)
            break;
        case "goiaba":
            total += 9
            alert("Voce adicionou a goiaba - Total:  " + total)
            break;


        default:
            alert("Selecione uma fruta")
            break;
    }
}


function finalizar() {
    alert("Total da compra é : " + total)
    total=0
}