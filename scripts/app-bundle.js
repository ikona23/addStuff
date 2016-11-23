define('addShit',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AddShit = exports.AddShit = function AddShit(text) {
    _classCallCheck(this, AddShit);

    this.text = text;
    this.done = false;
  };
});
define('app',['exports', './addShit'], function (exports, _addShit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.heading = 'Add shit that needs to be done';
      this.message = 'Hello World!';
      this.addStuff = [];
      this.addShitDesc = '';
    }

    App.prototype.addShit = function addShit() {
      if (this.addShitDesc) {
        this.addStuff.push(new _addShit.AddShit(this.addShitDesc));
        this.addShitDesc = '';
      }
    };

    App.prototype.removeShit = function removeShit(shit) {
      var index = this.addStuff.indexOf(shit);
      if (index !== -1) {
        this.addStuff.splice(index, 1);
      }
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${heading}</h1>\n\n<form submit.trigger=\"addStuff()\"></form>\n  <input type=\"text\" value.bind='addShitDesc'>\n  <button type=\"submit\">Add Stuff</button>\n  </addShitD>\n  </form>\n  <h1>${addStuff}</h1>\n  <h1>${addShitDesc}</h1>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map