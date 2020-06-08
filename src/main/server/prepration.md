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

inventory.name = 1 **error**

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
