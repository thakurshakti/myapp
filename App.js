import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {client} from './src/graphQL/client';
import MainStackNavigator from './src/navigator/MainStackNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainStackNavigator />
    </ApolloProvider>
  );
};

export default App;
