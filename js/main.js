const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
const stopBtn = document.querySelector('.stop')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.fa-question')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

const colorBtn = document.querySelector('.fa-paint-brush')
const colorPanel = document.querySelector('.colors')
const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')
let root = document.documentElement

let countTime
let minutes = 0
let seconds = 0

let timesArr = []

const handleStart = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:00`
		}
	}, 200)
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

	if (stopwatch.textContent !== `0:00`) {
		time.style.visibility = 'visible'
		timesArr.push(stopwatch.textContent)
		console.log(timesArr)
	}

	clearStuff()
}

const handleReset = () => {
	clearStuff()
	time.style.visibility = 'hidden'
	timesArr = []
}

const clearStuff = () => {
	clearInterval(countTime)
	stopwatch.textContent = `0:00`
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

const showHistory = () => {
	timeList.textContent = ''
	let num = 1

	timesArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`
		timeList.appendChild(newTime)
		num++
	})
}

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}

	modalShadow.classList.toggle('modal-animation')
}

// const changeColor = () => {

// }

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => (e.target === modalShadow ? showModal() : false))

colorBtn.addEventListener('click', () => {
	colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(250, 20, 6)')
	root.style.setProperty('--hover-color', 'rgb(153, 12, 4)')
})
colorTwo.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(84, 216, 43)')
	root.style.setProperty('--hover-color', 'rgb(42, 109, 22)')
})
colorThree.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(60, 157, 223)')
	root.style.setProperty('--hover-color', 'rgb(28, 77, 109)')
})
