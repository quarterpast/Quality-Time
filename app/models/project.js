const model = require("mvc/model.js"),
      models = require("mvc/list.js").models;

module.exports = model.define("project",{
	name:       String
});

module.exports.hasMany(models.task,{as:"tasks",foreignKey:"task_id"});