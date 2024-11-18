document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const content = document.getElementById("postContent").value;
    if (content) {
        const post = document.createElement("div");
        post.textContent = content;
        document.getElementById("posts").prepend(post);
        document.getElementById("postContent").value = "";
    }
    const users = [
    { id: 1, username: "kullanici1" },
    { id: 2, username: "kullanici2" },
];

console.log("Üyeler:");
users.forEach(user => console.log(user));

});

// Giriş ve kayıt işlemleri (dummy).
document.getElementById("loginBtn").addEventListener("click", () => {
    alert("Giriş yapma özelliği ekleniyor!");
});

document.getElementById("signupBtn").addEventListener("click", () => {
    alert("Kayıt olma özelliği ekleniyor!");
});
