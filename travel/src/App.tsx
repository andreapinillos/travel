import * as React from 'react';
import Cards from './Cards';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
    <div>
    <Header />
    <Cards />
    </div>
    );
  }
}

export default App;
