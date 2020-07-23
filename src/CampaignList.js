import React from 'react';
import axios from 'axios';

class Campaign extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          campaignListUrl: 'http://0.0.0.0:8000/api/campaign/campaigns',
          title: '',
          body: '',
          campaign: []
      };

      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleBodyChange = this.handleBodyChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    getData(){
        setTimeout(() => {
            axios.get(this.state.campaignListUrl)
            .then(function (response) {
                console.log(response.data)
                this.setState({campaign: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
        }, 1000)
      }
    
      componentDidMount(){
        this.getData();
      }

    handleTitleChange(event) {
      this.setState({title: event.target.title});
    }

    handleBodyChange(event) {
        this.setState({body: event.target.body});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.title);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input name="title" type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <label>
            body:
            <input name="body" type="textarea" value={this.state.body} onChange={this.handleBodyChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Campaign