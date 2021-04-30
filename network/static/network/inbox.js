var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

document.addEventListener('DOMContentLoaded', compose_post);

  function compose_post() {
    document.querySelector('#button').onclick = () =>  {

      const content = document.getElementById("new_post").value;
      console.log(content)
      fetch('/posts', {
      method: 'POST',
      timeout:3000,
      body: JSON.stringify({
          content : content,

      })
      })

    .then(response => response.json())
    .then(result => {
    // Print result
     console.log(result);
   })
  }
}
