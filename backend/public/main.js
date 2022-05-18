catalog.addEventListener('submit', (e) => {
	e.preventDefault()

	//	URL to Catalog API
	const root = 'http://localhost:5000'
	const url = `${root}/api/catalog/`

	//	Get the form data
	const form = new FormData(catalog)

	// Posting the Form Data
	const link = fetch(url)
})
