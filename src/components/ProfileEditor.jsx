import React, { Component } from "react";
import pageStyle from "./profileEditor.module.css";

class ProfileEditor extends Component {
  editProfile = (
    edit,
    onEdit,
    onDoneEdit,
    setProfilePicture,
    setPostOne,
    setPostTwo,
    setPostThree,
    setBio,
    setName,
    setAge,
    setCity
  ) => {
    if (edit) {
      return (
        <div>
          <h6>Choose a Profile Picture!</h6>
          <div>
            <input type="file" onChange={setProfilePicture} />
          </div>
          <h6>Choose your first banner image!</h6>
          <div>
            <input type="file" onChange={setPostOne} />
          </div>
          <h6>Choose another banner image!</h6>
          <div>
            <input type="file" onChange={setPostTwo} />
          </div>
          <h6>Wow! A third banner image! Lucky day!</h6>
          <div>
            <input type="file" onChange={setPostThree} />
          </div>
          <h6>
            Change your name!:{" "}
            <div>
              <input type="text" value={this.props.name} onChange={setName} />
            </div>
          </h6>
          <h6>
            How old are you?:{" "}
            <div>
              <input type="number" value={this.props.age} onChange={setAge} />
            </div>
          </h6>
          <h6>
            What city are you in?:{" "}
            <div>
              <input type="text" value={this.props.city} onChange={setCity} />
            </div>
          </h6>
          <h6>
            What's your status today?:{" "}
            <div>
              <input type="text" value={this.props.bio} onChange={setBio} />
            </div>
          </h6>
          <h6></h6>
          <button className="btn btn-dark" onClick={onDoneEdit}>
            Done
          </button>
        </div>
      );
    } else {
      return (
        <div className={pageStyle.editButton}>
          <button className="btn btn-dark" onClick={onEdit}>
            Edit
          </button>
        </div>
      );
    }
  };

  render() {
    const {
      edit,
      onEdit,
      onDoneEdit,
      setProfilePicture,
      setPostOne,
      setPostTwo,
      setPostThree,
      setBio,
      setName,
      setAge,
      setCity,
    } = this.props;

    return (
      <div>
        {this.editProfile(
          edit,
          onEdit,
          onDoneEdit,
          setProfilePicture,
          setPostOne,
          setPostTwo,
          setPostThree,
          setBio,
          setName,
          setAge,
          setCity
        )}
      </div>
    );
  }
}

export default ProfileEditor;
