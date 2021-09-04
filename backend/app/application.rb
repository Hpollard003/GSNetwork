class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/Jobs/) 
      jobs = Job.all
      return [200, { 'Content-Type' => 'application/json' }, [ jobs.to_json ]]
      
    elsif req.path.match(/Intel/)
      new_intel = Intel.all
      return [200, { 'Content-Type' => 'application/json' }, [ new_intel.to_json ]]

    end

    resp.finish
  end

end
