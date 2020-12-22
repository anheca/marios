import ProductService from '../services/productService.js'

const ps = new ProductService()


class VerticalNav {
  verticalNav($verticalNav, valueTxt = 'Error', products) {
    valueTxt = valueTxt.split('-')
    let txt = valueTxt[0].toLocaleUpperCase()

    let titleId = `title-${txt.toLocaleLowerCase()}`
    let productsId = `products-${txt.toLocaleLowerCase()}`
    $verticalNav.innerHTML = `
        <div class="mb-1 mt-1">
            <p class="font-weight-light" id="VN-title-inicio"><a href="#"><span><</span> INICIO</a></p>
        </div>
        <div class="mb-3 caja">
            <h5 class="mb-2" id="${titleId}">${txt}</h5>
            <ul class="list-group" id="${productsId}"></ul>
        </div>
        `
    const titleProducts = document.getElementById(titleId)
    titleProducts.addEventListener('click', this.functionTitle)
    const filterUno = document.getElementById(productsId)
    filterUno.addEventListener('click', this.ChangeUl)
    this.typesOfProducts(products, filterUno)
  }

  // Añade los li a las ul  pt-1 //
  typesOfProducts({ container: containerList, types }) {
    // debugger
    containerList.innerHTML = ''
    for (let i = 0; i < types.length; i++) {
      const type = types[i]
      let li = document.createElement('li')

      let attributo = document.createAttribute("id")
      attributo.value = `${type}`
      li.setAttributeNode(attributo);

      li.className = 'list-group-item li'
      li.innerHTML = `${type}`
      containerList.appendChild(li)
    }
  }


  changeVerticalNavContent(props) {
    props.container.innerHTML = `
    <div class="mb-1 mt-1">
        <p class="font-weight-light" id="VN-title"><a href="#"><span><</span> ${props.gender.toLocaleUpperCase()}</a></p>
    </div>
    <div class="mb-3 caja">
        <h5 class="mb-2" id="${props.idH5}">${props.valueTxt}</h5>
        <ul class="list-group" id="${props.idUl}"></ul>
    </div>
    `
  }

}

export default VerticalNav