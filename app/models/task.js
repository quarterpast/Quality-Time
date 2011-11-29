const model = require("mvc/model.js").create.bind(module.id),
      models = require("mvc/list.js").models(module.id);


exports.task = model({
	what:       {type:String},
	time:       {type:Number},
	complete:   {type:java.lang.Boolean},
	depends:    {type:Array,elements:models.task},
	importance: {type:mvc.enum,elements:[0,1,2,3,4,5]}
});