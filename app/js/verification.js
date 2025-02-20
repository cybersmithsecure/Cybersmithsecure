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

        function _0xb7c0(_0x2f781f,_0x2f984d){const _0x276534=_0x2765();return _0xb7c0=function(_0xb7c030,_0x1972fe){_0xb7c030=_0xb7c030-0x9a;let _0x56ce15=_0x276534[_0xb7c030];return _0x56ce15;},_0xb7c0(_0x2f781f,_0x2f984d);}function _0x2765(){const _0x34aab7=['18RKiRit','https://api.zerobounce.net/v2/validate?api_key=','723152UhnrIs','valid','157166pwsLNb','6162264GmWRzR','36cKuvPR','177400lmaGCJ','1630110jOxxLm','c7f2b7caa7cb4dd697514d3096f1ebc8','&email=','109090Muerpe','5qkkjEl','88099wbobWu','8IcjHio','28iqsRRg'];_0x2765=function(){return _0x34aab7;};return _0x2765();}(function(_0x280578,_0x1a8d70){const _0x308d66=_0xb7c0,_0x4d4e16=_0x280578();while(!![]){try{const _0x4831bb=parseInt(_0x308d66(0xa2))/0x1*(-parseInt(_0x308d66(0xa8))/0x2)+parseInt(_0x308d66(0xa4))/0x3*(parseInt(_0x308d66(0x9b))/0x4)+parseInt(_0x308d66(0xa0))/0x5*(-parseInt(_0x308d66(0x9c))/0x6)+parseInt(_0x308d66(0xa3))/0x7*(parseInt(_0x308d66(0xa6))/0x8)+parseInt(_0x308d66(0xa9))/0x9+parseInt(_0x308d66(0x9f))/0xa+parseInt(_0x308d66(0xa1))/0xb*(-parseInt(_0x308d66(0x9a))/0xc);if(_0x4831bb===_0x1a8d70)break;else _0x4d4e16['push'](_0x4d4e16['shift']());}catch(_0x503f18){_0x4d4e16['push'](_0x4d4e16['shift']());}}}(_0x2765,0x61639));async function verifyEmailWithAPI(_0xee7438){const _0x2d0abc=_0xb7c0,_0x5c0af1=_0x2d0abc(0x9d),_0x4eb742=_0x2d0abc(0xa5)+_0x5c0af1+_0x2d0abc(0x9e)+_0xee7438,_0x1e0296=await fetch(_0x4eb742),_0x3d35ff=await _0x1e0296['json']();return _0x3d35ff['status']===_0x2d0abc(0xa7);}

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
