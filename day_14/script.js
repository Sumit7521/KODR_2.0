const limit = 6
const skip = 0

axios.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
.then(res=>{
    const user =res.data.users
    const container = document.getElementById("cardContainer");
    res.data.users.forEach((user)=>{


    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-lg p-6 text-center transition hover:shadow-xl";

    const avatar = document.createElement("img");
    avatar.src = user.image;
    avatar.alt = user.firstName;
    avatar.className = "w-24 h-24 rounded-full mx-auto object-cover mb-4";

    const name = document.createElement("h2");
    name.textContent = `${user.firstName} ${user.lastName}`;
    name.className = "text-xl font-semibold text-gray-800";

    const email = document.createElement("p");
    email.textContent = user.email;
    email.className = "text-sm text-gray-500 mt-1";
        
    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(email);

    document.getElementById("cardContainer").appendChild(card);
    })
})

// const user = {
//       firstName: "Sumit",
//       lastName: "Mishra",
//       email: "sumit@example.com",
//       image: "https://randomuser.me/api/portraits/men/32.jpg"
//     };

    

    // Append elements
    