var form = document.querySelector('.container form');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.querySelector(".container form")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
      alert('Form Submitted Succesfully!')
    });
  });