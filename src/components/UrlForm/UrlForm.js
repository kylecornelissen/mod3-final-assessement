import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUrl } from '../../apiCalls';
import { setUrls } from '../../actions';


class UrlForm extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const newUrl = {long_url: this.state.urlToShorten, title: this.state.title}
    await addUrl(newUrl)
      .then(data => {
        console.log(this.props.urls);
        this.props.setUrls([...this.props.urls, data])
      })
      .catch(error => console.log(error))
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export const mapStateToProps = ({ urls }) => ({
  urls
});

export const mapDispatchToProps = dispatch => {
  return {
    setUrls: urls => dispatch(setUrls(urls))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlForm);
