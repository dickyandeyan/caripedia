const showBtn = document.getElementById('show-location')
const showBtnHandle = document.getElementById('handle')

showBtn.addEventListener('click', () => {
   showHideLocation();
   showBtn.classList.add('d-none')
})

showBtnHandle.addEventListener('click', () => {
   showHideLocation();
   showBtn.classList.toggle('d-none')
})

const showHideLocation = () => {
	const locContetn = document.getElementById('location-content')
	locContetn.classList.toggle('d-none')
}
