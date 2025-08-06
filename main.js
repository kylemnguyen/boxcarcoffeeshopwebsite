const tileContainer = document.getElementById('tileStrip');
const tileContainer2 = document.getElementById('tileStrip2');
const tileContainer3 = document.getElementById('tileStrip3');
const tileContainer4 = document.getElementById('tileStrip4');
const tileSize = 50;
const screenWidth = window.innerWidth;
const tileCount = Math.ceil(screenWidth / tileSize);
const angles = [0, 90, 180, 270];

for (let i = 0; i < tileCount; i++) {
    const img = document.createElement('img');
    img.src = 'assets/elements/tile1.png';
    img.alt = 'Tile';
    const imgalt = document.createElement('img');
    imgalt.src = 'assets/elements/tile1.png';
    imgalt.alt = 'Tile';
    // const img3 = document.createElement('img');
    // img3.src = 'assets/elements/tile2.png';
    // img3.alt = 'Tile';
    // const img4 = document.createElement('img');
    // img4.src = 'assets/elements/tile2.png';
    // img4.alt = 'Tile';



    const angle = angles[Math.floor(Math.random() * angles.length)];
    const angle2 = angles[Math.floor(Math.random() * angles.length)];


    img.style.transform = `rotate(${angle}deg)`;
    imgalt.style.transform = `rotate(${angle2}deg)`;
    // img3.style.transform = `rotate(${angle}deg)`;
    // img4.style.transform = `rotate(${angle2}deg)`;

    tileContainer.appendChild(img);
    tileContainer2.appendChild(imgalt);
    // tileContainer3.appendChild(img3);
    // tileContainer4.appendChild(img4);


}

function hide() {
    document.getElementById("splash").style.display = "none";
}

function splashHoverOn() {
    document.getElementById("splash-img").src = 'assets/logo/logo-white.png';
    document.getElementById("splash").style.backgroundColor = '#ffdc5d';
}

function splashHoverOff() {
    document.getElementById("splash-img").src = 'assets/logo/logo-yellow.png';
    document.getElementById("splash").style.backgroundColor = '#1bb446';

}

document.getElementById('load-more-btn').addEventListener('click', function () {
    const container = document.getElementById('insta-container');

    const newRow = document.createElement('div');
    newRow.classList.add('insta-row', 'reverse');

    newRow.innerHTML = `
      <div class="insta-right">
        <a href="https://www.instagram.com/p/DIJVWgOJWnx/"><img src="assets/instagram/8.jpeg" alt="Instagram post"></a>
        <a href="https://www.instagram.com/p/DH7O5EJvgJI/"><img src="assets/instagram/9.jpeg" alt="Instagram post"></a>
        <a href="https://www.instagram.com/p/DF0IRwEJZgP/"><img src="assets/instagram/10.jpeg" alt="Instagram post"></a>
        <a href="https://www.instagram.com/p/C_1l0v9SxrB/"><img src="assets/instagram/11.jpeg" alt="Instagram post"></a>
        <a href="https://www.instagram.com/p/C_qBzgBJo5P/"><img src="assets/instagram/12.jpeg" alt="Instagram post"></a>
        <a href="https://www.instagram.com/p/C8CNzvqplF1/"><img src="assets/instagram/13.jpeg" alt="Instagram post"></a>
      </div>
      <div class="insta-left">
        <div class="insta-photo">
          <a href="https://www.instagram.com/p/C97Rgrnp5N5/"><img src="assets/instagram/14.jpeg" alt="Instagram post"></a>
        </div>
      </div>
    `;

    container.appendChild(newRow);

    document.getElementById('load-more-btn').style.display = "none";
    document.getElementById('insta-row-first').style.marginBottom = "-10vh";
  });


  const gallery = document.getElementById('auto-scroll-gallery');
  let scrollX = 0;
  const speed = 1.5; // adjust this for scroll speed

  function scrollGallery() {
    scrollX += speed;
    if (scrollX >= gallery.scrollWidth / 2) {
      scrollX = 0; // loop seamlessly halfway since we duplicated content
    }
    gallery.scrollLeft = scrollX;
    requestAnimationFrame(scrollGallery);
  }

  scrollGallery();
