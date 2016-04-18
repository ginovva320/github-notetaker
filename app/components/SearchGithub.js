import React from "react";
import {hashHistory} from "react-router";

class SearchGithub extends React.Component {
  getRef(ref) {
    this.usernameRef = ref;
  }

  handleSubmit() {
    const username = this.usernameRef.value;

    this.usernameRef.value = '';
    hashHistory.push('/profile/' + username);
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={ref => this.getRef(ref)}/>
          </div>
          <div className="col-sm-5 form-group">
            <button className="btn btn-block btn-primary" type="submit">Search Github</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchGithub;