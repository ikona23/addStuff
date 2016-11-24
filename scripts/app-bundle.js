define('app',['exports', './todo'], function (exports, _todo) {
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

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.heading = 'Add shit that needs to be done';
      this.firstName = "Peter";
      this.lastName = "Kona";
      this.todos = [];
      this.todoDescription = '';
      this.neweArr = [];
      this.arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      this.arrCopy = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
    }

    App.prototype.addTodo = function addTodo() {
      if (this.todoDescription) {
        this.todos.push(new _todo.Todo(this.todoDescription));
        this.todoDescription = '';
      }
    };

    App.prototype.removeTodo = function removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    };

    App.prototype.addTwo = function addTwo(a, b) {
      return a + b;
    };

    App.prototype.newFunct = function newFunct(arr) {
      console.log('this is pop ', arr.pop());
      console.log('this is shift ', arr.shift());
      console.log('this is my array', arr);
    };

    App.prototype.newArr = function newArr(arr, arrCopy) {
      arr.concat(arrCopy);
      console.log('arr copy', arr, arrCopy);
    };

    App.prototype.sayHello = function sayHello() {
      alert('Hello ' + this.fullName);
    };

    _createClass(App, [{
      key: 'fullName',
      get: function get() {
        return '$(this.lastName) ' + this.firstName;
      }
    }]);

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
define('todo',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Todo = exports.Todo = function Todo(description) {
    _classCallCheck(this, Todo);

    this.description = description;
    this.done = false;
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${heading}</h1>\n\n<form submit.trigger=\"addTodo()\">\n  <input type=\"text\" value.bind='todoDescription'>\n  <button type=\"submit\">Add Stuff</button>\n  <h1>${addTwo(3,4)}</h1>\n  <h4>hello ${newFunct(arr)}</h4>\n\n  <input type=\"text\" value.bind='firstName'>\n  <input type=\"text\" value.bind='lastName'>\n\n</addShit>\n  </form>\n\n  <ul>\n    <li repeat.for=\"todo of todos\">\n    <input type=\"checkbox\" checked.bind=\"todo.done\">\n    <span css =\"text-decoration: ${todo.done ? 'line-through' : 'none'}\">\n      ${todo.description}\n    </span>\n    <Button click.trigger=\"removeTodo(todo)\">Remove</Button>\n    <button md-button=\"disabled.bind: disabled;\" click.trigger=\"showToast()\">Materialize Button</button>\n    </li>\n  </ul>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map