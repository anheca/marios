
import { formatoMexico, trunc } from '../modules/helpers.js'

class UI {
  genderCards(genders, section) {
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

  search() {
    let searchId = document.getElementById('nav-form')
    searchId.innerHTML = `
      <input type="text" class="form-control" id="filter" placeholder="Search Products">
    `
    let filterInput = document.getElementById('filter');
    filterInput.addEventListener('keyup', this.filterProducts);
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
        <img src=${product.imageURL} class="card-img-top wh-d" alt="...">
        <div class="card-body">
            <span>${product.name.toLowerCase()}</span>
            <p><strong>${price}</strong></p>
        </div>
      `
      list.appendChild(div);
    }
  }

  // Filtra los productos //
  filterProducts() {
    let filterValue = document.getElementById('filter').value.toUpperCase().trim();

    let cardsContainer = document.getElementById('cards-container');
    let cards = cardsContainer.querySelectorAll('div.col-sm-6');

    for (let i = 0; i < cards.length; i++) {
      let p = cards[i].getElementsByTagName('span')[0];
      if (p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        cards[i].style.display = '';
      } else {
        cards[i].style.display = 'none';
      }
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
        <div class="mb-3 mt-3">
            <p class="font-weight-light" id="VN-title-inicio"><a href="#"><span><</span> INICIO</a></p>
        </div>
        <div class="mb-3 caja">
            <h5 class="mb-2" id="${titleId}">${gender}</h5>
            <ul class="list-group" id="${productsId}"></ul>
        </div>
     `
  }
}

export default UI