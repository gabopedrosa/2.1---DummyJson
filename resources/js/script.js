document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    authenticateUser(username, password)
      .then(userData => {

        showUserData(userData);
      })
      .catch(error => {
        alert(error);
      });
  });

  async function authenticateUser(username , password){
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data.users);
  
      const users = data.users;

      const authenticatedUser = users.
      find(user => user.username === username &&
         user.password === password);
    
      if (!authenticatedUser) {
        throw new Error("Suas credenciais inseridas estão inválidas.");
      }
    
      return authenticatedUser;
  }

  function showUserData(userData) {
    document.querySelector("h4").style.display = 'none';
    document.getElementById("login-form").style.display = "none";
    document.getElementById("cracha").style.display = "block";
    document.getElementById("id").innerText = userData.id;
    document.getElementById("user").innerText = userData.username;
    document.getElementById("userImage").src = userData.image;
    document.getElementById("nome").innerText = userData.firstName;
    document.getElementById("sobrenome").innerText = userData.lastName;
    document.getElementById("email").innerText = userData.email;
    document.getElementById("genero").innerText = userData.gender;
  }


  function closeUserData() {
    document.getElementById("login-form").style.display = "";
    document.getElementById("cracha").style.display = "none";
  }