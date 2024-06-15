"use strict";

var _testUtils = require("@vue/test-utils");

var _Contact = _interopRequireDefault(require("@/views/Contact.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Contact.vue', function () {
  it('renders contact page', function () {
    var wrapper = (0, _testUtils.shallowMount)(_Contact["default"]);
    expect(wrapper.text()).toContain('Esta es la página Contact.');
  });
});
//# sourceMappingURL=Contact.spec.dev.js.map
