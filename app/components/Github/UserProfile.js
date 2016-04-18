import React from "react";

const UserProfile = props => {
  return (
    <ul className="list-group">
      {props.bio.avatar_url &&
      <li className="list-group-item"><img src={props.bio.avatar_url} className="img-rounded img-responsive"/>
      </li>}
      {props.bio.name && <li className="list-group-item">Name: {props.bio.name}</li>}
      {props.bio.login && <li className="list-group-item">Username: {props.bio.login}</li>}
      {props.bio.email && <li className="list-group-item">Email: {props.bio.email}</li>}
      {props.bio.location && <li className="list-group-item">Location: {props.bio.location}</li>}
      {props.bio.company && <li className="list-group-item">Company: {props.bio.company}</li>}
      {props.bio.followers > 0 && <li className="list-group-item">Followers: {props.bio.followers}</li>}
      {props.bio.following > 0 && <li className="list-group-item">Following: {props.bio.following}</li>}
      {props.bio.public_repos > 0 &&
      <li className="list-group-item">Public Repos: {props.bio.public_repos}</li>}
      {props.bio.blog && <li className="list-group-item">Blog: <a href={props.bio.blog}>{props.bio.blog}</a></li>}
    </ul>
  );
};


UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfile;