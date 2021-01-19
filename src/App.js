import React, { Component } from 'react';
import Amplify, {Storage} from 'aws-amplify';
import awsconfig from './aws-exports';
import NavBar from './components/NavBar';
import ProfilePage from './components/ProfilePage';
import ProfileEditor from './components/ProfileEditor';
import picDefault from "./components/picDefault.jpg";
import './App.css';

Amplify.configure(awsconfig);

class App extends Component {
  state = {
    profilePicture: picDefault,
    postOne: null,
    postTwo: null,
    postThree: null,
    bio: "This is a sample bio.",
    name: "User Name",
    age: 0,
    city: "Unknown",
    edit: false
  };

  onEdit = () => {
    this.setState({ edit: true });
  };

  onDoneEdit = () => {
    this.setState({ edit: false });
  };

  setProfilePicture = (input) => {
    const image = URL.createObjectURL(input.target.files[0]);
    this.setState({profilePicture: image});
    console.log(this.state.profilePicture);
  };

  setPostOne = (input) => {
    const image = URL.createObjectURL(input.target.files[0]);
    this.setState({postOne: image});
  };

  setPostTwo = (input) => {
    const image = URL.createObjectURL(input.target.files[0]);
    this.setState({postTwo: image});
  };

  setPostThree = (input) => {
    const image = URL.createObjectURL(input.target.files[0]);
    this.setState({postThree: image});
    console.log(this.state.postThree);
  };

  setBio = (input) => {
    this.setState({bio: input.target.value});
  };

  setName = (input) => {
    this.setState({name: input.target.value});
  };

  setAge = (input) => {
    this.setState({age: input.target.value});
  };

  setCity = (input) => {
    this.setState({city: input.target.value});
  };

  render() { 
    return (<React.Fragment>
      <NavBar />
      <ProfilePage 
      profilePicture={this.state.profilePicture} 
      postOne={this.state.postOne}
      postTwo={this.state.postTwo}
      postThree={this.state.postThree}
      bio={this.state.bio} 
      name={this.state.name}
      age={this.state.age}
      city={this.state.city}
      edit={this.state.edit}
      />
      <ProfileEditor 
      edit= {this.state.edit} 
      onEdit={this.onEdit}
      onDoneEdit={this.onDoneEdit}
      setProfilePicture={this.setProfilePicture}
      setPostOne={this.setPostOne}
      setPostTwo={this.setPostTwo}
      setPostThree={this.setPostThree}
      setBio={this.setBio}
      setName={this.setName}
      setAge={this.setAge}
      setCity={this.setCity}
      bio={this.state.bio} 
      name={this.state.name}
      age={this.state.age}
      city={this.state.city}
      />
      </React.Fragment>  );
  }
}
 
export default App;