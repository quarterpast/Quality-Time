const mvc = require("mvc.js").init(module.id),
      models = mvc.models(module.id);

exports.task = mvc.model({
	what:       {type:String},
	time:       {type:Number},
	complete:   {type:java.lang.Boolean},
	depends:    {type:Array,elements:models.task},
	importance: {type:mvc.enum,elements:[0,1,2,3,4,5]}
});