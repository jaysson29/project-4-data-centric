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
      document.getElementById("platform-Menu").setAttribute("style", "visibility: visible; display: block;");
      document.getElementById("ps4-list").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("linux-list").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("mac-list").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("xbone-list").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("x360-list").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("ps3-list").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("pc-list").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("ninswitch-list").setAttribute("style", "visibility: hidden; display: none;");
      document.getElementById("platform-back").setAttribute("style", "visibility: hidden; display: none;");
      
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

function platformSelect(platformid){
  document.getElementById("platform-Menu").setAttribute("style", "visibility: hidden; display: none;");
  if(platformid == "PlayStation-4"){
    document.getElementById("ps4-list").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("platform-back").setAttribute("style", "visibility: visible; display: block;");
  }
  else if(platformid == "Linux"){
    document.getElementById("linux-list").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("platform-back").setAttribute("style", "visibility: visible; display: block;");
  }
  else if(platformid == "Mac"){
    document.getElementById("mac-list").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("platform-back").setAttribute("style", "visibility: visible; display: block;");
  }
  else if(platformid == "Xbox-One"){
    document.getElementById("xbone-list").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("platform-back").setAttribute("style", "visibility: visible; display: block;");
  }
  else if(platformid == "Xbox-360"){
    document.getElementById("x360-list").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("platform-back").setAttribute("style", "visibility: visible; display: block;");
  }
  else if(platformid == "PlayStation-3"){
    document.getElementById("ps3-list").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("platform-back").setAttribute("style", "visibility: visible; display: block;");
  }
  else if(platformid == "PC"){
    document.getElementById("pc-list").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("platform-back").setAttribute("style", "visibility: visible; display: block;");
  }
  else if(platformid == "Nintendo-Switch"){
    document.getElementById("ninswitch-list").setAttribute("style", "visibility: visible; display: block;");
    document.getElementById("platform-back").setAttribute("style", "visibility: visible; display: block;");
  }
}