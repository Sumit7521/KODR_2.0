const form = document.querySelector('#bookmark');
let title = document.querySelector('#title');
let url = document.querySelector('#url');

// Fetch bookmarks from localStorage (or empty array if none)
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// Handle form submit
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let titleval = title.value;
    let urlval = url.value;

    if (urlval.startsWith('http')) {
        let newBookmark = {
            title: titleval,
            url: urlval
        };

        bookmarks.push(newBookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        renderBookmarks(); // render updated list
        form.reset(); // clear inputs
    } else {
        console.error("not a valid url");
    }
});

// Function to render bookmarks
function renderBookmarks() {
    const list = document.getElementById("list");
    list.innerHTML = ""; // clear previous list

    list.style=

    bookmarks.forEach(bookmark => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = bookmark.url;
        a.textContent = bookmark.title;
        a.target = "_blank";
        li.appendChild(a);
        list.appendChild(li);
    });
}

// Initial render
renderBookmarks();
