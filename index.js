//-------- (1) --------

const $boxColor = document.getElementById("botonColor")
$boxColor.addEventListener("click", cambiarColor)

function cambiarColor() {
    const $caja = document.getElementById("cajaColor")
    if ($caja.classList.contains("bg-[gray]")) {
        $caja.classList.replace("bg-[gray]", "bg-[blue]")
        $caja.innerText = "Blue"
    } else if ($caja.classList.contains("bg-[blue]")) {
        $caja.classList.replace("bg-[blue]", "bg-[red]")
        $caja.innerText = "Red"
    } else {
        $caja.classList.replace("bg-[red]", "bg-[gray]")
        $caja.innerText = "Gray"
    }
}

//-------- (2) --------

const $boxTexto = document.getElementById("cajaTexto")

$boxTexto.addEventListener("input", ingresoTexto)

const $boxImpresion = document.getElementById("impresionTexto")
$boxImpresion.classList.add("whitespace-pre-wrap")

function ingresoTexto(evento) {
    $boxImpresion.innerText += evento.data
}

$botonBorrar = document.getElementById("borrarTexto")

$botonBorrar.addEventListener("click", borrarTexto)

function borrarTexto(evento) {
    evento.preventDefault()
    $boxImpresion.innerText = ""
    document.getElementById("formularioTexto").reset()
}

//-------- (3) --------

$boxEstatura = document.getElementById("cajaEstatura")
$boxPeso = document.getElementById("cajaPeso")
$boxResultado = document.getElementById("cajaResultado")

$botonCalculate = document.getElementById("calculate")

$botonCalculate.addEventListener("click", calcularIMC)

function calcularIMC(e) {
    e.preventDefault()
    $boxResultado.innerText = ($boxPeso.value / ((($boxEstatura.value/10)/10)**2)).toFixed(2)
}

//-------- (4) --------

$monedaLocal1 = document.getElementById("monedaLocal1")
$monedaDolar1 = document.getElementById("monedaDolar1")
$monedaLocal2 = document.getElementById("monedaLocal2")
$monedaDolar2 = document.getElementById("monedaDolar2")

$botonConvert1 = document.getElementById("botonConvert1")
$botonDelete1 = document.getElementById("botonDelete1")
$botonConvert2 = document.getElementById("botonConvert2")
$botonDelete2 = document.getElementById("botonDelete2")

$botonConvert1.addEventListener("click", convertLocalDolar)
$botonDelete1.addEventListener("click", deleteLocalDolar)

function convertLocalDolar(e) {
    e.preventDefault()
    if ($monedaLocal1.value.toString().includes(".") || $monedaLocal1.value.toString().includes(",")) {
        alert("ERROR - NO INGRESE PUNTOS NI COMAS")
        document.getElementById("localDolar").reset()
        $monedaDolar1.innerText = "0"
    } else {
        $monedaDolar1.innerText = ($monedaLocal1.value / 500).toLocaleString( 'en-US', { style:'currency', currency:'USD' } )
    }
}

function deleteLocalDolar(e) {
    e.preventDefault()
    document.getElementById("localDolar").reset()
    $monedaDolar1.innerText = "0"
}

$botonConvert2.addEventListener("click", convertDolarLocal)
$botonDelete2.addEventListener("click", deleteDolarLocal)

function convertDolarLocal(e) {
    e.preventDefault()
    if ($monedaDolar2.value.toString().includes(".") || $monedaDolar2.value.toString().includes(",")) {
        alert("ERROR - NO INGRESE PUNTOS NI COMAS")
        document.getElementById("dolarLocal").reset()
        $monedaLocal2.innerText = "0"
    } else {
        $monedaLocal2.innerText = ($monedaDolar2.value * 500).toLocaleString( 'en-US', { style:'currency', currency:'USD' } )
    }
}

function deleteDolarLocal(e) {
    e.preventDefault()
    document.getElementById("dolarLocal").reset()
    $monedaLocal2.innerText = "0"
}

//-------- (fin) --------
