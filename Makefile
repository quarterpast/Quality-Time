all:
	s3fs -o default_acl=public-read qualitytime s3
	cd css; make
	cp css/style.css s3/css
	rsync -r img s3
	rsync -r js s3
	umount s3
me:
	@if [[ $EUID -ne 0 ]]; then echo "What? Make it yourself.";\
	else echo "Okay."; fi
a:
	@echo > /dev/null
sandwich:
	@echo > /dev/null
s3/css/style.css: css/style.less
	lessc css/style.less > s3/css/style.css
restart:
	if ./time.sh status; then ./time.sh restart; else ./time.sh start; fi
