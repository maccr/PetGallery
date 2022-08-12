/**  Fixed Filter **/
window.onscroll = function() { fixFilter() };
const filter = document.getElementById("filter");
const bg = document.getElementById("headerBg");
const stick = 122;
// Add the fixed filter on scroll from top
function fixFilter() {
    if (window.pageYOffset >= stick) {
        filter.classList.add("stick");
        bg.style.opacity = "1";
    } else {
        filter.classList.remove("stick");
        bg.style.opacity = "0";
    }
}

/** target selectors **/
const catsList = document.querySelectorAll('div.cat');
const dogsList = document.querySelectorAll('div.dog');
const birdsList = document.querySelectorAll('div.bird');
const allList = document.querySelectorAll('div.card');


/** hide and show functions **/
const show = (list) => {
    for (let i = 0; i < list.length; i++) {
        list[i].classList.add("show");
    }
}
const hidePet = () => {
    for (let i = 0; i < allList.length; i++) {
        allList[i].classList.remove("show");
    }
}

// add images to Selected Filter
const addImage = () => {
    const imgUrl = document.querySelector('.custom-option.selected i');
    const clone = imgUrl.cloneNode(true);
    const petShow = document.querySelector('.select__trigger span');
    petShow.prepend(clone);
}


/* blur images */
const blurEl = document.querySelector('section.gridWrap');
const unfocus = () => { blurEl.classList.toggle("unFocus") }

/** Begin by showing all pets **/
show(allList);

/** Custom dropdown select (borrowed & modified) **/
document.querySelector('.select-wrapper').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
    unfocus(); // Apply blur to image container when dropdown opened

})
for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {

        if (!this.classList.contains('selected')) {

            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');

            const pet = this.closest('.select').querySelector('.select__trigger span');
            pet.textContent = this.textContent;

            /** end custom select **/

            selectedPet = this.textContent.toLowerCase();
            console.log(selectedPet);

            switch (selectedPet) {

                case 'all':
                    console.log('you selected allpets');
                    addImage();
                    show(allList);
                    break;

                case 'cats':
                    console.log('you selected cats');
                    addImage();
                    hidePet();
                    show(catsList);
                    break;

                case 'dogs':
                    console.log('you selected dogs');
                    addImage();
                    hidePet();
                    show(dogsList);
                    break;

                case 'birds':
                    addImage();
                    hidePet();
                    console.log('you selected birds');
                    show(birdsList);
                    break;

                default:
                    console.log('Default: No selection')
            }
        }
    })
}


/**** Alternate dropdown options ****/

// CSS dropdown option but doesn't mimic select properly //
/* HTML eg <li id="cats" onclick="showPet(cats)">Cats</li>
HTML uses input and label - target with input#:checked + label ... 

const showPet = (x) => {

    const selectedPet = x.id;
    begin assignment with switch...
    
}*/

// standard select listener option (limited styling) //
/*  document.getElementById("petChoice").addEventListener("change", function() {
    const select = this;
    const selectedValue = select.options[select.selectedIndex].value;
    console.log(selectedValue);

    begin assignment with switch or for...

})*/