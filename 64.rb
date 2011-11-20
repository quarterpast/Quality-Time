#!/usr/bin/env ruby -w
require 'base64'
File.open(ARGV[0],"rb") do |file|
	puts Base64.encode64(file.read)
end
