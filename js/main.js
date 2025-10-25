const lang = document.querySelector(".lang");
const langButton = document.querySelector(".lang__button");

langButton.addEventListener("click", (e) => {
  e.stopPropagation();
  langButton.classList.toggle("active")
});

document.body.addEventListener("click", (e) => {
  if (!lang.contains(e.target) && langButton.classList.contains("active")) {
    langButton.classList.remove("active");
  }
})


const menu = document.querySelector(".header__menu");
const menuButton = document.querySelector(".header__menu-button");
const menuClose = document.querySelector(".header__close");

menuButton.addEventListener("click", () => {
  document.body.classList.add("body-overflow");
  menu.classList.add("active")
});
menuClose.addEventListener("click", () => {
  document.body.classList.remove("body-overflow");
  menu.classList.remove("active")
});


class MySwiper extends Swiper {
  constructor(selector, options = {}) {
    super(selector, options);

    if (options.navigation) {
      this.forEach(item => {
        const next = item.el.querySelector(options.navigation.nextEl)
        const prev = item.el.querySelector(options.navigation.prevEl)
        if(next) next.addEventListener("click",() => item.slideNext())
        if(prev) prev.addEventListener('click',() => item.slidePrev())
      })
    }
  }


}

const aboutSwiper = new MySwiper('.about__swiper', {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.about__swiper-next',
    prevEl: '.about__swiper-prev',
  }
})


class Acordeon {
  constructor({container, item}) {
    this.itemClass = item;
    this.container = document.querySelector(container);
    this.items = document.querySelectorAll(item);
    if (this.items.length > 0) {
      this.activeItem = this.items[0]
    } else return

    this.init()
  }

  init() {
    this.container.addEventListener("click", (e) => {
      const hasItem = e.target.closest(this.itemClass);

      if (!hasItem || hasItem.classList.contains("active")) return;

      hasItem.classList.add("active");
      this.activeItem.classList.remove("active");
      this.activeItem = hasItem;
    });
  }
}

new Acordeon({
  container: '.about__list',
  item: '.about__item',
});