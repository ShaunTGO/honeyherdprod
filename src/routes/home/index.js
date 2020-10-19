/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import Feed from '../../components/InstaFeed/Feed';
import '../../components/InstaFeed/Feed.css';
import Instagram from '../../../tools/lib/Instagram';

async function action({ fetch }) {
  /*const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });*/
  // const instaResp = await Instagram.getFeed('honeyherdRanch');

  // console.log('insta resp is ', instaResp);
  // const { data } = await resp.json();
  // if (!data || !data.news) throw new Error('Failed to load the news feed.');

  let feed = new Instafeed({
    accessToken: 'your-token'
  });
  feed.run();

  return {
    title: 'Honey Herd Ranch',
    chunks: ['home'],
    component: (
      <Layout>
        <script type="text/javascript" src="../../../tools/lib/instafeed.min.js" />
        <div id="instafeed" />

        <script src="https://honeyherdheroku.herokuapp.com/token.js" />
        <script type="text/javascript">

        </script>
        {/*<Feed media={instaResp} />*/}
        {/*<Home news={data.news} />*/}
      </Layout>
    ),
  };
}

export default action;
