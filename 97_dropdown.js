const searchCountryBtn = document.querySelector('.select');
const mainBox = document.querySelector('.box');
const contryBox = document.querySelector('.contries');
const searchValue = document.querySelector('.search');

const countries = [
    { id: 1, country: 'Afghanistan' },
    { id: 2, country: 'Albania' },
    { id: 3, country: 'Algeria' },
    { id: 4, country: 'Andorra' },
    { id: 5, country: 'Angola' },
    { id: 6, country: 'Antigua and Barbuda' },
    { id: 7, country: 'Argentina' },
    { id: 8, country: 'Armenia' },
    { id: 9, country: 'Australia' },
    { id: 10, country: 'Austria' },
    { id: 11, country: 'Azerbaijan' },
    { id: 12, country: 'Bahamas' },
    { id: 13, country: 'Bahrain' },
    { id: 14, country: 'Bangladesh' },
    { id: 15, country: 'Barbados' },
    { id: 16, country: 'Belarus' },
    { id: 17, country: 'Belgium' },
    { id: 18, country: 'Belize' },
    { id: 19, country: 'Benin' },
    { id: 20, country: 'Bhutan' },
    { id: 21, country: 'Bolivia' },
    { id: 22, country: 'Bosnia and Herzegovina' },
    { id: 23, country: 'Botswana' },
    { id: 24, country: 'Brazil' },
    { id: 25, country: 'Brunei' },
    { id: 26, country: 'Bulgaria' },
    { id: 27, country: 'Burkina Faso' },
    { id: 28, country: 'Burundi' },
    { id: 29, country: 'Cabo Verde' },
    { id: 30, country: 'Cambodia' },
    { id: 31, country: 'Cameroon' },
    { id: 32, country: 'Canada' },
    { id: 33, country: 'Central African Republic' },
    { id: 34, country: 'Chad' },
    { id: 35, country: 'Chile' },
    { id: 36, country: 'China' },
    { id: 37, country: 'Colombia' },
    { id: 38, country: 'Comoros' },
    { id: 39, country: 'Congo (Congo-Brazzaville)' },
    { id: 40, country: 'Congo (Congo-Kinshasa)' },
    { id: 41, country: 'Costa Rica' },
    { id: 42, country: 'Croatia' },
    { id: 43, country: 'Cuba' },
    { id: 44, country: 'Cyprus' },
    { id: 45, country: 'Czech Republic' },
    { id: 46, country: 'Denmark' },
    { id: 47, country: 'Djibouti' },
    { id: 48, country: 'Dominica' },
    { id: 49, country: 'Dominican Republic' },
    { id: 50, country: 'Ecuador' },
    { id: 51, country: 'Egypt' },
    { id: 52, country: 'El Salvador' },
    { id: 53, country: 'Equatorial Guinea' },
    { id: 54, country: 'Eritrea' },
    { id: 55, country: 'Estonia' },
    { id: 56, country: 'Eswatini' },
    { id: 57, country: 'Ethiopia' },
    { id: 58, country: 'Fiji' },
    { id: 59, country: 'Finland' },
    { id: 60, country: 'France' },
    { id: 61, country: 'Gabon' },
    { id: 62, country: 'Gambia' },
    { id: 63, country: 'Georgia' },
    { id: 64, country: 'Germany' },
    { id: 65, country: 'Ghana' },
    { id: 66, country: 'Greece' },
    { id: 67, country: 'Grenada' },
    { id: 68, country: 'Guatemala' },
    { id: 69, country: 'Guinea' },
    { id: 70, country: 'Guinea-Bissau' },
    { id: 71, country: 'Guyana' },
    { id: 72, country: 'Haiti' },
    { id: 73, country: 'Honduras' },
    { id: 74, country: 'Hungary' },
    { id: 75, country: 'Iceland' },
    { id: 76, country: 'India' },
    { id: 77, country: 'Indonesia' },
    { id: 78, country: 'Iran' },
    { id: 79, country: 'Iraq' },
    { id: 80, country: 'Ireland' },
    { id: 81, country: 'Israel' },
    { id: 82, country: 'Italy' },
    { id: 83, country: 'Jamaica' },
    { id: 84, country: 'Japan' },
    { id: 85, country: 'Jordan' },
    { id: 86, country: 'Kazakhstan' },
    { id: 87, country: 'Kenya' },
    { id: 88, country: 'Kiribati' },
    { id: 89, country: 'Kuwait' },
    { id: 90, country: 'Kyrgyzstan' },
    { id: 91, country: 'Laos' },
    { id: 92, country: 'Latvia' },
    { id: 93, country: 'Lebanon' },
    { id: 94, country: 'Lesotho' },
    { id: 95, country: 'Liberia' },
    { id: 96, country: 'Libya' },
    { id: 97, country: 'Liechtenstein' },
    { id: 98, country: 'Lithuania' },
    { id: 99, country: 'Luxembourg' },
    { id: 100, country: 'Madagascar' },
    { id: 101, country: 'Malawi' },
  { id: 102, country: 'Malaysia' },
  { id: 103, country: 'Maldives' },
  { id: 104, country: 'Mali' },
  { id: 105, country: 'Malta' },
  { id: 106, country: 'Marshall Islands' },
  { id: 107, country: 'Mauritania' },
  { id: 108, country: 'Mauritius' },
  { id: 109, country: 'Mexico' },
  { id: 110, country: 'Micronesia' },
  { id: 111, country: 'Moldova' },
  { id: 112, country: 'Monaco' },
  { id: 113, country: 'Mongolia' },
  { id: 114, country: 'Montenegro' },
  { id: 115, country: 'Morocco' },
  { id: 116, country: 'Mozambique' },
  { id: 117, country: 'Myanmar' },
  { id: 118, country: 'Namibia' },
  { id: 119, country: 'Nauru' },
  { id: 120, country: 'Nepal' },
  { id: 121, country: 'Netherlands' },
  { id: 122, country: 'New Zealand' },
  { id: 123, country: 'Nicaragua' },
  { id: 124, country: 'Niger' },
  { id: 125, country: 'Nigeria' },
  { id: 126, country: 'North Korea' },
  { id: 127, country: 'North Macedonia' },
  { id: 128, country: 'Norway' },
  { id: 129, country: 'Oman' },
  { id: 130, country: 'Pakistan' },
  { id: 131, country: 'Palau' },
  { id: 132, country: 'Panama' },
  { id: 133, country: 'Papua New Guinea' },
  { id: 134, country: 'Paraguay' },
  { id: 135, country: 'Peru' },
  { id: 136, country: 'Philippines' },
  { id: 137, country: 'Poland' },
  { id: 138, country: 'Portugal' },
  { id: 139, country: 'Qatar' },
  { id: 140, country: 'Romania' },
  { id: 141, country: 'Russia' },
  { id: 142, country: 'Rwanda' },
  { id: 143, country: 'Saint Kitts and Nevis' },
  { id: 144, country: 'Saint Lucia' },
  { id: 145, country: 'Saint Vincent and the Grenadines' },
  { id: 146, country: 'Samoa' },
  { id: 147, country: 'San Marino' },
  { id: 148, country: 'Sao Tome and Principe' },
  { id: 149, country: 'Saudi Arabia' },
  { id: 150, country: 'Senegal' },
  { id: 151, country: 'Serbia' },
  { id: 152, country: 'Seychelles' },
  { id: 153, country: 'Sierra Leone' },
  { id: 154, country: 'Singapore' },
  { id: 155, country: 'Slovakia' },
  { id: 156, country: 'Slovenia' },
  { id: 157, country: 'Solomon Islands' },
  { id: 158, country: 'Somalia' },
  { id: 159, country: 'South Africa' },
  { id: 160, country: 'South Korea' },
  { id: 161, country: 'South Sudan' },
  { id: 162, country: 'Spain' },
  { id: 163, country: 'Sri Lanka' },
  { id: 164, country: 'Sudan' },
  { id: 165, country: 'Suriname' },
  { id: 166, country: 'Sweden' },
  { id: 167, country: 'Switzerland' },
  { id: 168, country: 'Syria' },
  { id: 169, country: 'Taiwan' },
  { id: 170, country: 'Tajikistan' },
  { id: 171, country: 'Tanzania' },
  { id: 172, country: 'Thailand' },
  { id: 173, country: 'Timor-Leste' },
  { id: 174, country: 'Togo' },
  { id: 175, country: 'Tonga' },
  { id: 176, country: 'Trinidad and Tobago' },
  { id: 177, country: 'Tunisia' },
  { id: 178, country: 'Turkey' },
  { id: 179, country: 'Turkmenistan' },
  { id: 180, country: 'Tuvalu' },
  { id: 181, country: 'Uganda' },
  { id: 182, country: 'Ukraine' },
  { id: 183, country: 'United Arab Emirates' },
  { id: 184, country: 'United Kingdom' },
  { id: 185, country: 'United States' },
  { id: 186, country: 'Uruguay' },
  { id: 187, country: 'Uzbekistan' },
  { id: 188, country: 'Vanuatu' },
  { id: 189, country: 'Vatican City' },
  { id: 190, country: 'Venezuela' },
  { id: 191, country: 'Vietnam' },
  { id: 192, country: 'Yemen' },
  { id: 193, country: 'Zambia' },
  { id: 194, country: 'Zimbabwe' }
  ];
  
searchCountryBtn.addEventListener('click' , ()=>{
    console.log('running');
    mainBox.classList.toggle('hide');
})

function appendCountries (countries){
    for(let country of countries){
        let p = document.createElement('p');
        p.innerText = country.country ; 
        contryBox.appendChild(p);
    }
}
appendCountries(countries);


function debounce(callback , delay){
    let timerId ;
    return (...args)=>{
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            callback(...args);
        } , delay);
    }
}
function handleChange(event){
    const search = event.target.value ;
    console.log(search);
    let filteredCountry = [];
    if(search.length > 0){
        filteredCountry = countries.filter(country => country.country.toLowerCase().startsWith(search.toLowerCase())  )
    }
    else{
        filteredCountry = countries ;
    }
    contryBox.innerHTML = "";
    appendCountries(filteredCountry);
}
const debounceSearch = debounce(handleChange , 500);

searchValue.addEventListener('keyup' , debounceSearch )