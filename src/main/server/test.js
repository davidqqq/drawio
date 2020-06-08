const buildFastify = require("./app");

const manufacturer = {
  name: "ACME Corporation",
  homePage: "https://www.acme-corp.com",
  phone: "408-867-5309"
};

const inventory = {
  id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
  name: "Widget Adapter",
  releaseDate: "2016-08-29T09:12:33.001Z",
  manufacturer: manufacturer
};
// server
const fastify = buildFastify();
require("tap").mochaGlobals();
require("should");
// test suits
describe("Inventory management", () => {
  after(() => {
    fastify.close();
  });
  context("`/inventory` route", () => {
    // BDD
    it("gets inventory", () => {
      // inject mock request
      fastify.inject(
        {
          method: "GET",
          url: "/inventory"
        },
        (err, response) => {
          response.statusCode.should.equal(200);
          response.headers["content-type"].should.equal("application/json");
          // t.error(err);
          response.json().should.be.an.Array();
          response.json().should.deepEqual([inventory]);
        }
      );
    });

    it("fails to get inventory due to invalid searchString", () => {
      fastify.inject(
        {
          method: "GET",
          url: "/inventory",
          query: { searchString: "1", skip: 2, limit: 100 }
        },
        (err, response) => {
          response.statusCode.should.equal(400);
          response
            .json()
            .message.should.equal("querystring.limit should be <= 50");
        }
      );
    });

    it("failed to create inventory due to invalid parameteres ['id', 'manufacturer', 'name', 'releaseDate']", () => {
      fastify.inject(
        {
          method: "POST",
          url: "/inventory",
          payload: {
            id: "1",
            name: "1",
            releaseDate: "1",
            manufacturer: {}
          }
        },
        (err, response) => {
          response.statusCode.should.equal(400);
          response
            .json()
            .message.should.equal(
              "body.manufacturer should have required property 'name'"
            );
        }
      );
      // Note that Ajv will try to coerce the values to the types specified in schema type keywords,
      // both to pass the validation and to use the correctly typed data afterwards.
      fastify.inject(
        {
          method: "POST",
          url: "/inventory",
          payload: {
            id: 1,
            name: "1",
            releaseDate: "1",
            manufacturer: manufacturer
          }
        },
        (err, response) => {
          response.statusCode.should.equal(201);
          response.json().message.should.equal("item created");
        }
      );
    });

    it("creates an inventory given valid 'id' || 'manufacturer' || 'name' || 'releaseDate'", () => {
      fastify.inject(
        {
          method: "POST",
          url: "/inventory",
          payload: inventory
        },
        (err, response) => {
          response.statusCode.should.equal(201);
          response.json().message.should.equal("item created");
        }
      );
    });
  });
});
