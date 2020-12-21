
import ProductService from './services/productService.js'
import UI from './components/ui.js'
import VerticalNav from './components/verticalbar.js'
import Breadcrumb from './components/breadcrumb.js'

const ps = new ProductService()
const vb = new VerticalNav()
const ui = new UI()
const breadcrumb = new Breadcrumb()


const section = document.getElementById('main-section')
let allProducts = ps.getActiveProducts()
let productsGender = 'hola mundo';

const generos = ps.getALLGenders(allProducts)



// listen Items
window.addEventListener("load", bodyLoaded)
// Seccion //
section.addEventListener('click', genderClicked)
// Breadcrumb //
breadcrumb.add('inicio')


// La pagina inicial cargada //
function bodyLoaded () {
    ui.genderCards(generos, section)
}

// Click a genero //
function genderClicked (e) {
    const valueTxt = e.target.id
    const genderSplit = valueTxt.split('-')
    const gender = genderSplit[0]

    if (gender == 'hombre' || gender == 'mujer') {
        ui.removeContainerContent(section)
        ui.addMainContainer(section)

        const verticalNav = document.getElementById('vertical-nav')
        const propsVerticalNav = {
            container: verticalNav,
            titleId: `title-${gender.toLocaleLowerCase()}`,
            productsId: `products-${gender.toLocaleLowerCase()}`,
            texto: gender
        }

        updateBreadcrumb('add', gender)
        ui.search()
        ui.addVerticalContainer(propsVerticalNav)

        addMoreListener()

        productsGender = ps.getProductsByGender(gender)
        const productType = ps.getAllClothes(productsGender)


        const propsTypeOfProducts = {
            container: verticalBarContainer,
            types: productType
        }

        vb.typesOfProducts(propsTypeOfProducts)
        ui.listCards(productsGender)
    }
}


function addMoreListener () {
    const titleProducts = document.getElementById(propsVerticalNav.titleId)
    const verticalBarContainer = document.getElementById(propsVerticalNav.productsId)
    titleProducts.addEventListener('click', displayProductsByGender)
    verticalBarContainer.addEventListener('click', ChangeUl)
}


// Genera todas las cards del titulo //
function displayProductsByGender (e) {
    const gender = e.target.id.split('-')
    productsGender = ps.getProductsByGender(gender[1])
    ui.listCards(productsGender)
}

// Click en produc Type ... ej Bermudas //
function ChangeUl (e) {
    const gender = e.target.parentNode.previousElementSibling.textContent
    const filterId = e.target.id
    let products = ps.getProductsByGender(gender)

    const props = {
        container: document.getElementById('vertical-nav'),
        gender: gender,
        productGender: productsGender,
        idH5: `${filterId.toLowerCase()}`,
        idUl: `products-${filterId.toLowerCase()}`,
        valueTxt: filterId
    }

    vb.changeVerticalNavContent(props)
    updateBreadcrumb('add', filterId)

    const titleHombres = document.getElementById('VN-title')
    titleHombres.addEventListener('click', returnChangeUl)
    const titleProduct = document.getElementById(props.idH5)
    titleProduct.addEventListener('click', clotheTitle)
    const verticalBarContainer = document.getElementById(props.idUl)
    verticalBarContainer.addEventListener('click', productTypeSelected)


    // TODO: Refactoring
    const tempProducts = products.filter(p => {
        return p.clothe.toLowerCase().match(filterId.toLowerCase())
    })
    const productTypes = ps.getAllTypes(tempProducts)

    const propsTypeOfProducts = {
        container: verticalBarContainer,
        types: productTypes
    }

    vb.typesOfProducts(propsTypeOfProducts)
    ui.listCards(tempProducts)
}

// Regresa al inicio de la VN //
function returnChangeUl (e) {
    debugger
    let ele = e.target.textContent.split(' ')

    const props = {
        container: document.getElementById('vertical-nav'),
        gender: gender,
        productGender: productsGender,
        idH5: `${filterId.toLowerCase()}`,
        idUl: `products-${filterId.toLowerCase()}`,
        valueTxt: filterId
    }

    vb.changeVerticalNavContent(props)

    updateBreadcrumb('remove', ele)


    let productsGender = ps.getProductsByGender(ele[1])
    ui.listCards(productsGender)
}
// Cards del tipo de prenda //
function clotheTitle (e) {
    debugger
    var els = document.querySelectorAll('.list-group-item.li.active')
    els.forEach(e => {
        e.classList.remove('active')
        breadcrumbArr.pop()
        ui.breadcrumb(breadcrumbArr)
    });

    let valueTxt = e.target.id
    let gender = e.target.parentNode.previousElementSibling.firstElementChild.firstElementChild.textContent.split(' ')
    productsGender = ps.getProductsByGender(gender[1])
    let product = productsGender.filter(p => {
        return p.clothe.toLowerCase().match(valueTxt.toLowerCase())
    })
    ui.cards(product)
    document.getElementById('filter').value = ''
}

// funcion darle click a li cambia cards container //
function productTypeSelected (e) {
    var els = document.querySelectorAll('.list-group-item.li.active')

    els.forEach(e => {
        if (x = false) {
            e.classList.remove('active')
            breadcrumbArr.pop()
            ui.breadcrumb(breadcrumbArr)
        }
    });

    let gender = e.target.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.textContent.split(' ')
    let productsGender = ps.getProductsByGender(gender[1])

    let valueTxt = e.target.id
    e.target.classList.add('active')

    updateBreadcrumb('add', valueTxt)

    let product = ps.getProductsByType(valueTxt, productsGender)
    ui.listCards(product)
}

function updateBreadcrumb (action, value) {
    if (action === 'add') {
        breadcrumb.add(value)
    } else {

        breadcrumb.pop()
    }
    ui.breadcrumb(breadcrumb.elements)
}