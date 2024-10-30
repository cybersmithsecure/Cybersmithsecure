const publicDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];

        // Function to open the modal
        function openModal() {
            document.getElementById("emailModal").style.display = "block";
        }

        // Function to close the modal
        function closeModal() {
            document.getElementById("emailModal").style.display = "none";
        }

        // Function to download the PDF
        function downloadPDF() {
            window.location.href = 'assets/capability_statement.pdf'; // Replace with actual PDF path
        }

        // Function to verify email using ZeroBounce API
        async function verifyEmailWithAPI(email) {
            const apiKey = 'c7f2b7caa7cb4dd697514d3096f1ebc8';  // Your ZeroBounce API key
            const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`;

            const response = await fetch(apiUrl);
            const result = await response.json();

            // Return true if email is valid
            return result.status === 'valid';
        }

        // Function to validate the email
        async function validateEmail() {
            const emailInput = document.getElementById('emailInput').value;
            const emailDomain = emailInput.split('@')[1]; // Extract domain from email
            const errorMessage = document.getElementById('errorMessage');

            // Step 1: Check for public domains
            if (publicDomains.includes(emailDomain)) {
                errorMessage.style.display = 'block'; // Show error if email is public
            } else {
                // Step 2: Check with Email Verification API
                const isValid = await verifyEmailWithAPI(emailInput);
                if (isValid) {
                    errorMessage.style.display = 'none'; // Hide error
                    closeModal(); // Close modal after successful validation
                    downloadPDF(); // Trigger PDF download
                } else {
                    errorMessage.textContent = 'Invalid or non-working email address.';
                    errorMessage.style.display = 'block'; // Show error for invalid email
                }
            }
        }