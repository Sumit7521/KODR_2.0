const form = document.querySelector("#bookmark")
const title = document.querySelector('#title')
const url = document.querySelector("#url")
const list = document.querySelector('#list')


let bookmarks 

if(localStorage.getItem("bookmarks")){
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    
    console.log(bookmarks)
}else{
    bookmarks =[]
}

form.addEventListener('submit',function(e){
    e.preventDefault()

    let newtitle = title.value
    let newurl = url.value

    if(newurl.startsWith('http')){
        console.log("valid url")
        let newbookmark = {title:newtitle , url:newurl}
        bookmarks.push(newbookmark)

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
        renderbookmark()
    }else{
        console.error('invalid url')
    }
    title.value =""
    url.value =""
})

const renderbookmark = ()=>{
    list.innerHTML= ''

    bookmarks.forEach(bookmark => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = bookmark.title
        a.href= bookmark.url
        a.target = "_blank"
        list.appendChild(li)
        li.appendChild(a)
    });
}