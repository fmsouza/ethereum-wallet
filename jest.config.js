require("react-native-mock-render/mock");
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const jsdom = require("jsdom").jsdom;

global.document = jsdom("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    global[property] = document.defaultView[property];
  }
});

enzyme.configure({ adapter: new Adapter() });