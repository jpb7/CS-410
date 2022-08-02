//  Link to existing stylesheet.
let head = document.querySelector("head");
let link = document.createElement("link");
link.href = "../hw2/01-hello.css";
link.type = "text/css";
link.rel = "stylesheet";
head.append(link);

//  Create main element and add the rest below.
let main = document.querySelector("main");

//  Create image element.
let headshot = document.createElement("img");
headshot.className = "headshot";
headshot.src = "../images/jacob2.jpg";
headshot.alt = "headshot of Jacob, the author";
headshot.title = "Jacob Bentley: actual CS student and wannabe martial artist.";
main.append(headshot);

//  Create paragraph element.
let bio = document.createElement("p");
bio.className = "bio";
bio.style.fontFamily = "Arial";
bio.textContent = "Hi there! I'm Jacob Bentley, currently a post-baccalaureate student working on a degree in Computer Science at Portland State University. In my free time I like to read, work out, and do martial arts.";
main.append(bio);