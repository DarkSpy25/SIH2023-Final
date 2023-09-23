// Function to show the registration form
// function signup(){
//     signup = document.getElementById("signup-form");
//     signup.innerHTML = 'You have registered succesfully!';
// }
// function showSignupForm() {
//     document.getElementById("signup-form").style.display = "block";
//     document.getElementById("login-form").style.display = "none";
// }

// // Function to show the login form
// function showLoginForm() {
//     document.getElementById("login-form").style.display = "block";
//     document.getElementById("signup-form").style.display = "none";
// }

// // Function to show choice A or B
// function showChoice(choice) {
//     document.getElementById("choice-a").style.display = choice === 'a' ? "block" : "none";
//     document.getElementById("choice-b").style.display = choice === 'b' ? "block" : "none";
// }


// // Function to show the registration form
// function showChoice(choice) {
//     document.getElementById("choice-a").style.display = choice === 'a' ? "block" : "none";
//     document.getElementById("choice-b").style.display = choice === 'b' ? "block" : "none";
//     hideResult(); // Hide the result div when switching choices
// }

// // Function to hide the result div
// function hideResult() {
//     document.getElementById("result").style.display = "none";
// }

// // Simulate a progress bar and display the result
// function simulateProgressBar() {
//     hideResult(); // Hide the result div initially
//     var bar = document.querySelector(".bar");
//     var resultDiv = document.getElementById("result");

//     // Show the result div with the progress bar
//     resultDiv.style.display = "block";

//     var width = 0;
//     var interval = setInterval(function() {
//         if (width >= 100) {
//             clearInterval(interval);
//             // After 2 seconds, display the button for database visualization
//             setTimeout(function() {
//                 resultDiv.innerHTML = '<p>Your Database has been integrated succesfully! Click the button below to visualize.</p><button onclick="showVisualization()">Visualize Database</button>';
//             }, 2000);
//         } else {
//             width++;
//             bar.style.width = width + "%";
//         }
//     }, 20); // Adjust the speed of the progress bar animation as needed
// }

// // Function to show the database visualization (default image)
// function showVisualization() {
//     // Redirect to the visualization page or load the default image
//     window.location.href = "visualization.html";
// }

// // Function to redirect to the choice.html page
// // function redirectToChoicePage() {
// //     console.log("Redirecting to choice.html"); // Check if this message appears in the console
// //     window.location.href = "choice.html";
// // }

