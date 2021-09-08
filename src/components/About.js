import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import reduxIcon from "@iconify/icons-logos/redux";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src="https://lh3.googleusercontent.com/QTOloGOz3GC5tAuAaRCc5WuTQrxwjANoIAUmWZcVLuEdvGAf-To_vRzFPqEBROCActDp201ZNg8juIdvI8bEM-1uidIiuK6j1ZKsXWjztIpADpBMqpMo46rJq0y3khUp4OGDCn1bpFYGD6znV1Fcfme9qeUH3LsTtToWemi7x6WZN8CVWvN5jR_59e1sHeQuWXsJDDDOUljdMNzIhmhdfk0WOpJVTuZexvakHR84qsSV3PLJL9GE0RwByeOpgSG5BWVArV6w9HdG8rOWnw5JND9tJ9lZljr4FjVlOnwKkTRieDrEa-MeKOikcT9E9mG-Zz3o62_mrA5NxOqCsbifm3nniYok9VCz0ufsZdbWFOJ2nZGY8AYnY-3sWkc7s7ZtHKKPIsUyFvfGKSMp8HBfkoXh4M_FydRAvGvik2XiqJZ6AjBhRTCKDaaih0_mqfNfQbqSixlZUvRMw1FIpxbAjwj7VNGa8TnYQC_CMXZ8_9Pt-6v9y7WrJ8sy6b14gHTKyoMz3o7vKzPFLofz9sH9foPtOpdCI_bbiGOi6DnYPBqMFplCpmVFnmOUbs2fycBi8MdyK1I1v4jOcPOncv-PFdyMeChay61qoYYPoz2vYkrd2FGiNn_ZNCgOUDbWkAsZZFnswnNyoT7uYvp3q4NoAdeXYTTpVU-_h5nurdR4zwZtH17s5gtIuQU3aPt50nQ8jrhpxgeDFpJyg-JijCCZ20Xu=w800-h1068-no?authuser=0"
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={javascriptIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reduxIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
