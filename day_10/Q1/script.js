const bookmark = document.querySelector('#bookmark');
const title = document.querySelector('#title');
const url = document.querySelector('#url');
const list = document.querySelector('#list');

function renderBookmarks() {
    list.innerHTML = ""; 

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    bookmarks.forEach(bookmark => {
        const a = document.createElement('a');
        a.href = bookmark.url;
        a.textContent = bookmark.title;
        a.target = "_blank";

        const li = document.createElement('li');
        li.appendChild(a);

        list.appendChild(li);
    });
}

bookmark.addEventListener("submit", function (e) {
    e.preventDefault();

    let newtitle = title.value.trim();
    let newurl = url.value.trim();

    if (!newurl.startsWith("http")) {
        console.error("Not a valid URL");
        return;
    }

    const newBookmark = { title: newtitle, url: newurl };

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(newBookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    title.value = "";
    url.value = "";

    renderBookmarks();
});

renderBookmarks(); 
