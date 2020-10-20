/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line css-modules/no-unused-class
import s from './Home.css';
import Instafeed from '../../../tools/lib/instafeed.min';

export default function Home({ token }) {
  useStyles(s);
  const [isSSRDone, setIsSSRDone] = useState(false);

  const feed = new Instafeed({
    accessToken: token,
  });

  useEffect(() => {
    if (document.getElementById('instafeed') !== null) {
      feed.run();
    }

    setIsSSRDone(true);
  });

  let instaFeedPanel;
  if (isSSRDone === true) {
    instaFeedPanel = <div id="instafeed" className={s.instafeed} />;
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Instagram Feed</h1>
        {instaFeedPanel}
      </div>
    </div>
  );
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
};
