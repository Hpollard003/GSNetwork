class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/Jobs/) 
      if req.get?
        jobs = Job.all
        all_job_info = jobs.map do |j|
          {
            id: j.id,
            name: j.name,
            price: j.price,
            desc: j.desc,
            location: j.location,
            category_id: j.category_id
          }
        end
        return [200, { 'Content-Type' => 'application/json' }, [ all_job_info.to_json ]]
      elsif @req.path.match(/Jobs/) && params_id && @req.get?
          jobs = Job.find(params_id)
          job_info =  {
            id: j.id,
            name: j.name,
            price: j.price,
            desc: j.desc,
            location: j.location,
            category_id: j.category_id
          }
          return [200, { 'Content-Type' => 'application/json' }, [ job_info.to_json ]]
      elsif req.post?
        data = JSON.parse(req.body.read)
        job = Job.create(data)
        return [200, { 'Content-Type' => 'application/json' }, [ job.to_json ]]
      elsif @req.delete?
        id = @req.path_info.split('/Jobs/').last
        job = Job.find(id)
        job.delete
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
