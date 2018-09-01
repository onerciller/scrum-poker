import React from 'react';
import Header from '../header';
export default ({ children }) => {
  return (
    <div>
			<Header />
			<br/><br/><br/>
      <main role="main" className="container">
        {children}
      </main>
    </div>
  );
};
