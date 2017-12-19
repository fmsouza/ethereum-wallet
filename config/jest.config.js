require("react-native-mock-render/mock");
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { JSDOM } = require("jsdom");

global = new JSDOM("");
enzyme.configure({ adapter: new Adapter() });