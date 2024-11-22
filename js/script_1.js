let rows = Number(prompt('Escriba cuantas filas quiere.'))
    let columns = Number(prompt('Escriba cuantas columnas quiere.'))

    let countdown = rows * columns
    let countdownRows = rows
    let countdownColumns = columns

    var table = document.createElement("TABLE")
    table.setAttribute("id", "myTable")
    var row = document.createElement("TR")
    row.setAttribute("id", "myRow")
    var cell = document.createElement("TD")
    var data = document.createTextNode(countdown)
    
    document.body.appendChild(table)
    while (rows != 0) {  
        document.getElementById("myTable").appendChild(row)
        while (countdownColumns != 0) {
        cell.appendChild(data)
        document.getElementById("myRow").appendChild(cell)
        countdownColumns = countdownColumns - 1
        }
        countdownColumns = columns
        rows = rows - 1
    }