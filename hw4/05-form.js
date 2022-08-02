let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  console.groupCollapsed("========= Form Submission =========");
  console.log(`Username: ${form.username.value}`);
  console.log(`Email: ${form.email.value}`);

  if (!form.newsletter.value) {
      console.log("Newsletter: no submission");
  }
  else if (form.newsletter.value == "false") {
    console.log("Newsletter: No");
  }
  else {
    console.log("Newsletter: Yes");
  }
  
  if (!form.date.value) {
    console.log("Date: no submission");
  }
  else {
    console.log(`Date: ${form.date.value}`);
  }

  event.preventDefault();
}
