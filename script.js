        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Capture form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Webhook URL
            const webhookUrl = 'YOUR_WEBHOOK_URL';

            // Send data to webhook
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
