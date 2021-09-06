class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/Jobs/) 
      if req.get?
        jobs = Job.all
        # jobs_with_category = jobs.collect do |job|
          # {id: job.id, name: job.name, price: job.price, location: job.location, desc: job.desc, category: job.category}
        # end
        return [200, { 'Content-Type' => 'application/json' }, [ jobs.to_json ]]
      elsif req.post?
        data = JSON.parse(req.body.read)
        job = Job.create(data)
        return [200, { 'Content-Type' => 'application/json' }, [ job.to_json ]]
      elsif req.delete?
        id = req.path_info.split('/Jobs/').last
        job = Job.find(id)
        job.destroy
        return [200, { 'Content-Type' => 'application/json' }, [ {message: 'Job deleted!'}.to_json ]]

      else 
        resp.write "Path Not Found"
      end
      
    elsif req.path.match(/Category/)
      if true
        categories = Category.all
        return [200, { 'Content-Type' => 'application/json' }, [ categories.to_json ]]
      else 
        resp.write "Path Not Found"
      end
    else
      resp.write "Path Not Found"
    end
    resp.write "Hello Cruel World. Why have you awoken me from my slumber?!?!?!"
  end

  def params_id
    @req.path_info[/\d+/]
  end
end
