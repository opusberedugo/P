$(function(){
  let tabs = document.querySelectorAll(".tab");
  let columns = document.querySelectorAll(".columns");

  console.log(tabs);

  for (let i = 0; i < tabs.length; i++) {
    
    tabs[i].onclick = function(){
      $(tabs[i]).addClass("active")
        switch (i) {

          case 0:
            // remove active classes
            $(tabs[1]).removeClass("active");
            $(tabs[2]).removeClass("active");
            $(tabs[3]).removeClass("active");
            $(tabs[4]).removeClass("active");
            
            // show the right column
            $(columns[i]).show("fade")

            // hide other columns
            $(columns[1]).hide("fade")
            $(columns[2]).hide("fade")
            $(columns[3]).hide("fade")
            $(columns[4]).hide("fade")


          break;

          case 1:
            // remove active classes
            $(tabs[0]).removeClass("active");
            $(tabs[2]).removeClass("active");
            $(tabs[3]).removeClass("active");
            $(tabs[4]).removeClass("active");
            
            // show the right column
            $(columns[i]).show("fade")

            // hide other columns
            $(columns[0]).hide("fade")
            $(columns[2]).hide("fade")
            $(columns[3]).hide("fade")
            $(columns[4]).hide("fade")
          break;

          case 2:
            // remove active classes
            $(tabs[0]).removeClass("active");
            $(tabs[1]).removeClass("active");
            $(tabs[3]).removeClass("active");
            $(tabs[4]).removeClass("active");
            
            // show the right column
            $(columns[i]).show("fade")

            // hide other columns
            $(columns[0]).hide("fade")
            $(columns[1]).hide("fade")
            $(columns[3]).hide("fade")
            $(columns[4]).hide("fade")
          break;

          case 3:
            // remove active classes
            $(tabs[0]).removeClass("active");
            $(tabs[2]).removeClass("active");
            $(tabs[1]).removeClass("active");
            $(tabs[4]).removeClass("active");
            
            // show the right column
            $(columns[i]).show("fade")

            // hide other columns
            $(columns[0]).hide("fade")
            $(columns[2]).hide("fade")
            $(columns[1]).hide("fade")
            $(columns[4]).hide("fade")
          break;

          case 4:
            // remove active classes
            $(tabs[0]).removeClass("active");
            $(tabs[2]).removeClass("active");
            $(tabs[3]).removeClass("active");
            $(tabs[1]).removeClass("active");
            
            // show the right column
            $(columns[i]).show("fade")

            // hide other columns
            $(columns[0]).hide("fade")
            $(columns[2]).hide("fade")
            $(columns[3]).hide("fade")
            $(columns[1]).hide("fade")            
          break;
       
          
          default:
          break;
        }
    
    }
    
  }
});