class Breadcrumb {

  constructor () {
    this.elements = []
  }

  add (value) {
    return this.elements.push(value)
  }

  pop () {
    return this.elements.pop()
  }

}


export default Breadcrumb

