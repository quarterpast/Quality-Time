exports.routes=function($)[
	["*","/favicon.ico",this.staticFile,"static/favicon.ico"],
	["*","/apple-touch-icon-114x114-precomposed.png",this.staticFile,"static/apple-touch-icon-114x114-precomposed.png"],
	["*","/apple-touch-icon-72x72-precomposed.png",this.staticFile,"static/apple-touch-icon-72x72-precomposed.png"],
	["*","/apple-touch-icon-57x57-precomposed.png",this.staticFile,"static/apple-touch-icon-57x57-precomposed.png"],
	["*","/robots.txt",this.staticFile,"static/robots.txt"],
	["*","/humans.txt",this.staticFile,"static/humans.txt"],
	["*","/crossdomain.xml",this.staticFile,"static/crossdomain.xml"],
	["GET","/", $.site.index],
	["GET","/home", $.site.index],
	["GET","/about", $.site.about],
	["POST","/tasks/list",$.tasks.create],
	["*","/{controller}/{action}",function(_) $[_.controller][_.action]]
]