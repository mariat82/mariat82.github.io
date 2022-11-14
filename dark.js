checkDarkMode();

  

  function enableLightMode(){

    document.body.classList.remove("dark");

    localStorage.darkMode = false;

  }

  function enableDarkMode(){

    document.body.classList.add("dark");

    localStorage.darkMode = true;

  }

  function checkDarkMode(){

    if(localStorage.darkMode){

      document.body.classList.add("dark");

    }

    else{

      document.body.classList.remove("dark");

    }

  }
