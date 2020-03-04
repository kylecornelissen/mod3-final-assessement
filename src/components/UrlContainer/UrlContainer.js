import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUrls } from '../../apiCalls';
import { setUrls } from '../../actions';
import './UrlContainer.css';

export class UrlContainer extends Component {
  componentDidMount() {
    this.loadUrls();
  }

  loadUrls = () => {
    getUrls()
      .then(data => this.props.setUrls(data.urls))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    let { urls } = this.props;
    urls = urls.map(url => {
      return (
        <div className="url">
          <h3>{url.title}</h3>
          <a href={url.short_url} target="blank">{url.short_url}</a>
          <p>{url.long_url}</p>
        </div>
      )
    });
    return (
      <section>
        { urls.length ? urls : <p>No urls yet! Find some to shorten!</p> }
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer);
