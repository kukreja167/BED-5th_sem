// function getCommentdata(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")
//     .then((response) => {
//         console.log(response.data);
//     }).catch((error) => {
//         console.error("Error fetching comment data:", error);
//     });
// }
// getCommentdata();
// async function getCommentdata() {
//     try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
//         console.log(response.data);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// getCommentdata();
function adduser(email,password){
    axios.post("http://localhost:3121/user", {
        email: email,
        password: password
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error( error.message);
    });

}
adduser("k@gmail.com","23kavya");