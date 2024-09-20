function sendMail() {
    // Access input values correctly
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var companyInput = document.getElementById("company");
    var phoneInput = document.getElementById("phone");
    var messageInput = document.getElementById("message");

    // Check if any of the input fields are empty
    if (!nameInput.value || !emailInput.value || !companyInput.value || !phoneInput.value || !messageInput.value) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Parameters for sending
    var params = {
        name: nameInput.value,
        email: emailInput.value,
        company: companyInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
    };

    // Define service and template IDs
    const serviceID = "service_o3u7sli";
    const templateID = "template_naw2c4u";

    // Send email using EmailJS
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            // Clear input fields after successful submission
            nameInput.value = "";
            emailInput.value = "";
            companyInput.value = "";
            phoneInput.value = "";
            messageInput.value = "";

            console.log("Response:", res);
            alert("Message sent successfully");
        })
        .catch((err) => {
            console.error("Error:", err);
            alert("Something went wrong. Please try again later.");
        });
}
