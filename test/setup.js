import 'babel-polyfill';
import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost'
});
global.window = document.defaultView;
global.navigator = global.window.navigator;
window.localStorage = window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    this[key] = undefined;
  },
};
