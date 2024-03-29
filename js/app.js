// Array of all photos

let photoArr = [
    `<li><a href="photos/01.jpg" data-lightbox="gallery" data-title="I love hay bales. Took this snap on a drive through the countryside past some straw fields."><img src="photos/thumbnails/01.jpg" alt="Hay Bales"></a></li>`,
    `<li><a href="photos/02.jpg" data-lightbox="gallery" data-title="The lake was so calm today. We had a great view of the snow on the mountains from here."><img src="photos/thumbnails/02.jpg" alt="Lake"></a></li>`,
    `<li><a href="photos/03.jpg" data-lightbox="gallery" data-title="I hiked to the top of the mountain and got this picture of the canyon and trees below."><img src="photos/thumbnails/03.jpg" alt="Canyon"></a></li>`,
    `<li><a href="photos/04.jpg" data-lightbox="gallery" data-title="It was amazing to see an iceberg up close, it was so cold but didn’t snow today."><img src="photos/thumbnails/04.jpg" alt="Iceberg"></a></li>`,
    `<li><a href="photos/05.jpg" data-lightbox="gallery" data-title="The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."><img src="photos/thumbnails/05.jpg" alt="Desert"></a></li>`,
    `<li><a href="photos/06.jpg" data-lightbox="gallery" data-title="Fall is coming, I love when the leaves on the trees start to change color"><img src="photos/thumbnails/06.jpg" alt="Fall"></a></li>`,
    `<li><a href="photos/07.jpg" data-lightbox="gallery" data-title="I drove past this plantation yesterday, everything is so green!"><img src="photos/thumbnails/07.jpg" alt="Plantation"></a></li>`,
    `<li><a href="photos/08.jpg" data-lightbox="gallery" data-title="My summer vacation to the Oregon Coast. I love the sandy dunes!"><img src="photos/thumbnails/08.jpg" alt="Dunes"></a></li>`,
    `<li><a href="photos/09.jpg" data-lightbox="gallery" data-title="We enjoyed a quiet stroll down this countryside lane."><img src="photos/thumbnails/09.jpg" alt="Countryside Lane"></a></li>`,
    `<li><a href="photos/10.jpg" data-lightbox="gallery" data-title="Sunset at the coast! The sky turned a lovely shade of orange."><img src="photos/thumbnails/10.jpg" alt="Sunset"></a></li>`,
    `<li><a href="photos/11.jpg" data-lightbox="gallery" data-title="I did a tour of a cave today and the view of the landscape below was breathtaking."><img src="photos/thumbnails/11.jpg" alt="Cave"></a></li>`,
    `<li><a href="photos/12.jpg" data-lightbox="gallery" data-title="I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."><img src="photos/thumbnails/12.jpg" alt="Bluebells"></a></li>`
];


// Global variables

const $gallery = $('.gallery');
const $searchbar = $('#searchbar');

// Initialize gallery

showGallery();

// Gallery variables

const $photo = $('.gallery li');
const $photoGal = $photo.children();

// Real time search function

function searchPhotos() {
    let $val = $('#searchbar').val().toLowerCase();
    $photoGal.each(function(i, item) {
            if ($(item).attr('data-title').toLowerCase().indexOf($val) >-1) {
                 $(item).parent().show(); 
            } else { 
                $(item).parent().hide();
            }
});
}

// Function to populate gallery

function showGallery() {
    if ($('#searchbar').val() === "") {
        photoArr.forEach( (photo) => {
            $gallery.append(photo);
        });
    }
}

// Lightbox properties

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'albumLabel': '',
    'wrapAround': true 
});

