// const myToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoRHp3UVNjUnlKQVpiSmFSYTBIQWU5QnlxeXF5akJyaVlJNEJ3eXFmRmRZWmhGT0h1OCIsImp0aSI6ImIxOGU0YmI4NGIzMmViY2ZhNjNmYTk0MmM0YmJiMGQ4YjM1YzY0NDkyYzc4MWNjMjRiNmNjZGJlMzM3NGJiZTAyMjk5MzA1YzdlMTZjMjE4IiwiaWF0IjoxNTgzODU2MTc3LCJuYmYiOjE1ODM4NTYxNzcsImV4cCI6MTU4Mzg1OTc3Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.TIJL4ER-BL66XgkWHgBBFJcRUHuoEqi5VjqrHfHfrfUxHqMwVn5BiGavGLgvbBYJp7ac1wNClMhrsEoAeo-kPHmanseenB45aakJgF0cK-jACJCtNd2Vjx3ZktkfJ_LCBCAlRK-_bX0947XqkhttEE9HFfUq3YugVw-tT6AwQ__0x8sujWvw6pPDEroTcsN6Kpi1olq_h6GhAqMi5nqr1xK3CqlbgK-HhlGyUpWxDcnMImw7ewzO0EwlQ_TcubEYwkQ0QaAxO2LM899u1oFKYxi5rvAW0J5HDYaJG9CncpiZdsW4IXsGaV-GmuOMpbLgiTfL_9ZUg5tjXQ4UTDAjyw";
// const requestHeaders = { Authorization: `Bearer ${myToken}` };

// const button = document.querySelector("#breed-btn");
// const select = document.querySelector("#my-select");
// const imageDiv = document.querySelector("#image-div");
// button.addEventListener("click", async () => {
//   event.preventDefault();
//   let breed = select.value.dog;
//   let response = await axios.get(`https://api.thedogapi.com/v1/${breed}breeds`);

//   console.log(response);
//   debugger;
//   let dogPic = response.data.message;
//   imageDiv.innerHTML = `<img src=${dogPic}>`;
// });

// const breed = (url, callback) => {
//   const request = new XMLHttpRequest();
//   request.onreadystatechange = function() {
//     if (request.readyState == 4 && request.status == 200) {
//       console.log("responseText:" + request.responseText);
//       try {
//         let data = JSON.parse(request.responseText);
//       } catch (err) {
//         console.log(err.message + " in " + request.responseText);
//         return;
//       }
//       callback(data);
//     }
//   };

//   request.open("GET", url, true);
//   request.send();
// };

// breed("https://api.thedogapi.com/v1/breeds", function(data) {
//   document.getElementById("id").innerHTML = data[0]["id"];
//   document.getElementById("url").innerHTML = data[0]["url"];

//   let html = '<img src="' + data[0]["url"] + '">';
//   document.getElementById("image").innerHTML = html;
// });
