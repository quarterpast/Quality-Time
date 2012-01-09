const controller = require("mvc/controller.js").bind(module.id);
models = require("mvc/list.js").models;


module.exports = {
	"new": function() {
		var tasks = models.task.all(),
		    projects = models.project.all();
		this.render({tasks:tasks,projects:projects});
	},
	"create": function(p) {
		p.time = Number(p.time)*Number(p.unit);
		var task = models.task.create(p), proj;
		if(p.standalone == 0) {
			if(p.project == -1) {
				proj = models.project.create({name:p.newproject,tasks:[task]});
			} else {
				proj = models.project.byId(p.project);
				proj.tasks.push(task);
			}
			print(typeof proj.save);
			proj.save();
		}
		task.save();
		this.list();
	},
	"view": function(p) {
		if("id" in p) {

		} else {
			this.list();
		}
	},
	"list": function() {
		var tasks = models.task.all();
		this.render({tasks:tasks});
	}
};