const mongoose = require('mongoose')

const Catalog = new mongoose.Schema({
	condition: {
		type: String,
		enum: ['New', 'Preowned', 'Demo'],
		required: true,
	},
	// type: {
	// 	type: String,
	// 	enum: [
	// 		'All Terrain Vehicle',
	// 		'Amphibious Vehicle',
	// 		'Automobile',
	// 		'Dirt Bike',
	// 		'Go Kart',
	// 		'Golf Kart',
	// 		'Lawn Mower',
	// 		'Motorcycle',
	// 		'Utility Vehicle',
	// 	],
	// 	required: true,
	// },
	// manufacturer: {
	// 	type: String,
	// 	maxlength: 25,
	// 	required: true,
	// },
	// model: {
	// 	type: String,
	// 	maxlength: 25,
	// 	required: true,
	// },
	// price: {
	// 	type: Number,
	// 	min: 1,
	// 	max: 1000000,
	// 	required: true,
	// },
	// year: {
	// 	type: Number,
	// 	min: 1900,
	// 	max: 2023,
	// 	required: true,
	// },
	// featuredImage: {
	// 	type: String,
	// },
	// images: {
	// 	type: String,
	// },
	// features: {
	// 	type: [String],
	// },
	// description: {
	// 	type: String,
	// },
	// inStock: {
	// 	type: Boolean,
	// },
	// createdAt: {
	// 	type: Date,
	// 	default: Date.now,
	// 	immutable: false,
	// },
	// updatedOn: {
	// 	type: Date,
	// 	default: Date.now,
	// },
})

module.exports = mongoose.model('Catalog', Catalog)
