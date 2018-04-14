const request = require("supertest");
const app = require("../server/server").app;

it('should return hello world', (done)=>{
  request(app)
    .get('/')
    .expect(200)
    .expect('Hello World')
    .end(done);
});

it('should return page not found',(done)=>{
  request(app)
    .get("/err")
    .expect(404)
    .expect({error: "Page not found."})
    .end(done);

})