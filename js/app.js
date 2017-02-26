(function (
	exports) {
	exports.app = new Vue({
		el: ".todoapp",
		data: {
			title: "todoList",
			items: storage.fetch(),
			newItemTitle: ""
		},
		watch: {
			items: {
				handler(val, oldVal) {
					storage.save(val)
				},
				deep: true
			}
		},
		methods: {
			add() {
				this.items.push({
					title: this.newItemTitle,
					finished: false
				})
				this.newItemTitle = ""
			},
			destroy(item) {
				let index = this.items.indexOf(item)
				this.items.splice(index, 1)
			}
		}
	})
})(window)