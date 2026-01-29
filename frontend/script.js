// GET request to backend
fetch("http://localhost:5000/api/message")
    .then(res => res.json())
    .then(data => {
        document.getElementById("backendMsg").innerText = data.message;
    });

// POST request to backend
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Data sent successfully");
        console.log(data);
    });
});
