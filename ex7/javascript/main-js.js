window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("Top").style.display = "flex";
    } else {
        document.getElementById("Top").style.display = "none";
    }
}
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} 
function scrollToBottom() {
    window.scrollTo(0, 5352);
}   
function changetext1() {
   document.getElementById("quote").innerHTML = "Bow Wow";
   document.getElementById("name").innerHTML = "Max";
   document.getElementById('avatar').src='http://www.rtjsjg.com/data/out/26/4947739-boo-dog-wallpaper-hd.jpg';
}
function changetext2() {
   document.getElementById("quote").innerHTML = "Yap Yap";
   document.getElementById("name").innerHTML = "Bella";
   document.getElementById('avatar').src='https://s-media-cache-ak0.pinimg.com/736x/80/30/7a/80307af2053dc304d8751c6ceb871291.jpg';
}
function changetext3() {
   document.getElementById("quote").innerHTML = "Meow";
   document.getElementById("name").innerHTML = "Oscar";
   document.getElementById('avatar').src='http://ecdn.funzypics.com/grumpycatmemes/pics/16/Small-Cute-Pusy-Cat-Wathcing-You-With-The-Dead-Tilted-On-A-Side.jpg';
}
function changetext4() {
   document.getElementById("quote").innerHTML = "Miau";
   document.getElementById("name").innerHTML = "Sophie";
   document.getElementById('avatar').src='https://s-media-cache-ak0.pinimg.com/736x/f9/11/6d/f9116dbd77dcbef6f42042ee56a77114.jpg';
}
