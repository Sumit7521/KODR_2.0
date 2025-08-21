var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : "public_Rf2iIF5BLzN59n6Qz7Y0pcRlvSs=",
    privateKey : "private_hFwQ3c4THIPTEgZMvYHiwnQm2+k=",
    urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/"
})

async function uploadFile(file , fileName){
    const result = await imagekit.upload({
        file,
        fileName
    })
    return result
}

module.exports = uploadFile