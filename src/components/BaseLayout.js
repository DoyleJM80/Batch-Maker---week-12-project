import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

export default class BaseLayout extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  };
};
