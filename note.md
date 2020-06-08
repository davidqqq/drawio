# Introduction

## mxgraph JS is a powerful graphing tool (backend)   https://github.com/jgraph/mxgraph && mxgraph https://jgraph.github.io/mxgraph/docs/manual_javavis.html
 - Model View architecture
 - for js (web browser)
 - for java (desktop)
 - Originally JAVA now ported to JS which uses SVG as render target
 - Has its own SVG drawing logic in the format of XML
 - Web based (svg)
 - Graph theory based (model implmentend using vertices, edge)

## Draw.io is a client implementation of mxgraph (client)
 - maximum browser compatibility
 - battery included


## Integration

 Self-hosting client and integrating by embedding an iframe  
 

## Customization

### Good and bad about draw.io and mxGraph
 - Features mostly complete
 - Vanilla JS 
   - Full browser compatibility ( IE )
   - No dependency on external library/framework
   - Made extension/maintenance difficult
   - Old API e.g. use of execCommand is discouraged  
 - draw.io source code has little documentation (understanding the source code needs experiences on Javascript)
 - No test



### Customization available now:

- Add icon sets/groups
  - Scenario
    - Icons that represents ThreatMirror modelling concept i.e. unique to TM / usually not found in built-in icon sets
   - draw own icons using XML or
   - convert svg to xml (https://github.com/jgraph/svg2xml) or
   - in case where SVG can not be used, insert image 

- Add additional panel
 - Scenario
   - a side panel for `enriching` which might include dropdown, upload widget etc ....

- Customize menu options
 - Scenario  
   - send output to self-hosted backend services

- Creating built-in template
  - Scenario
    - quick start a modelling environment

**
  - Adding dynamic properties
  - Scenario
    - Store enrichment information on each vertex/node 
    - a url to repo, a url to Swagger file (yes)
    - whole Swagger file as attachment (idk)
**
    
- Anything else?
  - embed iframe vertex
    - d3 rendered tree (with dynamic source)
  - app_id && app_version_id && app_release_id

### What's next?
  draw.io
   - License (check)
   - Sub-graphs - logically associate cells with one another (its working but need understand its implementation)
   - data fetching/sending
   - app-iframe bidirectional communication && authentication (via cookie with same domain on both side)
     - NOTE: For cookie to be shared between app and embedded iframe, both **domain must be the same**. i.e.   App doamin: app.odus.com && Drawio domain: drawio.odus.com
   - xml parsing (if to be done on backend, one must get familiair with xmGraph xml model)
  
  Challenges
   - Client code has no documentation (understanding source code is painful)
   - No easy way to run test
   - Old technology made extension/maintenance difficult e.g. use of execCommand is discouraged
 
  Explore other alternatives 
    - mxgraph (model engine) + d3 (render engine) maximum freedom in UI and business logic implementation
    
  Challenges
   - Build model to view rendering engine (not sure how long it will take and if can get it right)
     


## For developer 

### mxGraph Guide (https://jgraph.github.io/mxgraph/docs/manual.html#3.1.4)

- The `shape` is an unique id to a model.
- `stencil` is used for grouping set of icons
- `mxGraph.insertVertex` 
- `mxGraph.insertEdge`
- `mxCellRenderer.registerShape`  registers a$$ `mxShape` with unique id
- `mxCellEdtior` area is a div contenteditable 



Simplify interface and keep only TM relevant functions
 - Add TM-themed icons 

Create Application Profile
 - CSV 
Dashboard
 - Application filtering
Level 1
 - Impelement readonly feature
 - Perm-lock Zones (new style tag i.e. $$

$$freeze, if freezed, remain locked and becomes unlockable)
 - Enable node enrichment (add node enrichment options to right click menu **done**)
 - File Upload and Build Pipeline Synchronization (Web Component)

Level 2   
  - Render nodes give api tree (???) 
