# OpenAPI 3

1. [Design API contract first](https://swagger.io/resources/articles/adopting-an-api-first-approach)
2. **Design OpenAPI 3 in YAML using SwaggerHub**
3. **Generate OpenAPI 3 in JSON**
4. **Apply Swagger definition contract on endpoint **
    - Implement **test cases** 
    - Implement **inventory API**
5. Fastify schema validation and serialization (if Node)
6. Add typings to serialized data (if Typescript)
****

Apply Swagger definition contract on endpoint implemented (Done)
Implement test cases in Fastify  (Done)
Implement inventory API in Fastify (Done)
Refactor inventory API to Typescript (Done)

Compare and evaluate the feasibility of writing Fastify-Schema to OpenAPI 3 both routes and unit tests generator 

Evaluate decorator class based Typescript and dependency injection (Inversify)

Mongo DB:
Good: 

- perisisting document-like and hierarchical data (graph)

- ideal aggregate store for DDD but [lack of support of ACID](https://kalele.io/the-ideal-domain-driven-design-aggregate-store/) until [ACID is dropped in 4.0](https://www.mongodb.com/blog/post/multi-document-transactions-in-mongodb)

Why is this support critical:
Before 4.0, multi-documents update cannot guarantee operation as a whole is atomic

# Server

- Monitoring
    - Application monitoring
        - Generate, Transport and Store
        - Authentication, Authorisation, and Access
        - Changes
        - Resources (file, image, audio)
    - Process monitoring
        - server metrics
		    CPU, memory, and disk usage. 

- Persistence (e.g MongoDB)
  - Backup, Failover
  
- Web server for static file (e.g. nginx, apach)
- Access control (e.g. RBAC)
- Session storage (e.g. Redis)
- Message Queue (e.g. rabbitMQ)

- ~~High concurrecy (if applicable)~~
- ~~Distributed Lock (if applicable)~~
- Distributed transaction management (if using distributed databases across microservices, best avoided by embedding)



# Client

- An organised project folder structure (lib, service, pages, components, routes, store) and **documentation** 
- Code linting rule (ESLint, TSLint) (google airbnb) 
- Git (Git branch management, Commit message, code review)
- Security sanitize input and cxrf
- CSS framework (Tailwind or Bootstrap or none Reactstrap)
- CSS naming convention (i.e. BEM) e.g. .container__button--red {  color :red}
- Pick a testing framework (i.e. jest for unit test, cypress for integration test) and pick a pattern (~~TDD~~ or BDD) 
  - Component library (both own and third party) <LoadingButton />  

- **Mock data** (to be used when FE feature development is ahead of BE)
- **API integration (i.e. RESTful)**

**Typescript**

var x = 1
x = "hello world"

const x:number =1 
x = "hello world"

interface Inventory{
    name :string
}

inventory.name = 1

- **Router management**  (Route guard, who can access what based on role)
- **State management**  (Application state, i.e. badge count) 

- Request management (i.e. HTTP interceptor get, post…)
- Session management (Encrypted Session, JWT etc)
	………

- UI/UX (~~**template**~~, theme, layout, responsive, etc…) 

- Automated build (production build, dev build, staging build)
- Automated test 
- Automated deploy (rollback)
  
- Performance Optimisation (bundle size, CDN, etc etc…..)


d3 to rule them all
- chart
- tree graph
- connectivity (html overlay on svg)  


<svg>  rect g line polyline <circle> <text> <input>
 

but.....

React or ~~Angular~~ handle dom update differently from d3

- Harmonize d3 with React framework 

- Encapsulate each in isolation and communicate through data 





GraphQL
                           
Client => NodeJS => MSQ => CMD? => Result
CMD => Result => MSQ => NodeJS => Client



Terminology
ER diagram