document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let student = {
        name: document.getElementById("name").value,
        regno: document.getElementById("regno").value,
        email: document.getElementById("email").value,
        dept: document.getElementById("dept").value,
        sem: document.getElementById("sem").value
    };

    let allStudents = JSON.parse(localStorage.getItem("daa_students")) || [];
    allStudents.push(student);
    localStorage.setItem("daa_students", JSON.stringify(allStudents));

    document.getElementById("message").classList.remove("hidden");
    document.getElementById("regForm").reset();
});
