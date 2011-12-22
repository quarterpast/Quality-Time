const model = require("mvc/model.js"),
      models = require("mvc/list.js").models;


module.exports = model.define({
	what:       {type:String},
	time:       {type:Number},
	complete:   {type:Boolean},
	importance: {type:Number}
});

module.exports.hasMany(module.exports,{as:"depends",foreignKey:"task_id"});