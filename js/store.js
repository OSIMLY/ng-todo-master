/*jshint unused:false */

(function (exports) {

	"use strict"
	const TODOLIST_DATA = "TODOLIST_DATA"
	exports.storage = {
		fetch() {
			return JSON.parse(localStorage.getItem(TODOLIST_DATA)) || []
		},
		save(items) {
			localStorage.setItem(TODOLIST_DATA, JSON.stringify(items))
		}
	}

})(window)