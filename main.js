const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
const userAmount = 4
const uri = "https://jsonplaceholder.typicode.com/"
const urlUsers = uri + "users";
const urlPost = uri + "posts";
const images = [
  "images/person_1.jpg",
  "images/person_2.jpg",
  "images/person_3.jpg",
  "images/person_4.jpg"
]


const wrapper = document.querySelector(".swiper-wrapper");

const divElements = ()=> {
  for (let i = 0; i < userAmount; i++) {
    let div = document.createElement("div");
    div.setAttribute("class","swiper-slide");
    wrapper.appendChild(div);
  }
}

const imgElements = ()=> {
  let divs = document.getElementsByClassName("swiper-slide")
  for (let i = 0; i < divs.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src",images[i]);
    img.setAttribute("src",images[i]);
    divs[i].prepend(img);
  }
}

const pElements = (posts)=> {
  let divs = document.getElementsByClassName("swiper-slide");
  for (let i = 0; i < divs.length; i++) {
    let p = document.createElement("p");
    p.setAttribute("id","p1");
    let pContent = document.createTextNode(`"${posts[i]}"`);
    p.appendChild(pContent);
    divs[i].append(p);
  }
}

const names = users=> {
  let divs = document.getElementsByClassName("swiper-slide");
  for (let i = 0; i < divs.length; i++) {
    let p = document.createElement("p");
    p.setAttribute("class","names");
    p.setAttribute("id","p2");
    let pContent = document.createTextNode(users[i]);
    p.appendChild(pContent);
    divs[i].append(p);
  }
}
divElements();
imgElements();
const request1 = axios.get("https://jsonplaceholder.typicode.com/posts");
const request2 = axios.get("https://jsonplaceholder.typicode.com/users");

axios.all([
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      data = res.data
      let posts = []
      for (let i = 0; i < userAmount; i++) {
        posts.push(data[i].body)
      }
      pElements(posts)
    })
    .catch(error => console.log(error)), 
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      data = res.data
      let users = []
      for (let i = 0; i < userAmount; i++) {
        users.push(data[i].name)
      }
      names(users)
    })
    .catch(error => console.log(error))
])
