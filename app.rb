require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'
require 'pg'
require 'JSON'


#Home/Lander
get '/' do
  redirect '/videos'
end

#INDEX - get, list all videos PAGE
get '/videos' do
  #send back all videos in the DB
  sql = 'select * from videos'
  @videos = run_sql(sql)
  if request.xhr?
    json @videos
    #json videos to_a
  else
    erb :index
  end
end


private
def run_sql(sql)
  conn = PG.connect(:dbname =>'memetube', :host => 'localhost')
  begin
    result = conn.exec(sql)
  ensure
    conn.close
  end
  result
end