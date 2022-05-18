const root = document.getElementById('root')

function createHeader() {
	const header = document.createElement('header')
	header.setAttribute('id', 'header')
	root.append(header)
}

function createNavigation() {
	const header = document.querySelector('#header')
	const nav = document.createElement('nav').setAttribute('class', 'container')
	header.appendChild(nav)
}
