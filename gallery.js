

let showPhotos = document.querySelector('#btn__photos');
let showVideos = document.querySelector('#btn__videos')
let hidePicsGrid = document.querySelector('.pics__grid');
let hideVideosGrid = document.querySelector('.videos__flex');
let galleryMain_cont = document.querySelector('.galleryMain_cont')
 


showVideos.addEventListener ('click', function(){
                 hideVideosGrid.style.display = "flex"
                 hidePicsGrid.style.display = "none"
});
showPhotos.addEventListener ('click', function(){
                 hidePicsGrid.style.display = "flex"
                 hideVideosGrid.style.display = "none"
});



let imgEnlrage = document.querySelector('img')
imgEnlrage.addEventListener('click', (e) =>{
e.style.transform = "scale(3)";
});

