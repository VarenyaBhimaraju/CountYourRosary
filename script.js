let beadCount = 0;
        let malaCount = 0;
        let startTime = null;
        let timeTaken = 0;
        let liveTimerInterval = null;
        let liveTime = 0;

        function countBead() {
            if (beadCount === 0) {
                // Start the timer when the first bead is counted
                startTime = new Date();
                liveTime = 0; // Reset live time
                document.getElementById('liveTimer').innerText = liveTime;

                // Start the live timer
                liveTimerInterval = setInterval(() => {
                    liveTime++;
                    document.getElementById('liveTimer').innerText = liveTime;
                }, 1000);
            }

            beadCount++;
            document.getElementById('beadCount').innerText = beadCount;

            // Check if 108 beads have been counted
            if (beadCount >= 108) {
                malaCount++;
                document.getElementById('malaCount').innerText = malaCount;

                triggerConfetti();

                // Calculate time taken for the last mala
                const endTime = new Date();
                timeTaken = Math.floor((endTime - startTime) / 1000); // Time in seconds
                document.getElementById('timeTaken').innerText = timeTaken;

                // Reset bead count and start time for the next mala
                beadCount = 0;
                startTime = null; // Reset start time
                clearInterval(liveTimerInterval); // Stop the live timer
                liveTimerInterval = null; // Reset the interval
                liveTime =  0; // Reset live time
                document.getElementById('liveTimer').innerText = liveTime; // Reset live timer display
            }
        }
        function triggerConfetti() {
            confetti({
             origin: { x: 0, y: 1 },
              particleCount: 100,
              spread: 70,
               startVelocity: 30,
              colors: ['#ff0', '#0f0', '#00f', '#f00', '#ff00ff']
              });
     // Confetti on bottom right
             confetti({
               origin: { x: 1, y: 1 },
                particleCount: 100,
                 spread: 70,
              startVelocity: 30,
              colors: ['#ff0', '#0f0', '#00f', '#f00', '#ff00ff']
               });
}
