function puxarTitulo() {
    let div2 = document.getElementById("books").innerHTML = ""
    let xhr = new XMLHttpRequest();
    let title = document.getElementById('titulo').value
    let url = `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=15&key = AIzaSyCeE3SgQniQT0FMKvOitO5Q11SnjIJ8DiA`;

    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let dadosJSONText = xhr.responseText
            let obj = JSON.parse(dadosJSONText)
            let div = document.getElementById("books")
            

            for (i = 0; i < obj.items.length; i++) {
                
                div.innerHTML += "<section><div id='intern'>" + "<h2>" +obj.items[i].volumeInfo.title + "</h2>" + "<br>" + obj.items[i].volumeInfo.publishedDate + "<br>" + obj.items[i].volumeInfo.authors + "<br>" + "<br>"+  "<a href='" + obj.items[i].volumeInfo.previewLink + "'>" + "Mais informações" + "</a>" + "<br>" + "<img src='" + obj.items[i].volumeInfo.imageLinks.smallThumbnail + "'>" + "<br>" + "<p id='des'>" + obj.items[i].volumeInfo.description +"<p>"+"<br>"  +"</div></section>"

            }
        }
    }
    xhr.send()
}

function puxarAutor() {
    let div3 = document.getElementById("books").innerHTML = ""
    let xhr = new XMLHttpRequest();
    let title = document.getElementById('titulo').value
    let author = document.getElementById('autor').value
    let url = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&maxResults=15&key = AIzaSyCeE3SgQniQT0FMKvOitO5Q11SnjIJ8DiA`;

    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let dadosJSONText = xhr.responseText
            let obj = JSON.parse(dadosJSONText)
            let div = document.getElementById("books")
            

            for (i = 0; i < obj.items.length; i++) {
                
                div.innerHTML += "<section><div id='intern'>" + "<h2>" +obj.items[i].volumeInfo.title + "</h2>" + "<br>" + obj.items[i].volumeInfo.publishedDate + "<br>" + obj.items[i].volumeInfo.authors + "<br>" + "<br>"+  "<a href='" + obj.items[i].volumeInfo.previewLink + "'>" + "Mais informações" + "</a>" + "<br>" + "<img src='" + obj.items[i].volumeInfo.imageLinks.smallThumbnail + "'>" + "<br>" + "<p id='des'>" + obj.items[i].volumeInfo.description +"<p>"+"<br>"  +"</div></section>"

            }
        }
    }
    xhr.send()
}











