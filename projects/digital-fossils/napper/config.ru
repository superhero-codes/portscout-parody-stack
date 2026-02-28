# Napper — A Napster parody
# Minimal Rack app that serves the file-sharing UI
# Run with: rackup -p 5331

require_relative 'app/controllers/application_controller'

run ApplicationController.new
