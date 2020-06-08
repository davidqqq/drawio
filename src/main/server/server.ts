const Fastify = require("fastify");
import App from  "./src/app"

const fastify = Fastify();
fastify.register(App, { prefix: '/v1' }).listen(3001);
