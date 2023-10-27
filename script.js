let body = document.querySelector("body")
let modalButton = document.createElement("button")
let modal = document.querySelector("#modal")
let searchButton = document.getElementById("searchButton")
let table = document.querySelector("table")

modalButton.classList = ("modalButton")
modalButton.textContent = "Add"
modal.classList.add('modal1')

modalButton.addEventListener("click", function () {
    // document.querySelector("#modal").style.display = "block"
    modal.classList.toggle('active')
})
searchButton.addEventListener("click", function (e) {
    e.preventDefault()

    let newRow = document.createElement("tr")
    let movie = document.createElement('img')
    let fname = document.createElement("td")
    let imdb = document.createElement("td")
    let cat = document.createElement("td")
    let rej = document.createElement("td")
    let editButtonTd = document.createElement("td")
    let deleteButtonTd = document.createElement("td")
    let editButton = document.createElement("button")
    let deleteButton = document.createElement("button")


    movie.classList.add("movieimg")

    let movieimg = document.getElementById("filmimg").value
    let filmAdi = document.getElementById("filmadi").value
    let filmIMDB = document.getElementById("filmimdb").value
    let category = document.querySelector("#category").value
    let rejissor = document.getElementById("rejissor").value

    movie.src = movieimg
    fname.textContent = filmAdi
    imdb.textContent = filmIMDB
    cat.textContent = category
    rej.textContent = rejissor
    editButton.textContent = "Edit"
    deleteButton.textContent = "X"

    editButton.addEventListener("click", function () {
        document.getElementById("filmimg").value = movie.src
        document.getElementById("filmadi").value = fname.textContent
        document.getElementById("filmimdb").value = imdb.textContent
        document.querySelector("#category").value = cat.textContent
        document.getElementById("rejissor").value = rej.textContent
        searchButton.textContent = "Edit"
            searchButton.addEventListener("click",function(){
                searchButton.textContent = "Search"
                newRow.remove()
            })

    })
    deleteButton.addEventListener("click", function () {
        const row = deleteButton.closest("tr");
        row.remove()
    })

    table.append(newRow)
    newRow.append(movie)
    newRow.append(fname)
    newRow.append(imdb)
    newRow.append(cat)
    newRow.append(rej)
    newRow.append(editButtonTd)
    newRow.append(deleteButtonTd)
    editButtonTd.append(editButton)
    deleteButtonTd.append(deleteButton)
})



body.append(modalButton)