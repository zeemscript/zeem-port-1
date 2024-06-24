function sendEmail() {
  let btn = document.getElementById("submit");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Debugging: Check if the elements are found correctly
  console.log(name, email, message);

  if (name !== "" && email !== "" && message !== "") {
    // Change button text to "Sending..."
    btn.textContent = "Sending...";

    emailjs
      .send("service_rncemxa", "contact_form", {
        from_name: name,
        email_id: email,
        message: message,
      })
      .then(
        function (res) {
          console.log(`SUCCESS! ${res.status}`);
          window.alert("Message Sent Successfully!");

          // Reset button text to its original value
          btn.textContent = "Send";

          // Clear input fields
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        },
        function (err) {
          console.log(`FAIL! ${err.message}`);
          window.alert("Failed to Send Message, Please Try Again Later.");

          // Reset button text to its original value
          btn.textContent = "Send";
        }
      );
  } else {
    alert("Please fill all input correctly  🤖🤖🤖");
  }
}


// show box when button is clicked
const ShowBox = document.getElementById("btn-show-box");
ShowBox.addEventListener("click", () => {
  let visibleBox = document.querySelector(".visible");
  if (!visibleBox) {
    alert("No more boxes to display!");
    return;
  }
  visibleBox.classList.toggle("visible");
});
