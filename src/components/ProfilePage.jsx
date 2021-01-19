import React, { Component } from "react";
import pageStyle from "./profilePage.module.css";

class ProfilePage extends Component {
  displayProfile = () => {
    if (!this.props.edit) {
      return (
        <div>
          <h1 className={pageStyle.name}>
            <p>{this.props.name}</p>
          </h1>
          <img
            src={this.props.profilePicture}
            className={pageStyle.profilePic}
            width="150"
            height="150"
            alt="Profile"
          />
          <h6>
            <p className={pageStyle.bio}>{this.props.bio}</p>
          </h6>
          <h6>
            Age: <p>{this.props.age}</p>
          </h6>
          <h6>
            City: <p>{this.props.city}</p>
          </h6>
          <div className={pageStyle.postDiv}>
            {this.props.postOne != null && (
              <img
                src={this.props.postOne}
                className={pageStyle.postOne}
                width="300"
                height="300"
                alt="Post1"
              />
            )}
            {this.props.postTwo != null && (
              <img
                src={this.props.postTwo}
                className={pageStyle.postTwo}
                width="300"
                height="300"
                alt="Post2"
              />
            )}
            {this.props.postThree != null && (
              <img
                src={this.props.postThree}
                className={pageStyle.postThree}
                width="300"
                height="300"
                alt="Post3"
              />
            )}
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.displayProfile()}</div>;
  }
}

export default ProfilePage;
