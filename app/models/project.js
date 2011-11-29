const model = require("mvc/model.js").create.bind(module.id),
      models = require("mvc/list.js").models(module.id);

exports.project = model({
	name:       {type:String},
	tasks:      {type:Array,elements:models.task}
});