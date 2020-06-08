const Fastify = require("fastify");

const jsdom = require("jsdom");
const xml2json = require('./xml2json')
const { JSDOM } = jsdom;
const dom = new JSDOM();


// @ts-ignore
global.window = dom.window;
// @ts-ignore
global.document = window.document;
// @ts-ignore
global.XMLSerializer = window.XMLSerializer;
// @ts-ignore
global.navigator = window.navigator;
// @ts-ignore
global.XMLHttpRequest = window.XMLHttpRequest;
// @ts-ignore
global.DOMParser = window.DOMParser;

const {
  mxGraph,
  mxGraphModel,
  mxCodec,
  mxUtils,
  mxGeometry,
  mxConstants
} = require("mxgraph")({
  mxImageBasePath: "./src/images",
  mxBasePath: "./src"
});

// @ts-ignore
window.mxGraphModel = mxGraphModel;
// @ts-ignore
window.mxGeometry = mxGeometry;

function makeHelloWorld() {
  // Extracted from https://github.com/jgraph/mxgraph/blob/master/javascript/examples/helloworld.html
  const graph = new mxGraph();

  // Gets the default parent for inserting new cells. This
  // is normally the first child of the root (ie. layer 0).
  const parent = graph.getDefaultParent();

  // Adds cells to the model in a single step
  graph.getModel().beginUpdate();
  try {
    const data = [
      {
        _id: "1",
        value: "Hello,",
        vertex: 1,
        edge: 0,
        x: 20,
        y: 20,
        width: 80,
        height: 30
      },
      {
        _id: "2",
        value: "World!",
        vertex: 1,
        edge: 0,
        x: 200,
        y: 150,
        width: 80,
        height: 30
      },
      {
        _id: "3",
        value: "Coooool!",
        vertex: 1,
        edge: 0,
        x: 400,
        y: 250,
        width: 80,
        height: 30
      },
      {
        _id: "4",
        v1: "1",
        v2: "2",
        value: "World!",
        vertex: 0,
        edge: 1
      }
    ];
    const lookupTable = {};
    const vertices = [];
    const edges = [];
    data.forEach(d => {
      if (d.vertex) {
        const vertex = graph.insertVertex(
          parent,
          d._id,
          d.value,
          d.x,
          d.y,
          d.width,
          d.height
        );
        graph.toggleCellStyle(mxConstants.STYLE_MOVABLE,0,vertex)
        lookupTable[d._id] = vertex
      } else {
        edges.push(d);
      }
    });

    edges.forEach(e =>
      graph.insertEdge(
        parent,
        e._id,
        e.value,
        lookupTable[e.v1],
        lookupTable[e.v2]
      )
    );
  } finally {
    // Updates the display
    graph.getModel().endUpdate();
  }
  return graph;
}

function graphToXML(graph) {
  const encoder = new mxCodec();
  const result = encoder.encode(graph.getModel());
  return mxUtils.getXml(result);
}

function graphModelToXML(graphModel) {
  const encoder = new mxCodec();
  const result = encoder.encode(graphModel);
  return mxUtils.getXml(result);
}

function App(fastify,opts,done) {
    
    /** 
     * schema sample
     * 
     **/ 

    // interface Manufacturer {
    //     name: string
    //     homePage?: string
    //     phone?: string
    // }
    
    // interface InventoryItem {
    //     id: string
    //     name: string
    //     releaseDate: string
    //     manufacturer: Manufacturer
    // }
    
    // const manufacturer: Manufacturer = {
    //     name: "ACME Corporation",
    //     homePage: "https://www.acme-corp.com",
    //     phone: "408-867-5309"
    // };
    
    // const inventory: InventoryItem = {
    //     id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    //     name: "Widget Adapter",
    //     releaseDate: "2016-08-29T09:12:33.001Z",
    //     manufacturer: manufacturer
    // };
    
    // fastify.addSchema({
    //     $id: "#manufacturer",
    //     type: "object",
    //     required: ["name"],
    //     properties: {
    //         name: {
    //             type: "string",
    //             example: "ACME Corporation"
    //         },
    //         homePage: {
    //             type: "string"
    //         },
    //         phone: {
    //             type: "string"
    //         }
    //     }
    // });

    // fastify.addSchema({
    //     $id: "#inventory",
    //     type: "object",
    //     required: ["id", "manufacturer", "name", "releaseDate"],
    //     properties: {
    //         id: {
    //             type: "string"
    //             // format: "uuid",
    //             // example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
    //         },
    //         name: {
    //             type: "string"
    //             // example: "Widget Adapter"
    //         },
    //         releaseDate: {
    //             type: "string"
    //             // format: "date-time",
    //             // example: "2016-08-29T09:12:33.001Z"
    //         },
    //         manufacturer: {
    //             type: "object",
    //             $ref: "#manufacturer"
    //         }
    //     }
    // });

    // fastify.get("/inventory", {
    //     schema: {
    //         querystring: {
    //             searchString: { type: "string" },
    //             // validation and deserialization example
    //             skip: {
    //                 minimum: 0,
    //                 type: "integer"
    //                 // format: "int32"
    //             },
    //             limit: {
    //                 maximum: 50,
    //                 minimum: 0,
    //                 type: "integer"
    //                 // format: "int32"
    //             }
    //         }
    //     },
    //     handler(request, reply) {

    //         reply.send([inventory]);
    //     }
    // });

    // fastify.post("/inventory", {
    //     schema: {
    //         body: {
    //             type: "object",
    //             $ref: "#inventory"
    //         }
    //     },
    //     handler(request, reply) {
    //         // not exactly casting, simply because we know better
    //         // we are certain of body type because schema validator ensured - 
    //         // the structure of request body matched interface
    //         const inventory: InventoryItem = request.body
    //         // do sth with inventory (biz logic validation, persistance)
    //         return reply.status(201).send({
    //             message: "item created"
    //         });
    //     }
    // });
    
    fastify.get("/json",(request, reply) => {
                // res.setHeader("Content-Type", "text/xml");
                // res.setHeader('Content-Disposition', 'attachment; filename=sample.xml');
                const graphXML = graphToXML(makeHelloWorld())
                const parser = new DOMParser()
                
                reply.headers({"Access-Control-Allow-Origin":"*"})
                reply.send(xml2json(parser.parseFromString(graphXML,'text/xml'),' '));
    })
    
    fastify.get("/xml",(request, reply) => {
                // res.setHeader("Content-Type", "text/xml");
                // res.setHeader('Content-Disposition', 'attachment; filename=sample.xml');
                const graphXML = graphToXML(makeHelloWorld())
                const parser = new DOMParser()
                
                reply.headers({"Access-Control-Allow-Origin":"*"})
                reply.headers({"Content-Type": "text/xml"});
                reply.send(graphXML);
    })

    fastify.get("/sample",(request, reply) => {
        mxUtils.get("http://localhost:3001/v1/sample", function(xml) {
            const node = xml.getDocumentElement();
      
            const dec = new mxCodec(node.ownerDocument);
            const graph = dec.decode(node);
            reply.headers({"Content-Type": "text/xml"});
            reply.send(graphModelToXML(graph));
    })})
    
    fastify.get("/swagger",(request, reply) => {
      reply.headers({"Access-Control-Allow-Origin":"*"})
      reply.send(require('./swagger').default);
    })

    fastify.get("/swagger2",(request, reply) => {
      reply.headers({"Access-Control-Allow-Origin":"*"})
      reply.send(require('./swagger2').default);
    })

      
    done()
}

export default App;
