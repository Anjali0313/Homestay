function renderContener(){
    const container=document.querySelector("#container");
    container.innerHTML=`    <header>
                <div class="left-side">
                    <img src="https://www.homestay.com/assets/logo-homestay-a2a7f2814cbfa356e29c846b314b58d512acdfc5750a0c7246ff81432cf8c713.svg" width="140px">
                </div>
                <div class="right-side">
                    <div>DESTINATIONS</div>
                    <div>INSPIRE ME</div>
                    <div>SIGN UP</div>
                    <div>LOG IN</div>
                    <div>ENGLISH</div>
                    <div>HELP</div>
                    <div>LIST A ROOM</div>
                </div>
        </header>
        <div class="main" id="main">
            <div class="main-box">
            <h1>Find Your Home Away From Home</h1>
            <form id="search-form">
                 <select id="city-dropdown"class="input">
                    <option value="1">Rajasthan</option>
                    <option value="2">Delhi</option>
                 </select>
                <input class="input" type="date" name="checkin" >
                <input class="input"type="date" name="checkout" >
                <input  class="input"id="four"type="dropdown">
                <input  class="input"id="go-to-second-page" type="search" value="search" placeholder="Search">
            </form>
            </div> 
    </div>
    <div class="sticky-head">
      <a href="#monetise">LIST A ROOM</a>
      <a href="#visiter">TRAVAL</a>
      <a href="#homestayInspiration">INSPIRE ME</a>
      <a href="#homestayWeLove">OUR PICKS</a>
      <a  class="pinkdiv"href="#container">Find a homestay</a>
    </div>
    <main>
        
     <div class="video"id="visiter"></div>
     <div id="reviews-container"></div>
     <button id="Customer-reviews">See Customer Reviews</button>
       <div id="monetise"></div>
       <div id="true"></div>
       <div id="homestay">
        <div id="homestayInspiration"></div>
        <div id="homestayWeLove"></div>
       </div>
    </main>
   
        <footer>
            <div>
                <strong>COMPANY</strong>
                <p>About Us</p>
                <p>Press</p>
                <p>Become an Affiliate</p>
                <p>Work with us</p>
                <p>Contact Us</p>
            </div>
            <div>
                <strong>EXLORE</strong>
                <p>Reviews</p>
                <p>Blog</p>
                <p>Find Guests</p>
                <p>Inspire me</p>
                <p>Invite Friends</p>
            </div>
            <div>
                <strong>CUSTOMER SERVICE</strong>
                <p>Need Help?</p>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </footer>`
}
function renderVideoDiv() {
      const container =document.querySelector(".video");
      container.innerHTML=
     `    <p class="heading">Don't just visit, live it!</p>
        <p class="paragraph">Homestay.com connects host families with students and independent travellers looking for accommodation. The Homestay community offers you the opportunity to live with a local and to truly discover your destination. We offer a wide selection of rooms for both long and short term accommodation that offer great value for money, leaving you with more to spend enjoying your trip.</p>
        <div class=videodiv>
            <iframe width="760" height="315" src="https://www.youtube.com/embed/B0uYcxvPf1A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="chat"></div>
        </div>`
}
function displayReviews() {
    const container = document.getElementById("reviews-container");
    container.innerHTML = reviewsData.map(review => `
        <div class="review">
            <img src="${review.image}" alt="Reviewer Image">
            <div class="review-div">
            <p>${review.title}</p>
            <img src="${review.images}" alt="Rating">
            <a href="#">${review.name}</a>
            </div>
        </div>
    `).join('');
}

function renderMonetise() {
    const container = document.querySelector("#monetise");
    container.innerHTML =`
        <div class="monetis">
        <h2>Monetise your spare room</h2>
        <p>Earn extra income renting out your spare room to international students, tourists and professionals.</p>
        <button>List your property here</button> 
        </div>   
        <img src="https://www.homestay.com/assets/promotions/orange_bed-96c5597c1f1b641729a5523b543fbf44b6508237ef81816347f5b10dc95c4485.jpg">
    `
}

function renderTrue(){
    const container =document.querySelector("#true");
    container.innerHTML =trueValue.map(item=>
        `<img src="${item.svg}" width="50px" height="50px">
        <div>
        <h2>${item.heading}</h2>
        <p>${item.ptag}</p>
        </div>`
    ).join("");
    
}


function renderInspiration() {
    const Inspire = document.querySelector('#homestayInspiration');
    let InspiresectionHTML = `

        <div>
            <h2>${homestayInspriation.sectionTitle}</h2>
            <p>${homestayInspriation.sectionDescription}</p>
        </div>
        <div class="Cart1">
            ${homestayInspriation.cartItems.map(item => `
            <div class="cart-item" style="background-image: url(${item.imgUrl});">
                <div class="title-container">
                    <h4 class="name">${item.title}</h4>
                    <button class="explore-btn">Explore Me</button>
                </div>
            </div>
            `).join('')}
        </div>
    
    `;

    Inspire.innerHTML = InspiresectionHTML;
}
function renderHomestayWeLove() {
    const ourPicks = document.querySelector('#homestayWeLove');

    let sectionHTML = `
    
        <div>
            <h2>${ourPicksData.sectionTitle}</h2>
        </div>
        <div class="picks-container">
            ${ourPicksData.homestays.map(item => `
            <div class="pick-item" style="background-image: url(${item.imgUrl});">
                <div class="info-container">
                    <h4 class="name">${item.name}</h4>
                    <h5 class="location">${item.location}</h5>
                    <span class="price">
                        Book now from 
                        <span class="price-amount">
                            <span class="currency_symbol">${item.currency}</span> ${item.price}
                        </span>
                    </span>
                </div>
            </div>
            `).join('')}
        </div>
   
    `;

    ourPicks.innerHTML = sectionHTML;
}

function renderHomeStay() {
    renderContener()
    renderVideoDiv();
    displayReviews();
    renderMonetise();
    renderTrue();
    renderInspiration();
    renderHomestayWeLove();

}
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'go-back-to-first-page') {
      renderHomeStay();
    }
  });
renderHomeStay();
