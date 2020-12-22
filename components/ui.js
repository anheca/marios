import { formatoMexico, trunc } from '../modules/helpers.js'

class UI {
  genderCards(section, genders) {
    section.style.display = ''
    for (let i = 0; i < genders.length; i++) {
      const gender = genders[i]
      let div = document.createElement('div')
      div.className = 'gender-card'
      div.id = `${gender.toLowerCase()}-container`
      div.innerHTML = `${gender}`
      section.appendChild(div)
    };
  }

  search() {
    let searchId = document.getElementById('nav-form')
    searchId.innerHTML = `
      <input id="filter" class="form-control" type="text" placeholder="Search Products">
    `
    let filterInput = document.getElementById('filter');
    filterInput.addEventListener('keyup', this.filterProducts);
  }

  // Filtra los productos //
  filterProducts() {
    let filterValue = document.getElementById('filter').value.toUpperCase().trim();

    let cardsContainer = document.getElementById('cards-container');
    if (cardsContainer === null) {
      console.log('implementa seccion hombre / mujer')
    } else {
      let cards = cardsContainer.querySelectorAll('.card');
      for (let i = 0; i < cards.length; i++) {
        let cardValue = cards[i].children[1].children[0].innerHTML;
        if (cardValue.toUpperCase().indexOf(filterValue) > -1) {
          cards[i].style.display = '';
        } else {
          cards[i].style.display = 'none';
        }
      }
    }
  }

  displayNone(section) {
    const parentSection = section.parentNode
    let children = parentSection.children
    for (let i = 0; i < children.length; i++) {
      if (children[i].id != section.id) {
        children[i].style.display = 'none'
        children[i].innerHTML = ''
      } section.style.display = ''
    }
  }

  changeRoot(customVar, value) {
    let root = document.querySelector(':root')
    root.style.setProperty(customVar, value)
  }

  changeStyle(section, clase) {
    section.classList.add(clase)
  }


  breadcrumb(arr) {
    const className = 'breadcrumb'
    const elementId = 'breadcrumb-container'
    const liClassName = 'breadcrumb-item'

    let breadcrumbId = document.getElementById(elementId)
    let ol = document.createElement('ol')
    ol.className = className

    arr.forEach(crumb => {
      let li = document.createElement('li')
      let a = document.createElement('a')
      a.innerHTML = `${crumb.toUpperCase()}`
      li.className = liClassName
      li.appendChild(a)
      ol.appendChild(li)
    })
    ol.lastElementChild.classList.add('active')
    breadcrumbId.innerHTML = ""
    breadcrumbId.appendChild(ol)
  }




  listCards(products) {

    const list = document.getElementById('cards-container')
    list.innerHTML = ''
    for (let i = 0; i < products.length; i++) {
      const product = products[i]
      const price = `$ ${formatoMexico(trunc(product.price, 2))}`
      let div = document.createElement('div')
      div.className = 'card'
      div.innerHTML = `
      <div class="card-img">
        <img src=${product.imageURL} class="card-img-top" alt="...">
        <img src="img/shape.png" class="card-shape">
        <div class="tj-cart" type="button">+<i class="fas fa-shopping-cart"></i></div>
      </div>
        <div class="card-body">
            <span>${product.name.toLowerCase()}</span>
            <p><strong>${price}</strong></p>
        </div>
      `
      list.appendChild(div);
    }
  }

  // agrega contenedor de cartas
  addShopContainer(contenedor) {
    contenedor.innerHTML = `
      <div class="card bor" id="vertical-nav"></div>
      <div class="row" id="cards-container"></div>
    `
  }

  addVerticalContainer({ container, titleId, productsId, gender }) {
    container.innerHTML = `
        <div class="my-3">
            <p class="font-weight-light" id="VN-title-inicio"><a href="#"><span><</span> INICIO</a></p>
        </div>
        <div class="caja">
            <h5 class="mb-2" id="${titleId}">${gender.toUpperCase()}</h5>
            <ul class="list-group" id="${productsId}"></ul>
        </div>
     `
  }
}

export default UI