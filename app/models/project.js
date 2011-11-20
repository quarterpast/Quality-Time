const mvc = require("mvc.js").init(module.id),
      models = mvc.models(module.id);

exports.project = mvc.model({
	name:       {type:String},
	tasks:      {type:Array,elements:mvc.models.task}
});