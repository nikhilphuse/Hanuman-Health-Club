const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

window.addEventListener('scroll', () => {
  const navigation = document.querySelector('.nav');
  navigation.classList.toggle('sticky', window.scrollY > 0);
});

toggle.onclick = function () {
  toggle.classList.toggle('isActive');
  menu.classList.toggle('menuIsActive');
};
document.onclick = function (e) {
  if(e.target.id!=='toggle' && e.target.id!=='menu') {
    toggle.classList.remove('isActive');
    menu.classList.remove('menuIsActive');
  }
};