#!/bin/sh
case $1 in
start)
	if ! $0 status -q; then
		nohup ../../Javascript/Struct/struct run > struct.log &
		echo $! > pid
		echo "Running with pid $(<pid)"
	else
		echo "Already running, restart me"
	fi
;;
stop)
	if $0 status -q; then
		pid=$(<pid)
		while [[ $(pgrep -P $pid) -ne "" ]]; do
			list="$list $pid";
			pid=$(pgrep -P $pid);
		done; 
		if kill $list $pid && echo > pid; then
			[[ $2 -ne "-q" ]] && echo Stopped
		fi
	else
		echo "Not running"
	fi
;;
restart)
	$0 stop
	$0 start
;;
status)
	if [[ $(<pid) -ne "" ]]; then
		[[ $2 -ne "-q" ]] && echo "Running, pid $(<pid)"
		exit 0
	else
		[[ $2 -ne "-q" ]] && echo "Not running"
		exit 1
	fi
;;
esac
