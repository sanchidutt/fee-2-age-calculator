function getDOB() {
    let data = document.getElementById("inputDob").value;

    // Convert input data to usable format
    let dob = new Date(data);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    // Getting current date and calculating the difference
    let now = new Date(document.getElementById("cdate").value);
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;

    // Calculating the Age
    if (yearDiff < 0) {
        showAlert("Invalid date", "bg-red-100", "text-red-700"); // Show error message with red background
    } else {
        if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
            yearDiff--;
            monthDiff += 12;
        }
        if (dateDiff < 0) {
            monthDiff--;
            let tempDate = new Date(now.getFullYear(), now.getMonth(), 0);
            dateDiff += tempDate.getDate();
        }

        // Format the age message
        let ageMessage = "Your current age is ";
        if (yearDiff > 0) {
            ageMessage += yearDiff + " years ";
        }
        if (monthDiff > 0) {
            ageMessage += monthDiff + " months ";
        }
        if (dateDiff > 0) {
            ageMessage += dateDiff + " days";
        }
        showAlert(ageMessage, "bg-green-100", "text-green-700"); // Show success message with green background
    }
}

function showAlert(message, bgClass, textClass) {
    let customAlert = document.getElementById("customAlert");
    let messageElement = document.getElementById("ageMessage");

    messageElement.textContent = message;
    customAlert.classList.remove("hidden");
    customAlert.classList.add(bgClass, textClass, "animate-slideInUp"); // Add slide-in animation
}

function closeAlert() {
    let customAlert = document.getElementById("customAlert");
    customAlert.classList.add("hidden");
    customAlert.classList.remove("bg-red-100", "bg-green-100", "text-red-700", "text-green-700", "animate-slideInUp");
}


