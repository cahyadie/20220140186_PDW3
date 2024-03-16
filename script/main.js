//  date element
const dateContainer = document.getElementById('dateContainer');

// Function untuk format date "Month Day, Year"
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Update date
function updateDate() {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    dateContainer.textContent = formattedDate;
}

updateDate();
 
function submit() {
    Swal.fire({
        title: "Login berhasil",
        icon: "success"
    })
}