import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const renderComponent = (Component) =>
    // eslint-disable-next-line react/no-render-return-value
    ReactDOM.render(<Component />, document.getElementById('root'));

renderComponent(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        renderComponent(App);
    });
}
