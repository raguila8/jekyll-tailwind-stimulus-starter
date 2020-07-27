import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    let hello = document.createElement('h1')
    hello.classList.add('text-blue-800')
    hello.textContent = "Hello world!"
    this.element.appendChild(hello)
  }
}
