
    function updateDateTime() {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Manila',
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const formatted = now.toLocaleString('en-PH', options);
        document.getElementById('datetime').textContent = formatted;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
