class ProductService {
  constructor() {
    this.products = this.getProducts()
  }

  getProducts() {
    this.products = [
      { id: 1, name: 'BERMUDA JOGGING ZIMITHFALOV', price: 1919, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/82a73042-aaa9-4aaf-b3e6-188d0a6f012c-234f04fb0da46536dd16029597594634-320-0.jpg', type: 'JOGGINGS', clothe: 'bermudas', gender: "hombre" },
      { id: 1, name: 'BERMUDA JOGGING ZIMITHFALOV', price: 1919, status: 1, imageURL: 'jj ', type: 'JOGGINGS', clothe: 'bermudas', gender: "hombre" },
      { id: 1, name: 'BERMUDA JOGGING ZIMITHFALOV', price: 1919, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/82a73042-aaa9-4aaf-b3e6-188d0a6f012c-234f04fb0da46536dd16029597594634-320-0.jpg', type: 'kaki', clothe: 'pantalones', gender: "hombre" },
      { id: 2, name: 'BERMUDA JEAN ZIMITHFALOV', price: 2371.54, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/5684d42c-c6fc-4cc9-8812-9e01f6e98f69-841121fd75c430a26316008098751700-320-0.jpg', type: 'JEANS', clothe: 'bermudas', gender: "hombre" },
      { id: 3, name: 'BERMUDA JOGGING ZIMITHFALOV', price: 2090, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/b754c9b6-0a5b-42b5-bf5b-040f4e22627a-b9e93f7b44e9aa11ef16007936419611-320-0.jpg', type: 'JOGGINGS', clothe: 'bermudas', gender: "hombre" },
      { id: 4, name: 'BERMUDA JOGGING ZIMITHFALOV', price: 2990, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/d8fe495c-260a-4d0b-b353-3c58f52d8cd7-87547dda8bbf3dec8716034038027355-480-0.jpg', type: 'JOGGINGS', clothe: 'bermudas', gender: "hombre" },
      { id: 5, name: 'BERMUDA SHORT ZIMITHFALOV', price: 3890, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/9379a258-8854-4d57-ab00-a55715299e3f-256787034ea178786f16034043087267-320-0.jpg', type: 'BERMUDAS', clothe: 'bermudas', gender: "hombre" },
      { id: 6, name: 'BERMUDA SHORT ZIMITHFALOV', price: 4090, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/256edcb7-769e-4f74-b5b8-b3a65eff3659-3a78a4804789e24b2916034036753192-320-0.jpg', type: 'BERMUDAS', clothe: 'bermudas', gender: "hombre" },
      { id: 7, name: 'BERMUDA JEAN ZIMITHFALOV', price: 2049, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/78c3a6cd-7b0e-4d34-9dd8-537ac13b31b4-d75276b0a4624208cf16051556986190-320-0.jpg', type: 'JEANS', clothe: 'bermudas', gender: "hombre" },
      { id: 8, name: 'BERMUDA JEAN ZIMITHFALOV', price: 2549, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/87204ffc-4565-46d6-90b5-29a30cfa5eae-9e92e0ce835475f96b16031475250163-320-0.jpg', type: 'JEANS', clothe: 'bermudas', gender: "hombre" },
      { id: 9, name: 'CAMISA BLANCA ZIMITHFALOV', price: 2549, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/b87ddc71-8b95-4d9f-ae84-e2d52901a7b7-84d54ddb22d095256a16033988208798-240-0.jpg', type: 'WHITE', clothe: 'camisas', gender: "hombre" },
      { id: 10, name: 'CAMISA AZUL CELESTE ZIMITHFALOV', price: 2549, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/104a2b42-d1a4-4e00-bb05-d4cd43eed36d-5828df513f8029e41e16033988338616-240-0.jpg', type: 'BLUE', clothe: 'camisas', gender: "hombre" },
      { id: 11, name: 'CAMISA ROSA R ZIMITHFALOV', price: 2549, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/eec76b76-9fae-4979-8351-3bc438680b48-d090fd776d155894b516007890059962-240-0.jpg', type: 'PINK', clothe: 'camisas', gender: "hombre" },
      { id: 12, name: 'CAMISA NEGRA    ZIMITHFALOV', price: 2549, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/dad5e85b-6db3-4423-8bbb-556770edc776-a5780a90fc4ba97f3116033952928771-240-0.jpg', type: 'BLACK', clothe: 'camisas', gender: "hombre" },
      { id: 13, name: 'CAMISA AZUL ZIMITHFALOV', price: 2549, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/db742bc7-dd08-461c-b961-f495e8df5a72-f87d74f71f89821e3316016771619314-240-0.jpg', type: 'AZUL', clothe: 'blusas', gender: "mujer" },
      { id: 15, name: 'CAMISA BLANCA ZIMITHFALOV', price: 2549, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/125d73ff-c742-4d52-838b-28baa1dfb391-073ce32731fd180f0816058930352053-240-0.jpg', type: 'BLANCA', clothe: 'blusas', gender: "mujer" },
      { id: 14, name: 'BERMUDA JOGGING ZIMITHFALOV', price: 2549, status: 1, imageURL: 'https://d26lpennugtm8s.cloudfront.net/stores/001/245/791/products/893e072e-b64f-4586-9939-b4107ac065a2-e2ea439346406cc50d16033042767859-240-0.jpg', type: 'JOGGINGS', clothe: 'bermudas', gender: "mujer" }

    ]
    return this.products
  }

  removeProduct(productName) {
    const productsFil = this.products.filter(p => {
      return p.name.toLowerCase() != productName.toLowerCase()
    })
    return productsFil
  }

  getProductsByName(productName, products = this.products) {
    const productsFil = products.filter(p => {
      return p.name.toLowerCase().match(productName.toLowerCase())
    })
    return productsFil
  }

  getProductsByType(productType, products = this.products) {
    const productsFil = products.filter(p => {
      return p.type.toLowerCase().match(productType.toLowerCase())
    })
    return productsFil
  }

  getProductsByClothe(productType, products = this.products) {
    const productsFil = products.filter(p => {
      return p.clothe.toLowerCase().match(productType.toLowerCase())
    })
    return productsFil
  }

  getProductsByGender(gender) {
    const productsActive = this.products.filter(p => {
      return p.gender.toLocaleLowerCase() === gender.toLocaleLowerCase()
    })
    return productsActive
  }

  getActiveProducts() {
    const prductsActive = this.products.filter(p => {
      return p.status === 1
    })
    return prductsActive
  }

  getAllTypes(products) {
    const allTypes = [...new Set(products.map(p => p.type.toUpperCase()))]
    return allTypes.sort()
  }

  getAllClothes(products) {
    const allTypes = [...new Set(products.map(p => p.clothe.toUpperCase()))]
    return allTypes.sort()
  }

  getALLGenders(products) {
    const allGenders = [...new Set(products.map(p => p.gender.toUpperCase()))]
    return allGenders.sort()
  }
}

export default ProductService