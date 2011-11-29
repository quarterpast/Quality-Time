const controller = require("mvc/controller.js").create.bind(module.id),
      models = mvc.models(module.id);
exports.site = controller({
	"index": function() {
		this.render();
	},
	"about": function() {
		this.render();
	}
});