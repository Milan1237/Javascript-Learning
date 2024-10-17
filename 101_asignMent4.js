const popularCountries = [{
        id: 1,
        country: 'United States'
    },
    {
        id: 2,
        country: 'United Kingdom'
    },
    {
        id: 3,
        country: 'Canada'
    },
    {
        id: 4,
        country: 'Germany'
    },
    {
        id: 5,
        country: 'France'
    },
    {
        id: 6,
        country: 'Australia'
    },
    {
        id: 7,
        country: 'India'
    },
    {
        id: 8,
        country: 'China'
    },
    {
        id: 9,
        country: 'Japan'
    },
    {
        id: 10,
        country: 'South Korea'
    },
    {
        id: 11,
        country: 'Brazil'
    },
    {
        id: 12,
        country: 'Mexico'
    },
    {
        id: 13,
        country: 'Italy'
    },
    {
        id: 14,
        country: 'Russia'
    },
    {
        id: 15,
        country: 'Spain'
    },
    {
        id: 16,
        country: 'South Africa'
    },
    {
        id: 17,
        country: 'Argentina'
    },
    {
        id: 18,
        country: 'Saudi Arabia'
    },
    {
        id: 19,
        country: 'Turkey'
    },
    {
        id: 20,
        country: 'Netherlands'
    },
    {
        id: 21,
        country: 'Sweden'
    },
    {
        id: 22,
        country: 'Switzerland'
    },
    {
        id: 23,
        country: 'New Zealand'
    },
    {
        id: 24,
        country: 'Indonesia'
    },
    {
        id: 25,
        country: 'Pakistan'
    },
    {
        id: 26,
        country: 'Thailand'
    },
    {
        id: 27,
        country: 'Vietnam'
    },
    {
        id: 28,
        country: 'Egypt'
    },
    {
        id: 29,
        country: 'Nigeria'
    },
    {
        id: 30,
        country: 'Malaysia'
    }
];
let favoriteObject = {};

const dropDownListContainer = document.querySelector('#countries');
const favoriteListBox = document.querySelector('#favoriteList');


popularCountries.forEach(({
    country,
    id
}) => {
    const option = document.createElement('option');
    option.value = country;
    option.innerText = country;
    option.setAttribute('data-id', id);
    dropDownListContainer.appendChild(option);
});

dropDownListContainer.addEventListener('change', (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const item = selectedOption.value;
    const id = selectedOption.dataset.id;

    favoriteObject = id in favoriteObject ? favoriteObject : {
        ...favoriteObject,
        [id]: item
    }
    appendFavorite(favoriteObject);
})

function appendFavorite(object) {
    favoriteListBox.innerHTML = "";
    for (let key in object) {
        const country = object[key];
        const mainList = document.createElement('li');
        mainList.classList.add('items');
        mainList.innerText = country ;
        const icon = document.createElement('span');
        icon.classList.add('material-symbols-outlined' , 'icon') ;
        icon.innerText = 'delete';
        icon.setAttribute('data-id' , key);
        mainList.appendChild(icon);
        favoriteListBox.appendChild(mainList);
    }
}

favoriteListBox.addEventListener('click' , (event)=>{
    const id = event.target.dataset.id ;
    id && delete favoriteObject[id] ;
    appendFavorite(favoriteObject);
})