const form = document.querySelector('#form')
const title = document.querySelector('#title')
const url = document.querySelector('#url')
const list = document.querySelector('#list')

let bookmarks 

if(localStorage.getItem("bookmarks")){
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    
    console.log(bookmarks)
}else{
    bookmarks =[]
}

form.addEventListener('submit', function(e) {

    e.preventDefault()

    const newtitle = title.value
    const newurl = url.value

    if (newurl.startsWith('http')) {
        console.log('valid url')
        let newbookmark = {title:newtitle , url:newurl}
        bookmarks.push(newbookmark)

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
        renderbookmark()
    } else {
        console.log('invalid')
    }
    title.value =""
    url.value =""
})

const renderbookmark = () =>{
    
    bookmarks.forEach(bookmark => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = bookmark.title
        a.href = bookmark.url
        a.target ='_blank'
        list.appendChild(li)
        li.appendChild(a)
    });
}