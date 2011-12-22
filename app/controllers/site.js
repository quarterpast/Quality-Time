const controller = require("mvc/controller.js").bind(module.id);
module.exports = controller({
	"index": function() {
		this.render();
	},
	"about": function() {
		this.render();
	}
});