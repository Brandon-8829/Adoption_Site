const timer = ms => new Promise(res => setTimeout(res, ms))
async function showSlides() {
  var i=380;

  while(i<500){
    document.getElementById("cat-slide").src="https://placekitten.com/g/380/"+i+"";

         await timer(3000);// Change image every 2 seconds
         i++;
         if(i === 500){
          i=380;
        }
  }
  window.onload = showSlides();
}

//remove old data from html page
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

document.addEventListener('DOMContentLoaded', bindButtons);


//API CALL
function bindButtons(){
  document.getElementById('submitZip').addEventListener('click', function(event){
    event.preventDefault();


    removeElementsByClass('List');
    //Get Selection Values:
    var userCity = document.getElementById('cityInput').value; // this line gets the zip code from the form entry
    var breedInput = document.getElementById('breedInput').value;
    var typeInput = document.getElementById('typeInput').value;
    var sexInput = document.getElementById('sexInput').value;

    var pf = new petfinder.Client({apiKey:"YQEAGqAXQYOGaxVchsS75kS6lYNjsLxmZ8BsbkNMaLxeDw3JmF", secret:"f9pawuTL17VSeHDHt2JeuNz30lqRrlZU3l5orlFX" });
    pf.authenticate();
    pf.animal.search({
      limit: 100,
      location: userCity,
      type: typeInput,
      breed: breedInput,
      gender: sexInput,
    }).then(function (response){
      console.log(response.data.animals);
      var container = document.createElement('div');
      container.setAttribute("id", "list_container");
      response.data.animals.forEach(function (animal){

        var name = animal.name;

        try{al.photos[0].medium;
          
          var photo = anim
        }catch{
          var photo = "no-image.jpg"
        }

        var newName = document.createElement('a');
        var newDiv = document.createElement('div');
        var newImg = document.createElement('img');
        var newDescription = document.createElement('p');

        newName.textContent = name;
        newName.href = 'https://www.petfinder.com/petdetail/' + animal.id;
        newImg.src = photo;
        newDescription.textContent = animal.description;
        
        var list = document.createElement("div");
        list.setAttribute("class", "List");
        document.body.appendChild(list);


        newDiv.appendChild(newName);
        list.appendChild(newDiv);
        list.appendChild(newImg);
        list.appendChild(newDescription);

      }).catch(function (error){
        var noAnimals = document.createElement("div");
        var noAnimslsMsg = document.createElement('p');
        noAnimslsMsg.textContent = "No Animals Found";
        document.body.appendChild(noAnimals);
        noAnimals.appendChild()
        console.log(error);
      })
    })
    .catch(function (error){
      console.log(error);
    })
    
  })
}




//grant_type=client_credentials&client_id=YQEAGqAXQYOGaxVchsS75kS6lYNjsLxmZ8BsbkNMaLxeDw3JmF&client_secret=f9pawuTL17VSeHDHt2JeuNz30lqRrlZU3l5orlFX

//API KEY: YQEAGqAXQYOGaxVchsS75kS6lYNjsLxmZ8BsbkNMaLxeDw3JmF
//API SECRET: f9pawuTL17VSeHDHt2JeuNz30lqRrlZU3l5orlFX
