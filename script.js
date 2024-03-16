//Complete this JS file to render the post1 on the screen with all the specified tags.
let post1 ={
    id: 1, 
    author: 'John',
    content: 'My first Post!', 
    likes: 10, 
    comments: ['Great post!', 'Nice photo!'], 
    image: 'https://files.codingninjas.in/image2-28694.jpg' };

const {author,content,likes,comments,image} = post1;
const postIdDiv = document.getElementById("posts");
const postClassDiv = document.createElement("div");
postClassDiv.className = "post";
postIdDiv.appendChild(postClassDiv);

const head3 = document.createElement("h3");
postClassDiv.appendChild(head3);
head3.innerHTML = author;

const imageEl = document.createElement("img");
postClassDiv.appendChild(imageEl);
imageEl.src = image;

const pEl = document.createElement("p");
postClassDiv.appendChild(pEl);
pEl.textContent = content;

const btnEl = document.createElement("button");
postClassDiv.appendChild(btnEl);
btnEl.innerHTML = "Like";
btnEl.classList.add('like-button');
btnEl.addEventListener('click',()=>{
  post1.likes++;
  btnEl.style.backgroundColor="red";
  btnEl.disabled ="true";
  postDiv.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
});

const inputEl = document.createElement("input");
inputEl.setAttribute('type','text');
inputEl.placeholder = 'Write a comment...';
postClassDiv.appendChild(inputEl);

const btnElCom = document.createElement("button");
postClassDiv.appendChild(btnElCom);
btnElCom.innerHTML = "Comment";
btnElCom.classList.add('comment-button');
btnElCom.addEventListener('click',()=>{
  var cmtInpt = inputEl.value;
  console.log(cmtInpt);
  comments.push(cmtInpt); 
  console.log(comments);
  postDiv.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
});
  
const postDiv = document.createElement("div");
postClassDiv.appendChild(postDiv);
postDiv.className = "post-footer";
postDiv.textContent = `Likes: ${likes} Comments: ${comments.length}`;

const commentDiv = document.createElement("div");
postClassDiv.appendChild(commentDiv);
commentDiv.className = "comments-container";
commentDiv.style.display = 'none';

comments.forEach((comment)=>{
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



