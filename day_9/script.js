const form = document.querySelector('#bookmark')
let title = document.querySelector('#title')
let url = document.querySelector('#url')

form.addEventListener("submit", function (evt){
    evt.preventDefault()
    let titleval = title.value;
    let urlval = title.value;

    if(urlval.startsWith('http')){
        console.log("validurl")
        localStorage.setItem("bookmark")
    }else{
        console.error("not a valid url")
    }
})

