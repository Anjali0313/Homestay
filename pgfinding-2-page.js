function renderCitySections(selectedCityId) {
  const city = Data.cities[selectedCityId];
  const categoryProducts = Data.category_products[selectedCityId] || [];
  if (!city) return; 
  const sectionHTML = `
    <section class="section"id="${city.name}">
      <h2 class="heading">Rooms to Rent and Homestays in  ${city.name}, India</h2>
      <p class="paragrag">We have found ${categoryProducts.length} homestays in  ${city.name}, India for your stay...</p>
      <div class="homestay-list">
        ${categoryProducts.map(itemId => {
          const item = Data.cartItems[itemId];
          if (!item) return '';
          return `
            <div class="cartes">
              <div class="cart-items" style="background-image: url(${item.backgroundimgUrl});">
                <img src="${item.imgurl}" alt="${item.name}">
              </div>
              <div class="title-containers">
                <h3 class="name">${item.name}</h3>
                <h4 class="address">${item.address}</h4>
                <div class="review">
                  <img src="https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg" alt="Review Score">
                  <p>${item.reviews} Reviews</p>
                </div>
                <p class="distance">Distance from center: ${item.distance}</p>
                <p class="price">₹${item.price} PER NIGHT</p>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;

  document.querySelector('.right-div').innerHTML = sectionHTML;
}


function renderSecondPhase(selectedCityId) {
  renderCitySections(selectedCityId);
}
document.getElementById('go-to-second-page').addEventListener('click', function(event) {
  event.preventDefault(); 
  const selectedCity = document.getElementById('city-dropdown').value;
  const container = document.querySelector('#container');
  container.style.backgroundImage = 'none';
  container.innerHTML = ` 
    <div class="header">
      <div class="secondface">
        <div class="left-side">
          <img id="go-back-to-first-page"
               src="https://www.homestay.com/assets/logo-homestay-a2a7f2814cbfa356e29c846b314b58d512acdfc5750a0c7246ff81432cf8c713.svg"
               width="140px">
        </div>
        <div class="right-side">
          <div>DESTINATIONS</div>
          <div>CONTACT HOSTS</div>
          <div>₹ INR</div>
          <div>SIGN UP</div>
          <div>LOG IN</div>
          <div>ENGLISH</div>
          <div>HELP</div>
          <div>LIST A ROOM</div>
        </div>
      </div>
    </div>
    <div class="main2">
      <form class="forms">
        <input type="text" name="destination" placeholder="Where do you want to go?">
        <input type="date" name="checkin">
        <input type="date" name="checkout">
        <input class="four" type="dropdown">
        <input class="search" type="search" placeholder="Search">
        <div>FILTERS(0)</div>
        <div class="range">
          <label for="range">PRICE RANGE </label>
          <input type="range" id="range" name="range" min="0" max="1000">
        </div>
        <div>SORTING</div>
      </form>
      <div class="maincontaner">
        <div class="left-div">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcd7Bx5JOUuUiK9f0pMLpsfLYlWfQZYMT-w&s">
        </div>
        <div class="right-div"></div>
      </div>
    </div>
  `;
  renderSecondPhase(selectedCity);
});