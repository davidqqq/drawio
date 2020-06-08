import { Component, Prop, h, EventEmitter, Event } from "@stencil/core";
import { format } from "../../utils/utils";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @Event() select: EventEmitter;
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{this.getText()}</p>
        <select
          onChange={ev => {
            console.log((ev.target as HTMLSelectElement).value);
            this.select.emit((ev.target as HTMLSelectElement).value);
          }}
        >
          <option value="http://localhost:3001/v1/swagger">Sample 1</option>
          <option value="http://localhost:3001/v1/swagger2">Sample 2</option>
        </select>
      </div>
    );
  }
}
