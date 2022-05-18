const template = document.createElement('template')
template.innerHTML = `
<style>
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 75vh;
</style>
<div class="cover">
  <h1></h1>
    <p></p>
    <button></button>
</div>
`

class Hero extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.appendChild(template.content.cloneNode(true))
		this.shadowRoot.querySelector('h1').innerHTML = this.getAttribute('title')
		this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('content')
		this.shadowRoot.querySelector('button').innerHTML =
			this.getAttribute('button')
		this.shadowRoot
			.querySelector('style')
			.append(`background-image: url('${this.getAttribute('background')}');`)
	}
}

window.customElements.define('hero-section', Hero)
