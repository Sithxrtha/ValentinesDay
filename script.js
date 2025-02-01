/* Function to move button if hovered over */
const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Ensure the button stays within the viewport
    const maxX = windowWidth - buttonWidth;
    const maxY = windowHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Ensure the button is positioned correctly
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

/* Function to display text once button is clicked */
const message = document.getElementById('messageClick');

// Function to execute when the button has the specific inner HTML
function executeWhenMessageButton() {
    message.style.textAlign="left";
    message.style.fontSize="28px";
    message.innerHTML="Dear Mali Rajsavong, <br><br>Thank you for our everlasting journey this past year, I can't thank you more than enough for how "
    + "much you have turned my life around. May our journey continue and this be one of the many celebrations in our lives together baby. "
    + "I love you ❤️ <br><br>Sincerely,<br>Sithartha Phengsavanh :)";
}

/* Function to display text once button is clicked */
const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', () => {
    yesButton.addEventListener("click", () => {
        if (yesButton.innerHTML === "Click Here for a Message...") {
            executeWhenMessageButton();
        }
    });

    // Continuously create hearts every 500ms
    setInterval(createHearts, 500);

    document.getElementById("text").textContent = "Yay! You are my Valentine 🥰❤️";
    document.getElementById("yesButton").innerHTML = "Click Here for a Message...";
    document.getElementById("yesButton").style.width = "450px";
    document.getElementById("yesButton").style.marginLeft = "0";    
    document.getElementById("noButton").style.display = "none";

    // Function to create multiple heart emojis
    function createHearts() {
        const numberOfHearts = 5; // Number of hearts to generate at once
        for (let i = 0; i < numberOfHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.textContent = '❤️';
            heart.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
            heart.style.top = Math.random() * window.innerHeight + 'px'; // Random vertical position
            document.body.appendChild(heart); // Append to the body

            // Remove the heart after the animation ends
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }
    }

    // Continuously create hearts every 500ms
    setInterval(createHearts, 500);
});


