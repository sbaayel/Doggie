// npm i -g surge

// password = nasal@123

// let $selectBox1 = $("select#select-box1");
// $selectBox1.change(function() {
//   let id = $(this)
//     .children(":selected")
//     .attr("id");
//   getDogByBreed(id);
// });

async function test() {
  let resp = await axios.get("https://api.thedogapi.com/v1/breeds");
  console.log(resp.data);
}
test();

let endpoint = "https://api.thedogapi.com/v1/breeds";
const select = document.querySelector("#select-box1");
const option = document.querySelector("select");
const button = document.querySelector("button");
// ---------------------------------------------
// Select Drop down
//----------------------------------------------
const categories = async () => {
  const response = await axios.get(`${endpoint}`);
  response.data.forEach(category => {
    select.innerHTML += `<option value = "${category.id}"> ${category.name} </option>`;
  });
  console.log(response);
};
categories();
//-----------------------------------------
// images
// ----------------------------------------
button.addEventListener("click", async () => {
  const resp = await axios.get(
    `https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=${
      select[select.selectedIndex].id
    }`
  );
  console.log(resp);
  const breedImage = document.querySelector("#breed-image");
  let image = document.createElement("img");
  image.style.maxWidth = "500px";
  image.style.maxHeight = "500px";
  image.style.border = "5px solid black";
  image.src = "${resp.data[0].url}";
  breedImage.appendChild(image);
  // breedImage.innerHTML = `<img src ="${resp.data[0].url}" />`;
  const res = await axios.get(
    `https://api.thedogapi.com/v1/breeds/search?q=${
      select[select.selectedIndex].text
    }`
  );

  breedImage.style.maxWidth = "250PX";
  breedImage.style.border = "5px solid black";

  console.log(res);
  const breedData = document.querySelector("#breed-data-table");
  breedData.innerHTML = "";
  for (let i = 0; i < res.data.length; i++) {
    breedData.innerHTML += `
    <p>Name: ${res.data[i].name}</p>
    <p>Temperament: ${res.data[i].temperament}</p>
    <p>Purpose: ${res.data[i].bred_for}</p>
    <p>Life: ${res.data[i].life_span}</p>
    `;
  }
});
//---------------------------------------
// breed info
//--------------------------------------
button.addEventListener("click", async () => {});

// function getBreeds() {
//   ajax_get("https://api.thedogapi.com/v1/breeds", function(data) {
//     populateBreedsSelect(data);
//   });
// }
// function populateBreedsSelect(breeds) {
//   $selectBox1.empty().append(function() {
//     let output = "";
//     $.each(breeds, function(key, value) {
//       output += '<option id="' + value.id + '">' + value.name + "</option";
//     });
//     return output;
//   });
// }

// function getDogByBreed(breed_id) {
//   ajax_get(
//     "https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=" +
//       breed_id,
//     function(data) {
//       if (data.lenght == 0) {
//         clearBreed();
//         $("#breed-data-table").append(
//           "<tr><td>Sorry, no image for that breed yet</td></tr>"
//         );
//       } else {
//         displayBreed(data[0]);
//       }
//     }
//   );
// }

// function clearBreed() {
//   $("#breed-image").attr("src", "");
//   $("#breed-data-table tr").remove();
// }

// function displayBreed(image) {
//   $("#breed-image").attr("src", image.url);
//   $("#breed-data-table tr").remove();
//   let breedData = image.breeds[0];
//   $.each(breed - data, function(key, value) {
//     if (key == "weight" || key == "height") value = value.metric;
//     $("#breed-data-table").append(
//       "<tr><td>" + key + "</td><td>" + value + "</td></tr>"
//     );
//   });
// }

// function ajax_get(url, callback) {
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//       console.log("responseText:" + xmlhttp.responseText);
//       try {
//         var data = JSON.parse(xmlhttp.responseText);
//       } catch (err) {
//         console.log(err.message + " in " + xmlhttp.responseText);
//         return;
//       }
//       callback(data);
//     }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }
// getBreeds();

// const coll = document.getElementsByClassName("collapsible");
// const i;
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//    let content = this.nextElementSibling;
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

// function openForm() {
//   document.getElementById("popupForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("popupForm").style.display = "none";
// }

// $("select").on("click" , function() {

//   $(this).parent(".select-box").toggleClass("open");

// });

// $(document).mouseup(function (e)
// {
//     var container = $(".select-box");

//     if (container.has(e.target).length === 0)
//     {
//         container.removeClass("open");
//     }
// });

// $("select").on("change" , function() {

//   var selection = $(this).find("option:selected").text(),
//       labelFor = $(this).attr("id"),
//       label = $("[for='" + labelFor + "']");

//   label.find(".label-desc").html(selection);

// });
