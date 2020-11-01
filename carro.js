function getCarro() {
    fetch("https://apitestes.herokuapp.com/api/v1/carro")
        .then((resp) => resp.json()) 
        .then(function (data) {
            console.log(data)
            document.getElementById("marca").innerText = data.marca 
            document.getElementById("modelo").innerText = data.modelo 
            document.getElementById("ano").innerText = data.ano 
            document.getElementById("ptotal").innerText = data.ptotal 
            document.getElementById("pdetalhada").innerText = data.pdetalhada 
            document.getElementById("valor").innerText = data.valor
        })
}

getCarro()