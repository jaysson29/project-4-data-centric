window.onscroll = function() {myFunction()};
  
function myFunction() {
  if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
    document.getElementById("search").setAttribute("style", "visibility: hidden; display: none;");
  }
  else{
    document.getElementById("search").setAttribute("style", "visibility: visible;");
  }
  if(document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800){
    document.getElementById("video-1").setAttribute("style", "position: absolute;");
    document.getElementById("video-2").setAttribute("style", "position: absolute;");
    document.getElementById("video-3").setAttribute("style", "position: fixed;");
  }
  else if (document.body.scrollTop > 880 || document.documentElement.scrollTop > 880) {
    document.getElementById("video-1").setAttribute("style", "position: absolute;");
    document.getElementById("video-2").setAttribute("style", "position: fixed;");
    document.getElementById("video-3").setAttribute("style", "position: absolute;");
  }
  else{
    document.getElementById("video-2").setAttribute("style", "position: absolute;");
    document.getElementById("video-1").setAttribute("style", "position: fixed;");
  }
}

function myCollection(Menuid){
    if(Menuid == "all"){
      document.getElementById("all").classList.add("active");
      document.getElementById("new").classList.remove("active");
      document.getElementById("rating").classList.remove("active");
      document.getElementById("platform").classList.remove("active");
      document.getElementById("players").classList.remove("active");
      document.getElementById("coop").classList.remove("active");
      
      
      document.getElementById("allGames").setAttribute("style", "visibility: visible; display: block;");
      document.getElementById("newGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("ratingGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("platformGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("playersGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("coopGames").setAttribute("style", "visibility: hidden; display: none;");
    }
    else if (Menuid == "new"){
      document.getElementById("all").classList.remove("active");
      document.getElementById("new").classList.add("active");
      document.getElementById("rating").classList.remove("active");
      document.getElementById("platform").classList.remove("active");
      document.getElementById("players").classList.remove("active");
      document.getElementById("coop").classList.remove("active");
      
      
      document.getElementById("allGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("newGames").setAttribute("style", "visibility: visible; display: block;");
      document.getElementById("ratingGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("platformGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("playersGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("coopGames").setAttribute("style", "visibility: hidden; display: none;");
    }
    else if (Menuid == "rating"){
      document.getElementById("all").classList.remove("active");
      document.getElementById("new").classList.remove("active");
      document.getElementById("rating").classList.add("active");
      document.getElementById("platform").classList.remove("active");
      document.getElementById("players").classList.remove("active");
      document.getElementById("coop").classList.remove("active");
      
      
      document.getElementById("allGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("newGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("ratingGames").setAttribute("style", "visibility: visible; display: block;");
      document.getElementById("platformGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("playersGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("coopGames").setAttribute("style", "visibility: hidden; display: none;");
    }
    else if (Menuid == "platform"){
      document.getElementById("all").classList.remove("active");
      document.getElementById("new").classList.remove("active");
      document.getElementById("rating").classList.remove("active");
      document.getElementById("platform").classList.add("active");
      document.getElementById("players").classList.remove("active");
      document.getElementById("coop").classList.remove("active");
      
      
      document.getElementById("allGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("newGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("ratingGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("platformGames").setAttribute("style", "visibility: visible; display: block;");
      document.getElementById("playersGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("coopGames").setAttribute("style", "visibility: hidden; display: none;");
    }
    else if (Menuid == "players"){
      document.getElementById("all").classList.remove("active");
      document.getElementById("new").classList.remove("active");
      document.getElementById("rating").classList.remove("active");
      document.getElementById("platform").classList.remove("active");
      document.getElementById("players").classList.add("active");
      document.getElementById("coop").classList.remove("active");
      
      
      document.getElementById("allGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("newGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("ratingGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("platformGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("playersGames").setAttribute("style", "visibility: visible; display: block;");
      document.getElementById("coopGames").setAttribute("style", "visibility: hidden; display: none;");
    }
    else if (Menuid == "coop"){
      document.getElementById("all").classList.remove("active");
      document.getElementById("new").classList.remove("active");
      document.getElementById("rating").classList.remove("active");
      document.getElementById("platform").classList.remove("active");
      document.getElementById("players").classList.remove("active");
      document.getElementById("coop").classList.add("active");
      
      
      document.getElementById("allGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("newGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("ratingGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("platformGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("playersGames").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("coopGames").setAttribute("style", "visibility: visible; display: block;");
    }
}