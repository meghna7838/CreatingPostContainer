//Complete this JS file to render the post1 on the screen with all the specified tags.
let postsData = [
  { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
  { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
  { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
  { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
];

const likedPosts = new Set();

function renderPosts() {
const postIdDiv = document.getElementById("posts");
postIdDiv.innerHTML = ""; // Clear the existing posts before rendering

//Creating all elements for each post
postsData.forEach((post)=>{
const postClassDiv = document.createElement("div");
postClassDiv.className = "post";
postIdDiv.appendChild(postClassDiv);

//Author
const head3 = document.createElement("h3");
head3.innerHTML = post.author;
postClassDiv.appendChild(head3);

//Image
const imageEl = document.createElement("img");
imageEl.src = post.image;
postClassDiv.appendChild(imageEl);

//Para
const pEl = document.createElement("p");
pEl.textContent = post.content;
postClassDiv.appendChild(pEl);

//Like button
const btnEl = document.createElement("button");
btnEl.innerHTML = "Like";
btnEl.classList.add('like-button');
btnEl.addEventListener('click',()=>{
  //Checking if it is already present in set in that case nothing is to be done 
  //If it is not there then calling likepost to increase count of likes and updating the UI
  if(!likedPosts.has(post.id)){
  likePost(post.id);
  likedPosts.add(post.id);//Adding in set so that it cant be used next time
  btnEl.disabled = true;  
  //For loop to set liked btn to red
  for(let ind of likedPosts){
    const button = document.querySelectorAll('.like-button')[ind-1];
    button.style.backgroundColor = 'red';
  }
}
}
);
postClassDiv.appendChild(btnEl);

const inputEl = document.createElement("input");
inputEl.setAttribute('type','text');
inputEl.placeholder = 'Write a comment...';
postClassDiv.appendChild(inputEl);

const btnElCom = document.createElement("button");
btnElCom.innerHTML = "Comment";
btnElCom.classList.add('comment-button');
btnElCom.addEventListener('click',()=>{
  var cmtInpt = inputEl.value;
  addComment(post.id,cmtInpt);
  });
  postClassDiv.appendChild(btnElCom);
  
const postDiv = document.createElement("div");
postDiv.className = "post-footer";
postDiv.textContent = `Likes: ${post.likes} Comments: ${post.comments.length}`;
postClassDiv.appendChild(postDiv);

const commentDiv = document.createElement("div");
commentDiv.className = "comments-container";
commentDiv.style.display = 'none';
postClassDiv.appendChild(commentDiv);

post.comments.forEach((comment)=>{
    const commentP = document.createElement("p");
    commentP.textContent = comment;
    commentDiv.appendChild(commentP);
});

postDiv.addEventListener('click',() => {
    if (commentDiv.style.display === 'none') {
      commentDiv.style.display = 'block';
    } else {
      commentDiv.style.display = 'none';
    }
  });
});

  function addComment(postId,comment) {
    const post = postsData.find(post => post.id === postId);
    if(post) {
      post.comments.push(comment);
      renderPosts();
    }
    
    }

function likePost(postId) {
  const post = postsData.find(post => post.id === postId);
  if (post) {
    post.likes++;
    renderPosts();
  }
}
}
renderPosts();

