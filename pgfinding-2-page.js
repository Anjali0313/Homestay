document.getElementById('go-to-second-page').addEventListener('click', function (event) {
  event.preventDefault();
  const selectedCity = document.getElementById('city-dropdown').value;
  const container = document.querySelector('#container');
  container.style.backgroundImage = 'none';
  container.innerHTML = ` 
    <div class="header">
      <div class="secondface">
        <div class="left-sides">
          <img id="go-back-to-first-page"
               src="https://www.homestay.com/assets/logo-homestay-a2a7f2814cbfa356e29c846b314b58d512acdfc5750a0c7246ff81432cf8c713.svg"
               width="140px">
        </div>
        <div class="right-sides" id="nav-itemss">
          <div>DESTINATIONS</div>
          <div>CONTACT HOSTS</div>
          <div>₹ INR</div>
          <div>SIGN UP</div>
          <div>LOG IN</div>
          <div>ENGLISH</div>
          <div>HELP</div>
          <div>LIST A ROOM</div>
        </div>
          <div class="menu-iconss" id="menu-iconss">&#9776;</div>
      </div>
    </div>
    <div class="main2">
      <form class="forms">
        <input type="text" name="destination" placeholder="Where do you want to go?">
        <input type="date" name="checkin">
        <input type="date" name="checkout">
        <input class="four" type="dropdown">
        <input class="search" type="search" placeholder="Search">
          <div class="filter"id="nav-item-f">
        <details>
        <summary>FILTERS(0)</summary>
        <div class="filiter-contant">
        <div>
         <div>
          <label for="range">DISTANCE FROM CENTRE </label><br>
          <input type="range" id="range" name="range" min="0" max="1000">
         </div>
          <div >
          <strong>MEALS (0)</strong>
          <p  class="filter-item" data-filter="mealsProvided">Meals Provided</p>
          <p class="filter-item" data-filter="useKitchen">Use of Kitchen</p>
          </div>
        </div>
        <div>
         <div>
            <strong>HOST WELCOMES (0)</strong>
            <p class="filter-item" data-filter="males">Males</p>
            <p class="filter-item" data-filter="females">Females</p>
            <p class="filter-item" data-filter="couples">Couples</p>
            <p class="filter-item" data-filter="families">Families</p>
            <p class="filter-item" data-filter="students">Students</p>
         </div>
        <div>
            <strong>PETS (0)</strong>
            <p class="filter-item" data-filter="noPets">No Pets</p>
        </div>
        </div>
        <div>
         <div>
            <strong>HOBBIES(0)</strong>
            <p class="filter-item" data-filter="cooking">Cooking</p>
            <p class="filter-item" data-filter="golf">Golf</p>
            <p class="filter-item" data-filter="tennis">Tennis</p>
            <p class="filter-item" data-filter="hiking">Hiking</p>
            <p class="filter-item" data-filter="cycling">Cycling</p>
         </div>
          <div>
            <strong>ACCESSIBLITY (0)</strong>
            <p class="filter-item" data-filter="wheelchairAccessible">Wheelchair Accessible</p>
          </div>
        </div>
          <div class="filtericon" id="filtericon">filterllll</div>
        <div>
         <div>
            <strong>AMENITIES (0)</strong>
            <p class="filter-item" data-filter="wirelessInternet">Wireless Internet</p>
            <p class="filter-item" data-filter="TV">TV</p>
            <p class="filter-item" data-filter="garden">Garden</p>
            <p class="filter-item" data-filter="bikesforuse">Bikes for use</p>
            <p class="filter-item" data-filter="parking">Parking</p>
            <p class="filter-item" data-filter="swimmingPool">Swimming Pool</p>
            <p class="filter-item" data-filter="gymathome">Gym at home</p>
         </div>
        </div>
        </div>
        </details>
        </div>
         <div class="filtericon" id="filtericon">filterllll</div>
        <div class="range">
          <label for="range">PRICE RANGE </label>
          <input type="range" id="range" name="range" min="0" max="1000">
        </div>
        <div class="sortingdropdown">
            <details>
    <summary>SORTING v</summary>
    <div class="dropdown-contents">
      <div  onclick="sortProducts(event)">Our Picks</div>
      <div  onclick="sortProducts(event)">Most Reviewed</div>
      <div  onclick="sortProducts(event)">Distance</div>
      <div  onclick="sortProducts(event)">Popular</div>
    </div>
  </details>
          </div>
      </form>
                <div class="serchicon" id="serchicon">&#9776;</div>
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

function renderCitySections(selectedCityId) {
  const city = Data.cities[selectedCityId];
  const categoryProducts = Data.category_products[selectedCityId] || [];
  if (!city) return;

  const sectionHTML = `
    <section class="section" id="${city.name}">
      <h2 class="heading">Rooms to Rent and Homestays in ${city.name}, India</h2>
      <p class="paragrag">We have found ${categoryProducts.length} homestays in ${city.name}, India for your stay...</p>
      <div class="homestay-list">
        ${categoryProducts.map(itemId => {
    const item = Data.cartItems[itemId];
    if (!item) return '';
    return `
            <div class="cartes" data-id="${itemId}">
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

function setupFilterDelegation() {
  const filterContainer = document.querySelector('.filiter-contant');
  filterContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'P') {
      const parentDiv = event.target.closest('div');
      const strongTag = parentDiv.querySelector('strong');
      let count = parseInt(strongTag.textContent.match(/\d+/)[0]) || 0;
      if (event.target.classList.contains('selected')) {
        count = Math.max(0, count - 1);
        event.target.classList.remove('selected');
      } else {
        count++;
        event.target.classList.add('selected');
      }
      strongTag.textContent = strongTag.textContent.replace(/\(\d+\)/, `(${count})`);
      updateFilterSummary();
      applyFilters();
    }
  });
}
function applyFilters() {
  const selectedFilters = Array.from(document.querySelectorAll('.filter-item.selected'))
    .map(item => item.getAttribute('data-filter'));
  console.log('Selected Filters:', selectedFilters);
  const homestays = Array.from(document.querySelectorAll('.cartes'));
  const filteredHomestays = homestays.filter(homestay => {
    const itemId = homestay.getAttribute('data-id');
    const item = Data.cartItems[itemId];
    if (!item) return false;
    return selectedFilters.every(filter => {
      switch (filter) {
        case 'mealsProvided':
          return item.mealsProvided === 1;
        case 'useKitchen':
          return item.useKitchen === 1;
        case 'males':
          return item.males === 1;
        case 'females':
          return item.females === 1;
        case 'couples':
          return item.couples === 1;
        case 'families':
          return item.families === 1;
        case 'students':
          return item.students === 1;
        case 'noPets':
          return item.noPets === 1;
        case 'cooking':
          return item.cooking === 1;
        case 'golf':
          return item.golf === 1;
        case 'tennis':
          return item.tennis === 1;
        case 'hiking':
          return item.hiking === 1;
        case 'cycling':
          return item.cycling === 1;
        case 'wheelchairAccessible':
          return item.wheelchairAccessible === 1;
        case 'wirelessInternet':
          return item.wirelessInternet === 1;
        case 'TV':
          return item.TV === 1;
        case 'garden':
          return item.garden === 1;
        case 'bikesforuse':
          return item.bikesforuse === 1;
        case 'parking':
          return item.parking === 1;
        case 'swimmingPool':
          return item.swimmingPool === 1;
        case 'gymathome':
          return item.gymathome === 1;
        default:
          return true;
      }
    });
  });

  const homestayList = document.querySelector('.right-div');
  homestayList.innerHTML = '';  

  if (filteredHomestays.length === 0) {
    homestayList.innerHTML = `<p>No homestays match your filter criteria.</p>`;
  } else {
    filteredHomestays.forEach(homestay => {
      homestayList.appendChild(homestay); 
    });
  }


}
function updateFilterSummary() {
  const totalFilters = Array.from(document.querySelectorAll('.filiter-contant strong'))
    .reduce((sum, strong) => sum + parseInt(strong.textContent.match(/\d+/)[0] || 0), 0);

  document.querySelector('summary').textContent = `FILTERS (${totalFilters})`;
}

function sortProducts(event) {
  const sortType = event.target.innerText.trim();
  const itemContainer = document.querySelector(".right-div");
  let items = Array.from(itemContainer.querySelectorAll(".cartes"));
  switch (sortType) {
    case "Most Reviewed":
      items.sort((a, b) => {
        const reviewsA = parseInt(a.querySelector('.review p').innerText);
        const reviewsB = parseInt(b.querySelector('.review p').innerText);
        return reviewsB - reviewsA;
      });
      break;
    case "Distance":
      items.sort((a, b) => {
        const distA = parseFloat(a.querySelector('.distance').innerText.replace(/[^\d.]/g, ''));
        const distB = parseFloat(b.querySelector('.distance').innerText.replace(/[^\d.]/g, ''));
        return distA - distB;
      });
      break;
  }
  const homestayList = itemContainer.querySelector(".homestay-list");
  homestayList.innerHTML = "";
  items.forEach(item => homestayList.appendChild(item));
}

function renderSecondPhase(selectedCityId) {
  renderCitySections(selectedCityId);
  setupFilterDelegation();
  document.getElementById('menu-iconss').addEventListener('click', function() {
    const navItems = document.getElementById('nav-itemss');
    navItems.classList.toggle('active');
  });

}


