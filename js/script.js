class MenuAnim {
  constructor(mobileMenu, menuList, menuLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.menuList = document.querySelector(menuList);
    this.menuLinks = document.querySelectorAll(menuLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.menuLinks.forEach( (link, index) => {
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `menuStyleFade 0.5s ease forwards ${index / 7 + 0.3}s`)
    });
  }

  handleClick() {
    this.menuList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}


const menuAnim = new MenuAnim(".mobile-menu", ".menu-list", ".menu-list li");

menuAnim.init();

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });