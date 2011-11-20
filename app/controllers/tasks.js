const mvc = require("mvc.js").init(module.id),
      models = mvc.models(module.id);
exports.tasks = mvc.controller({
	"new": function() {
		var tasks = models.task.fetch(mvc.yes),
		    projects = models.project.fetch(mvc.yes);
		this.render({tasks:tasks,projects:projects});
	},
	"create": function(p) {
		p.time = Number(p.time)*Number(p.unit);
		var task = models.task.create(p), proj;
		if(p.standalone == 0) {
			if(p.project == -1) {
				proj = models.project.create({name:p.newproject,tasks:[task]})
			} else {
				proj = models.project.byId(p.project);
				proj.tasks.push(task);
			}
			print(typeof proj.save)
			proj.save();
		}
		task.save();
		this.list();
	},
	"list": function() {
		this.render();
	}
});