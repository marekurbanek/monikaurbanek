document.addEventListener('DOMContentLoaded', function () {
  initNavigation()
})

const navToggleBtn = document.querySelector('.navigation__toggle')
const closeBtn = document.querySelector('.navigation__toggle__close')
const openBtn = document.querySelector('.navigation__toggle__open')
const navigation = document.querySelector('.navigation')

const initNavigation = function () {
  navToggleBtn.addEventListener('click', navClicked)
}

const navClicked = function () {
  changeBtnVisibility()
  toggleNavigation()
}

const changeBtnVisibility = function () {
  closeBtn.classList.toggle('u-hidden')
  openBtn.classList.toggle('u-hidden')
}

const toggleNavigation = function () {
  navigation.classList.toggle('navigation--responsive')
}