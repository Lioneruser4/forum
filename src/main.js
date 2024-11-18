document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const content = document.getElementById("postContent").value;
    if (content) {
        const post = document.createElement("div");
        post.textContent = content;
        document.getElementById("posts").prepend(post);
        document.getElementById("postContent").value = "";
    }
});

// Giriş ve kayıt işlemleri (dummy).
document.getElementById("loginBtn").addEventListener("click", () => {
    alert("Giriş yapma özelliği ekleniyor!");
});

document.getElementById("signupBtn").addEventListener("click", () => {
    alert("Kayıt olma özelliği ekleniyor!");
});
