const clock1 = document.querySelector('#clock1')
const clock2 = document.querySelector('#clock2')
const clock3 = document.querySelector('#clock3')
const footerDate = document.querySelector('.date')

const tick = () => {
  const clock1Now = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}))
  const clock2Now = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"}))
  const clock3Now = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/London"}))

  setDate(clock1, clock1Now)
  setDate(clock2, clock2Now)
  setDate(clock3, clock3Now)

  const now = new Date()
  printDate(now)
}

const setDate = (clock, date) => {
  const secondsHand = clock.querySelector('.clock__hand_sec')
  const minsHand = clock.querySelector('.clock__hand_min')
  const hoursHand = clock.querySelector('.clock__hand_hour')

  const secondsDegrees = ((date.getSeconds() / 60) * 360) + 90
  const minsDegrees = ((date.getMinutes() / 60) * 360) + 90
  const hoursDegrees = ((date.getHours() / 12) * 360) + 90

  if (date.getSeconds() === 0) {
    secondsHand.classList.add('clock__hand_no-animation')
  } else {
    secondsHand.classList.remove('clock__hand_no-animation')
  }

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
  minsHand.style.transform = `rotate(${minsDegrees}deg)`
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}

const printDate = (date) => {
  const hh = date.getHours()<10 ? '0'+date.getHours() : date.getHours()
  const mm = date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes()
  const ss = date.getSeconds()<10 ? '0'+date.getSeconds() : date.getSeconds()
  const weekday = new Intl.DateTimeFormat('en-EN', { weekday: 'long'}).format(date)
  const day = date.getDate()
  const month = date.toLocaleString('en-EN', { month: 'long' })
  const year = date.getFullYear()
  footerDate.innerHTML = `${hh}:${mm}:${ss} ${weekday}, ${day} ${month} ${year}`
}

setInterval(tick, 1000)

console.log('%cСамопроверка задания:', 'color: green; font-size: 20px')
console.log('- [x] Первый этап. Повторить исходный проект (10/10)')
console.log('- [x] Второй этап. Обязательный дополнительный фукционал (printDate()) (10/10)')
console.log('- [x] Третий этап. Дополнительный фукционал (2) (10/10)')
console.log('   - [x] приложение, которое показывает время в разных точках планеты')
console.log('   - [x] мобильная версия приложения')
console.log('%cИтого: ', 'color: green;', '30/30 👌😉')
