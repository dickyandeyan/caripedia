const showBtn = document.getElementById('show-location')
const showBtnHandle = document.getElementById('handle-location')
const pillsPedia1 = document.getElementById('pills-pediasure-tab')
const pillsPedia2 = document.getElementById('pills-pediacomplete-tab')
const pillsPedia1Content = document.getElementById('pills-pediasure')
const pillsPedia2Content = document.getElementById('pills-pediacomplete')
const filterButton = document.getElementById('filter-button')
const filterHandle = document.getElementById('handle-filter')

pillsPedia1.addEventListener('click', () => {
   pillsPedia1.classList.add('active')
   pillsPedia2.classList.remove('active')
   pillsPedia1Content.classList.add('show__')
   pillsPedia1Content.classList.add('active')
})

pillsPedia2.addEventListener('click', () => {
   pillsPedia2.classList.add('active')
   pillsPedia1.classList.remove('active')
   pillsPedia2Content.classList.add('show__')
   pillsPedia2Content.classList.add('active')
   pillsPedia1Content.classList.remove('show__')
   pillsPedia1Content.classList.remove('active')
})

showBtn.addEventListener('click', () => {
   showHideLocation();
   showBtn.classList.add('d-none')
})

showBtnHandle.addEventListener('click', () => {
   showHideLocation();
   showBtn.classList.toggle('d-none')
})

filterButton.addEventListener('click', () => {
   showFilterNav()
})

filterHandle.addEventListener('click', () => {
   showFilterNav()
})

const showFilterNav = () => {
   const filterNav = document.getElementById('nav-show-filter')
   filterNav.classList.toggle('d-none')
}

const showHideLocation = () => {
	const locContetn = document.getElementById('location-content')
	locContetn.classList.toggle('d-none')
}

