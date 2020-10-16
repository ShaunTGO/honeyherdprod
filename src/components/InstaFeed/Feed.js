import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import Media from './Media';
import s from './Feed.css';

export default function Feed({media}) {
  useStyles(s);

  const className = s.Feed;
  return (
    <div className={className}>
      {media.map((media, index) => (
        <Media key={index} src={media.src} url={media.url} alt={media.alt} />
      ))}
    </div>
  );
}
