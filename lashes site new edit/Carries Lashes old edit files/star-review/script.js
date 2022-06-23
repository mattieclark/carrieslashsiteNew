 
        let i = 0;
        let node = document.querySelector("svg #svg_1");

       

        node.addEventListener("click", function (event) {
            event.target.classList.toggle("yellow");           
            let childList = Array.from(event.target.parentNode.children);
            let indexNumber = childList.indexOf(event.target);
           

            childList.forEach(function (item, key) {

                if (key <= indexNumber) {
                    item.classList.add("yellow");
                }
                else {
                    item.classList.remove("yellow");
                }

            console.log(indexNumber);
                   

            });

            document.getElementById("starRating").value=indexNumber+1; 
            
           

        });    

           
        
        let sound = document.querySelector("#svg_1");
        
        sound.addEventListener("click", function(){  

        let audio = new Audio("26f8b9_sonic_ring_sound_effect.mp3");  

        audio.play();

        });