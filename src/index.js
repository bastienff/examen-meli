import React from 'react';
import ReactDOM from 'react-dom';

import Search from "./components/Search";

import "./assets/scss/main.scss"

const props = window.__PRELOADED_STATE__;

ReactDOM.render(<Search {...props} />, document.querySelector('.header__inner'));