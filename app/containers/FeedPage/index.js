/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import PostList from './PostList';
import PostItem from './PostItem';
import ListItemTitle from './ListItemTitle';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feed Page</title>
          <meta name="description" content="Feed page of React.js Boilerplate application" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <PostList>
          <PostItem>
            <ListItemTitle>
              <FormattedMessage {...messages.scaffoldingHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.scaffoldingMessage} />
            </p>
          </PostItem>
        </PostList>
      </div>
    );
  }
}
