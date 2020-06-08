import {
  Element,
  Component,
  Host,
  Prop,
  h,
  ComponentInterface,
  getAssetPath,
  State,
  EventEmitter,
  Event
} from "@stencil/core";

declare var d3: any;
@Component({
  tag: "my-d3",
  styleUrl: "my-d3.css",
  shadow: true,
  assetsDirs: ["assets"]
})
export class MyD3 implements ComponentInterface {
  @Element() element: HTMLElement;
  @Prop() width: number = 3000;
  @Prop() height: number = 3000;
  @Prop() data: string = "[]";
  @State()
  openChart = false;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  i = 0;
  duration = 750;
  svg;
  div;
  tooltip;
  root;
  // declares a tree layout and assigns the size
  treemap;
  chartLoaded = false;
  @State()
  url;
  @Event() exportImage: EventEmitter;
  // async componentDidLoad() {

  // }

  async fetchData(url) {
    const data = await fetch(url);
    return data.json();
  }
  // Collapse the node and all it's children
  collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(d => this.collapse(d));
      d.children = null;
    }
  }

  buildChart(data, h = this.height, w = this.width, container = "svg") {
    console.log(this.element.shadowRoot.querySelector(container));
    this.treemap = d3.tree().size([h, w]);
    const margin = { top: 20, right: 90, bottom: 30, left: 90 };
    const width = w - margin.left - margin.right;
    const height = h - margin.top - margin.bottom;
    this.svg = d3
      .select(this.element.shadowRoot.querySelector(container))
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .attr("xmlns", "http://www.w3.org/2000/svg")
      .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("version", "1.1")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Assigns parent, children, height, depth
    this.root = d3.hierarchy(data, function(d) {
      return d.children;
    });
    this.root.x0 = this.height / 2;
    this.root.y0 = 0;
    // this.root.children.forEach(this.collapse.bind(this));
    this.update(this.root);
  }

  update(source) {
    // Assigns the x and y position for the nodes
    var treeData = this.treemap(this.root);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * 180;
    });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = this.svg
      .selectAll("g.node")
      .data(nodes, d => d.id || (d.id = ++this.i));

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", () => "translate(" + source.y0 + "," + source.x0 + ")")
      .on("click", this.click.bind(this))
      .on("mouseover", d => {
        if (d.data.otherDetails != "") {
          var tooltipStr = "";
          var tooltipStr1 = "";
          var tooltipStr2 = "";
          var pathDetailsArray = d.data.otherDetails.split("##");
          for (var pathDetailsIndex in pathDetailsArray) {
            var pathDetail = pathDetailsArray[pathDetailsIndex].split(",");
            if (pathDetail.length == 4) {
              var method = pathDetail[0];
              // var parameters = pathDetail[1];
              var requestBodySchemas = pathDetail[2];
              var responseSchemas = pathDetail[3];
              switch (method) {
                case "get":
                  //tooltipStr1 = (tooltipStr1 == "") ? "GET" : tooltipStr1 + ", " + "GET"
                  tooltipStr1 =
                    tooltipStr1 == ""
                      ? '<img src="/build/assets/op_get_tight.jpg">'
                      : tooltipStr1 +
                        " " +
                        '<img src="/build/assets/op_get_tight.jpg">';
                  break;
                case "post":
                  //tooltipStr1 = (tooltipStr1 == "") ? "POST" : tooltipStr1 + ", " + "POST"
                  tooltipStr1 =
                    tooltipStr1 == ""
                      ? '<img src="/build/assets/op_post_tight.jpg">'
                      : tooltipStr1 +
                        " " +
                        '<img src="/build/assets/op_post_tight.jpg">';
                  break;
                case "put":
                  //tooltipStr1 = (tooltipStr1 == "") ? "PUT" : tooltipStr1 + ", " + "PUT"
                  tooltipStr1 =
                    tooltipStr1 == ""
                      ? '<img src="/build/assets/op_put_tight.jpg">'
                      : tooltipStr1 +
                        " " +
                        '<img src="/build/assets/op_put_tight.jpg">';
                  break;
                case "delete":
                  //tooltipStr1 = (tooltipStr1 == "") ? "DELETE" : tooltipStr1 + ", " + "DELETE"
                  tooltipStr1 =
                    tooltipStr1 == ""
                      ? '<img src="op_delete_tight.jpg">'
                      : tooltipStr1 +
                        " " +
                        '<img src="/build/assets/op_delete_tight.jpg">';
                  break;
                default:
              }

              if (requestBodySchemas != "")
                requestBodySchemas =
                  requestBodySchemas.replace("|", "</br>") + "</br>";
              if (responseSchemas != "")
                responseSchemas = responseSchemas.replace("|", "</br>");
              tooltipStr2 =
                "</br></br><u><b>Schemas</b></u></br>" +
                requestBodySchemas +
                responseSchemas;
            }
          }
          tooltipStr = tooltipStr1 + tooltipStr2;
          this.div
            .transition()
            .duration(200)
            .style("opacity", 0.9);
          this.div
            .html(tooltipStr + "<br/>")
            .style("left", d3.event.pageX + "px")
            .style("top", d3.event.pageY - 28 + "px");
        }
      })
      .on("mousemove", () => {
        return this.tooltip
          .style("top", d3.event.pageY - 40 + "px")
          .style("left", d3.event.pageX - 130 + "px");
      })
      .on("mouseout", () => {
        this.div
          .transition()
          .duration(500)
          .style("opacity", 0);
      });

    // Add Circle for the nodes
    nodeEnter
      .append("circle")
      .attr("class", "node")
      .attr("r", 1e-6)
      .style("fill", "#fff")
      .style("stroke", "steelblue")
      .style("stroke-width", "3px")

      .style("stroke", function(d) {
        return d.data.onVulnerablePath == "true" ? "#e66" : "steelblue";
      })
      .style("fill", function(d) {
        if (d.data.onVulnerablePath == "true")
          return d._children ? "#faa" : "#fff";
        else return d._children ? "lightsteelblue" : "#fff";
      });

    // Add labels for the nodes
    nodeEnter
      .append("text")
      .style("font", "12px sans-serif")
      .attr("dy", ".35em")
      .attr("x", function(d) {
        return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
        return d.children || d._children ? "end" : "start";
      })
      .attr("fill", function(d) {
        return d.data.isEndPoint == "true" ? "#cc6600" : "black";
      })
      .text(function(d) {
        return d.data.name;
      });

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(this.duration)
      .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    // Update the node attributes and style
    nodeUpdate
      .select("circle.node")
      .attr("r", 10)
      .style("stroke", function(d) {
        return d.data.onVulnerablePath == "true" ? "#e66" : "steelblue";
      })
      .style("fill", function(d) {
        if (d.data.onVulnerablePath == "true")
          return d._children ? "#faa" : "#fff";
        else return d._children ? "lightsteelblue" : "#fff";
      })
      .attr("cursor", "pointer");

    // Remove any exiting nodes
    var nodeExit = node
      .exit()
      .transition()
      .duration(this.duration)
      .attr("transform", () => {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select("circle").attr("r", 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select("text").style("fill-opacity", 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = this.svg.selectAll("path.link").data(links, function(d) {
      return d.id;
    });

    // Enter any new links at the parent's previous position.
    var linkEnter = link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .style("fill", "none")
      .style("stroke", "#ccc")
      .style("stroke-width", "2px")
      .attr("d", _ => {
        var o = { x: source.x0, y: source.y0 };
        return this.diagonal(o, o);
      })
      .style("stroke", function(d) {
        return d.data.onVulnerablePath == "true" ? "#e66" : "#ccc";
      });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(this.duration)
      .attr("d", d => this.diagonal(d, d.parent));

    // Remove any exiting links
    link
      .exit()
      .transition()
      .duration(this.duration)
      .attr("d", () => {
        var o = { x: source.x, y: source.y };
        return this.diagonal(o, o);
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  diagonal(s, d) {
    return `M ${s.y} ${s.x}
          C ${(s.y + d.y) / 2} ${s.x},
            ${(s.y + d.y) / 2} ${d.x},
            ${d.y} ${d.x}`;
  }

  // Toggle children on click.
  click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    this.update(d);
  }

  async showTreeHandler() {
    if (!this.chartLoaded) {
      try {
        this.chartLoaded = true;
        this.openChart = true;
      } catch (err) {
        alert("Fetch data failed");
      }
    } else {
      // Define the div for the tooltip
      this.div = d3
        .select(this.element.shadowRoot.querySelector(".api-tree"))
        .append("div")
        .attr("class", "mytooltip")
        .style("opacity", 0);

      this.tooltip = d3
        .select(this.element.shadowRoot.querySelector(".api-tree"))
        .append("div")
        .attr("class", "mytooltip") //add the tooltip class
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden");
    }

    if (this.svg) {
      this.svg.remove();
    }
    this.root = null;
    // declares a tree layout and assigns the size
    this.treemap = null;
    const data = await this.fetchData(this.url);
    this.buildChart(data);
  }

  render() {
    return (
      <Host>
        <img
          style={{ visibility: "hidden" }}
          src={getAssetPath(`./assets/op_delete_tight.jpg`)}
        />
        <img
          style={{ visibility: "hidden" }}
          src={getAssetPath(`./assets/op_get_tight.jpg`)}
        />
        <img
          style={{ visibility: "hidden" }}
          src={getAssetPath(`./assets/op_post_tight.jpg`)}
        />
        <img
          style={{ visibility: "hidden" }}
          src={getAssetPath(`./assets/op_put_tight.jpg`)}
        />
        <div
          class={`api-tree ${
            this.openChart ? "api-tree__open" : "api-tree__close"
          }`}
        >
          <div style={{ position: "sticky", top: "0", left: "0" }}>
            <my-component
              //@ts-ignore
              onSelect={ev => (this.url = ev.detail)}
            ></my-component>
            {/* <input placeholder="Enter url to load" /> */}
            <button disabled={!this.url} onClick={() => this.showTreeHandler()}>
              Load
            </button>
            <button onClick={() => (this.openChart = !this.openChart)}>
              {this.openChart ? "Close" : "Open"}
            </button>
            <button
              disabled={!this.url}
              onClick={() => {
                const chart = this.element.shadowRoot.querySelector(".chart");
                let clone = chart.cloneNode(true);
                console.log(clone);
                const xml = new XMLSerializer().serializeToString(clone);
                this.exportImage.emit("data:image/svg+xml;base64," + btoa(xml));
                console.log("data:image/svg+xml;base64," + btoa(xml));
              }}
            >
              Export
            </button>
          </div>
          <svg
            class="chart"
            style={{ display: this.openChart ? "block" : "none" }}
          />

          <slot></slot>
        </div>
      </Host>
    );
  }
}
