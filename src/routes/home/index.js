/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Home from './Home';

async function action({ fetch }) {
  const resp = await fetch('https://honeyherdheroku.herokuapp.com/token.json');

  const tokenObj = await resp.json();

  if (!tokenObj || !tokenObj.token) throw new Error('Failed to load the token');

  return {
    title: 'Honey Herd Ranch',
    chunks: ['home'],
    component: (
      <Layout>
        <Home token={tokenObj.token} />
      </Layout>
    ),
  };
}

export default action;
