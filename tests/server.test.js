const request = require("supertest");
const app = require("../server/server").app;

describe('Server', () => {
      describe('GET /', () => {
        it('should return hello world', (done) => {
          request(app)
            .get('/')
            .expect(200)
            .expect('Hello World')
            .end(done);
        });
      }),

      describe('GET /users', () => {
        it('should return users', (done) => {
          let users = [{
            name: 'Tom',
            gender: 'male'
          }, {
            name: 'Jack',
            gender: 'male'
          }, {
            name: 'John',
            gender: 'male'
          }]
          request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
              expect(res.body).toEqual(expect.arrayContaining(users))
            })
            .end(done)
        })
      })
    },

    describe('GET /err', () => {
        it('should return page not found', (done) => {
            request(app)
              .get("/err")
              .expect(404)
              .expect((res) => {
                expect(res.body).toMatchObject({
                  error: 'Page not found.'
                })
              })
              .end(done);
          }
        )}
      )
    )