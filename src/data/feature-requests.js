import request from 'superagent'

export default {
  
  // optional paramater: clientId
  // return feature requests per client
  // if undefined return all feature requests
  getRequests: (clientId, callback) => {
    let url = 'api/feature-requests'
       
    if (clientId) {
      url = `${url}/${clientId}`
    }
    
    request
      .get(url)
      .set('x-access-token', localStorage.token)
      .end((err, res) => {
        if (err) console.log(err)
        
        callback(res.body)
    })
  },

  createRequest: (submission, callback) => {
      let url = 'api/feature-requests'
      
      request
        .post(url)
        .set('x-access-token', localStorage.token)
        .send(submission)
        .end((err, res) => {
          if (err) console.log(err)
          
          callback(res.body)
      })
  }
}
