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
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Kayıt olundu:", { firstName, lastName, email });
    alert("Kayıt başarılı! Giriş yapabilirsiniz.");
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    console.log("Giriş yapıldı:", { email });
    alert("Giriş başarılı! Profilinize yönlendiriliyorsunuz.");
});
