document.addEventListener('DOMContentLoaded', function() {
  fetchDogs();  
  fetchBreed();
});

/**** Challenge 1 ****/ 

function fetchDogs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
      .then(response => response.json())
      .then(json => { addingDog(json); fetchBreed(); });
}

function addingDog(json) {s
     let container = document.getElementById('dog-image-container');
      let imgs = json['message'];
      for (let i = 0; i < imgs.length; i++) {
          let DOM_img = document.createElement("img");
          DOM_img.src = imgs[i];
          container.appendChild(DOM_img);   
      }
}

/**** Challenge 2 ****/ 

function fetchBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
      .then(response => response.json())
      .then(json => addingBreed(json));
}

function addingBreed(json) {
  let ul = document.getElementById('dog-breeds');
  let breeds = json['message'];
  for (let e in breeds) {
      let DOM_li = document.createElement('li');
      // extract the empty list
      if(breeds[e] == 0) {
          // do nothing
      } else {
          DOM_li.innerText = breeds[e];
          ul.appendChild(DOM_li);    
          /**** Challenge 3 ****/ 

          document.addEventListener("click", function(){
          DOM_li.style.color = "red";
          }); 
      }
  }
}


