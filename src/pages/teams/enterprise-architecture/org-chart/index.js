import React from 'react';
import { Diagram } from "./orgchart.source";
import "./orgchart.source.css";
import { orgChartData } from './data';
import "../../org-chart.css";

export class OrganizationChart extends React.Component {
  constructor(props) {
    super(props);
    this.orgChartData = [];
  }

  componentDidMount() {
    if (typeof Diagram !== 'undefined') {
      this.diagram = new Diagram("diagram", {
        type: "org",
        scale: 0.6,
        defaultShapeType: "template",
        controls: {
          gridStep: false,
          export: false
        },
      });
      // eslint-disable-next-line no-undef
      // this.editor = new DiagramEditor("editor", {
      //     type: "org",
      //     shapeType: "template",
      // });

      this.diagram.addShape("template", {
        template: this.template,
        defaults: {
          height: 115,
          width: 330,
        },
      });

      // this.editor.diagram.addShape("template", {
      //     template: this.template,
      //     defaults: {
      //         name: "Name and First name",
      //         post: "Position held",
      //         // phone: "(405) 000-00-00",
      //         // mail: "some@mail.com",
      //         // photo: "../common/big_img/big-avatar-1.jpg",

      //         height: 115,
      //         width: 330,
      //     },
      //     properties: [
      //         { type: "position" },
      //         { type: "size" },
      //         { type: "text", label: "Name", property: "name" },
      //         { type: "text", label: "Post", property: "post" },
      //         { type: "text", label: "Phone", property: "phone" },
      //         { type: "text", label: "Mail", property: "mail" },
      //         { type: "img", label: "Photo", property: "photo" },
      //     ],
      // });
      this.orgChartData = orgChartData;
      this?.diagram?.data?.parse(this.orgChartData);
    }
  }
  componentWillUnmount() {
    this.orgChartData = [];
    this.diagram && this.diagram.destructor();
    // const mainDiagramElement = document.querySelector(".dhx_diagram__wrapper")
    // if (mainDiagramElement) {
    //     mainDiagramElement.removeEventListener("wheel", this.mouseScrollDiagramListener);
    // }
  }

  
  template({ photo, name, post, phone, mail }) {
    const renderPhoto = (picture) => {
      if (!picture) return "";
      return `<div class="dhx_diagram_template_a__picture" style="background-image: url(${photo});"></div>`
    }
    return `
          <div class="dhx_diagram_template_a_box dhx_diagram_template_a">
            <div class="dhx_item_header"></div>
            <div class="dhx_diagram_template_a__inside">
              ${renderPhoto(photo)}
              <div class="dhx_diagram_template_a__body">
                <div class="dhx_diagram_template_a__title font-bold">${name}</div>
                <div class="dhx_diagram_template_a__row">
                  <span class="dhx_diagram_template_a__text margin-v8">${post || ""}</span>
                </div>
                <div class="dhx_diagram_template_a__row">
                  <span class="dhx_diagram_template_a__icon mdi mdi-cellphone-android"></span>
                  <span class="dhx_diagram_template_a__text">${phone || ""}</span>
                </div>
                <div class="dhx_diagram_template_a__row">
                  <span class="dhx_diagram_template_a__icon mdi mdi-email-outline"></span>
                  <span class="dhx_diagram_template_a__text">
                    <a class="dhx_diagram_template_a__link" target="_blank">${mail || ""}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        `;
  }

  render() {
    return (
      <div id={"dhx-container_inner dhx_sample-container__with-editor"}>
        <div className="dhx_sample-widget" id="diagram"></div>
        <div className="dhx_sample-widget" id="editor"></div>
      </div>
    )
  }
}