
import { formatoMexico, trunc } from '../modules/helpers.js'

class UI {
  genderCards(genders, section) {
    for (let i = 0; i < genders.length; i++) {
      const gender = genders[i]
      let div = document.createElement('div')
      div.className = 'gender-card m-5'
      div.id = `${gender.toLowerCase()}-container`
      div.innerHTML = `${gender}`
      section.appendChild(div)
    };

  }

  removeContainerContent(section) {
    section.innerHTML = ``
    section.classList.remove('d-flex')
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
    let searchId = document.getElementById('search-container')
    searchId.innerHTML = `
                <form id="Form" class="form-group display-flex" draggable="true">
                    <input type="text" class="col-sm-12 form-control mr-2" id="filter" placeholder="Search Products">
                </form>
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
      div.className = 'col-sm-6 col-md-4 col-lg-3 mb-3'
      div.innerHTML = `
            <div class="card">
                <img src=${product.imageURL} class="card-img-top wh-d" alt="...">
                <div class="card-body">
                    <span>${product.name.toLowerCase()}</span>
                    <p><strong>${price}</strong></p>
                </div>
            </div>`
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
  addMainContainer(contenedor) {

    let div = document.createElement('div')
    div.className = 'container'
    div.innerHTML = `
        <div class="card card-body pl-0 pb-2 bor" id="nav-container">
            <div class="row" id="row">
                <nav class="col-lg-7 col-md-12 col-sm-4" id="breadcrumb-container" aria-label="breadcrumb"></nav>
                <div class="col-lg-5 col-md-12 col-sm-8" id="search-container"></div>
            </div>
        </div>
        <div class="row contenedor">
            <div class="col-md-2 mb-3 card mr-3 bor" id="vertical-nav"></div>
            <div class="col-md-10 row pr-0" id="cards-container"></div>
        </div>
        `
    contenedor.appendChild(div)
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