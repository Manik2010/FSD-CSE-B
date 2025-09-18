// Function that returns a Promise after 2 seconds
function waitForTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

// Each task as a promise-based function
function register() {
  return waitForTwoSeconds().then(() => {
    console.log("register end");
  });
}

function sendEmail() {
  return waitForTwoSeconds().then(() => {
    console.log("email end");
  });
}

function login() {
  return waitForTwoSeconds().then(() => {
    console.log("login end");
  });
}

function getData() {
  return waitForTwoSeconds().then(() => {
    console.log("data end");
  });
}

function displayData() {
  return waitForTwoSeconds().then(() => {
    console.log("Display end");
  });
}

// Start the chain
register()
  .then(sendEmail)
  .then(login)
  .then(getData)
  .then(displayData)
  .then(() => {
    console.log("other Application");
  })
  .catch((err) => console.error("Error:", err));
