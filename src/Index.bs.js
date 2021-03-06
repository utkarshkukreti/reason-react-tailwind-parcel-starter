

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReactDom from "react-dom";

function Index$Counter(Props) {
  var match = React.useState((function () {
          return 0;
        }));
  var setCount = match[1];
  var count = match[0];
  return React.createElement("div", {
              className: "mt-6 flex justify-center align-center"
            }, React.createElement("button", {
                  className: "px-3 py-1 bg-blue-600 text-white rounded",
                  onClick: (function (param) {
                      return Curry._1(setCount, (function (param) {
                                    return count - 1 | 0;
                                  }));
                    })
                }, "-"), React.createElement("div", {
                  className: "mx-4"
                }, String(count)), React.createElement("button", {
                  className: "px-3 py-1 bg-blue-600 text-white rounded",
                  onClick: (function (param) {
                      return Curry._1(setCount, (function (param) {
                                    return count + 1 | 0;
                                  }));
                    })
                }, "+"));
}

var Counter = {
  make: Index$Counter
};

ReactDom.render(React.createElement(Index$Counter, { }), document.querySelector("main"));

export {
  Counter ,
  
}
/*  Not a pure module */
