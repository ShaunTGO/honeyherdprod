import React, { Component } from 'react';
import Instagram from '../../../tools/lib/Instagram';
import Media from './Media';
import s from './Feed.css';

class Feed extends Component {
  static defaultProps = {
    className: '',
    classNameLoading: '',
    getFeedFn: Instagram.getFeed,
  };

  constructor(props) {
    super(props);

    this.state = { loading: true, media: [] };
  }

  componentDidMount() {
    this.props
      .getFeedFn(this.props.userName)
      .then(media => this.setState({ loading: false, media }))
      .catch(error => this.setState({ error }));
  }

  render() {
    if (this.state.error) throw this.state.error;

    const className = this.state.loading
      ? [s.Feed, s.Loading].join(' ')
      : s.Feed;

    console.log('className is', className);

    return (
      <div className={className}>
        {this.state.media.map((media, index) => (
          <Media key={index} src={media.src} url={media.url} alt={media.alt} />
        ))}
      </div>
    );
  }
}

export default Feed;
