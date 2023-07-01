/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n\n\n// import Level from \"./scripts/level\"\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"my-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const dimensions = {\n    width: canvas.width,\n    height: canvas.height\n  };\n\n  // const level = new Level(dimensions, canvas, {\n  //     boxSize: 50,\n  //     boxSpeed: 4,\n  //     boxSpacing: 200\n  // });\n\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas);\n  const canvasHeight = 1000;\n  const rectSize = canvasHeight / 4;\n\n  // canvas.width = canvasHeight;\n  // canvas.height = canvasHeight;\n\n  function animate() {\n    // Drawing background //\n    // ctx.translate(0.5, 0.5);\n    ctx.clearRect(0, 0, 1000, 1000);\n    for (let i = 0; i < 6; i++) {\n      for (let j = 0; j < 6; j++) {\n        const colorValue = 255 - 255 / 5 * j;\n        const grayscale = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;\n        ctx.fillStyle = grayscale;\n        ctx.fillRect(j * rectSize, i * rectSize, rectSize, rectSize);\n      }\n    }\n    ctx.lineWidth = 11;\n    ctx.strokeStyle = \"#348888\";\n    ctx.beginPath();\n    ctx.moveTo(0, 500);\n    ctx.lineTo(1000, 500);\n    ctx.stroke();\n    // Background //\n\n    // level.animate();\n    player.drawBox();\n    requestAnimationFrame(animate);\n  }\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ3VDO0FBQ0Y7QUFDckM7O0FBR0FFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUNuRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUNuQyxNQUFNQyxVQUFVLEdBQUc7SUFBQ0MsS0FBSyxFQUFFTCxNQUFNLENBQUNLLEtBQUs7SUFBRUMsTUFBTSxFQUFFTixNQUFNLENBQUNNO0VBQU8sQ0FBQzs7RUFJaEU7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSVYsdURBQU0sQ0FBQ0csTUFBTSxDQUFDO0VBRWpDLE1BQU1RLFlBQVksR0FBRyxJQUFJO0VBQ3pCLE1BQU1DLFFBQVEsR0FBR0QsWUFBWSxHQUFHLENBQUM7O0VBRWpDO0VBQ0E7O0VBRUEsU0FBU0UsT0FBT0EsQ0FBQSxFQUFHO0lBQ2Y7SUFDQTtJQUNBUixHQUFHLENBQUNTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFHL0IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUN4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQ3hCLE1BQU1DLFVBQVUsR0FBRyxHQUFHLEdBQUksR0FBRyxHQUFHLENBQUMsR0FBSUQsQ0FBQztRQUN0QyxNQUFNRSxTQUFTLEdBQUksT0FBTUQsVUFBVyxLQUFJQSxVQUFXLEtBQUlBLFVBQVcsR0FBRTtRQUNwRVosR0FBRyxDQUFDYyxTQUFTLEdBQUdELFNBQVM7UUFDekJiLEdBQUcsQ0FBQ2UsUUFBUSxDQUFDSixDQUFDLEdBQUdKLFFBQVEsRUFBRUcsQ0FBQyxHQUFHSCxRQUFRLEVBQUVBLFFBQVEsRUFBRUEsUUFBUSxDQUFDO01BQ2hFO0lBQ0o7SUFFQVAsR0FBRyxDQUFDZ0IsU0FBUyxHQUFHLEVBQUU7SUFDbEJoQixHQUFHLENBQUNpQixXQUFXLEdBQUcsU0FBUztJQUMzQmpCLEdBQUcsQ0FBQ2tCLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZsQixHQUFHLENBQUNtQixNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNsQm5CLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBRXJCcEIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLENBQUM7SUFDWjs7SUFFQTtJQUNBaEIsTUFBTSxDQUFDaUIsT0FBTyxDQUFDLENBQUM7SUFDaEJDLHFCQUFxQixDQUFDZixPQUFPLENBQUM7RUFDbEM7RUFFQUEsT0FBTyxDQUFDLENBQUM7QUFLYixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWdodHNwZWVkcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vc2NyaXB0cy9wbGF5ZXJcIlxuLy8gaW1wb3J0IExldmVsIGZyb20gXCIuL3NjcmlwdHMvbGV2ZWxcIlxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15LWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHt3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcblxuICBcblxuICAgIC8vIGNvbnN0IGxldmVsID0gbmV3IExldmVsKGRpbWVuc2lvbnMsIGNhbnZhcywge1xuICAgIC8vICAgICBib3hTaXplOiA1MCxcbiAgICAvLyAgICAgYm94U3BlZWQ6IDQsXG4gICAgLy8gICAgIGJveFNwYWNpbmc6IDIwMFxuICAgIC8vIH0pO1xuXG4gICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihjYW52YXMpO1xuXG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gMTAwMDtcbiAgICBjb25zdCByZWN0U2l6ZSA9IGNhbnZhc0hlaWdodCAvIDQ7XG4gIFxuICAgIC8vIGNhbnZhcy53aWR0aCA9IGNhbnZhc0hlaWdodDtcbiAgICAvLyBjYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgLy8gRHJhd2luZyBiYWNrZ3JvdW5kIC8vXG4gICAgICAgIC8vIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDEwMDApO1xuXG4gIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvclZhbHVlID0gMjU1IC0gKDI1NSAvIDUpICogajtcbiAgICAgICAgICAgICAgICBjb25zdCBncmF5c2NhbGUgPSBgcmdiKCR7Y29sb3JWYWx1ZX0sICR7Y29sb3JWYWx1ZX0sICR7Y29sb3JWYWx1ZX0pYDtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JheXNjYWxlO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChqICogcmVjdFNpemUsIGkgKiByZWN0U2l6ZSwgcmVjdFNpemUsIHJlY3RTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDExO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMzNDg4ODhcIjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKDAsIDUwMClcbiAgICAgICAgY3R4LmxpbmVUbygxMDAwLCA1MDApO1xuICAgICAgICBcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyBCYWNrZ3JvdW5kIC8vXG5cbiAgICAgICAgLy8gbGV2ZWwuYW5pbWF0ZSgpO1xuICAgICAgICBwbGF5ZXIuZHJhd0JveCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpO1xuICBcbiAgICBcblxuICAgIFxufSkgXG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsIlBsYXllciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllciIsImNhbnZhc0hlaWdodCIsInJlY3RTaXplIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImkiLCJqIiwiY29sb3JWYWx1ZSIsImdyYXlzY2FsZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkcmF3Qm94IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHdCQUF3QjtJQUM3QyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBQ3hEO0VBQ0FBLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0YsR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxPQUFPO0VBQzVDO0FBR0o7QUFDQSwrREFBZVIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZ2h0c3BlZWRzLy4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZVxuICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT5JdCdzIEFMSVZFISEhPC9oMT5cIlxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKVxuICAgIH1cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoIVwiXG4gICAgfVxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor(canvas) {\n    this.main = main;\n    this.canvas = canvas;\n    this.color = '#F24405';\n    this.ctx = this.canvas.getContext(\"2d\");\n    // this.drawBox()\n\n    this.keyBind();\n  }\n  keyBind() {\n    document.addEventListener(\"keydown\", e => {\n      switch (e.code) {\n        case \"KeyA\":\n          this.changeColor(\"#FFFF00\");\n          break;\n        case \"KeyS\":\n          this.changeColor(\"#FF00FF\");\n          break;\n        case \"KeyD\":\n          this.changeColor(\"#00FFFF\");\n          break;\n      }\n    });\n  }\n  changeColor(color) {\n    this.color = color;\n  }\n  drawBox() {\n    // this.ctx.lineWidth = 5\n    // this.ctx.strokeStyle = 'grey';\n    // this.ctx.strokeRect(2, 443, 50, 50);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(0, 444.5, 50, 50);\n  }\n  bringToFront() {\n    this.canvas.appendChild(this.canvas);\n  }\n}\n// some code\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDRCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDRSxLQUFLLEdBQUcsU0FBUztJQUN0QixJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztJQUN2Qzs7SUFFQSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0VBQ2xCO0VBRUFBLE9BQU9BLENBQUEsRUFBRztJQUNOQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsQ0FBQyxJQUFLO01BQ3hDLFFBQU9BLENBQUMsQ0FBQ0MsSUFBSTtRQUNULEtBQUssTUFBTTtVQUNQLElBQUksQ0FBQ0MsV0FBVyxDQUFDLFNBQVMsQ0FBQztVQUMzQjtRQUNKLEtBQUssTUFBTTtVQUNQLElBQUksQ0FBQ0EsV0FBVyxDQUFDLFNBQVMsQ0FBQztVQUMzQjtRQUNKLEtBQUssTUFBTTtVQUNQLElBQUksQ0FBQ0EsV0FBVyxDQUFDLFNBQVMsQ0FBQztVQUMzQjtNQUNSO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQUEsV0FBV0EsQ0FBQ1IsS0FBSyxFQUFFO0lBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7RUFDdEI7RUFFQVMsT0FBT0EsQ0FBQSxFQUFHO0lBRU47SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFDUixHQUFHLENBQUNTLFNBQVMsR0FBRyxJQUFJLENBQUNWLEtBQUs7SUFDL0IsSUFBSSxDQUFDQyxHQUFHLENBQUNVLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFHdkM7RUFFQUMsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDZCxNQUFNLENBQUNlLFdBQVcsQ0FBQyxJQUFJLENBQUNmLE1BQU0sQ0FBQztFQUN4QztBQUNKO0FBQ0E7QUFDQSwrREFBZUYsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZ2h0c3BlZWRzLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSAnI0YyNDQwNSc7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAvLyB0aGlzLmRyYXdCb3goKVxuICAgICAgXG4gICAgICAgIHRoaXMua2V5QmluZCgpO1xuICAgIH1cblxuICAgIGtleUJpbmQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goZS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIktleUFcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDb2xvcihcIiNGRkZGMDBcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJLZXlTXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IoXCIjRkYwMEZGXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiS2V5RFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKFwiIzAwRkZGRlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBkcmF3Qm94KCkge1xuXG4gICAgICAgIC8vIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDVcbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnZ3JleSc7XG4gICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVJlY3QoMiwgNDQzLCA1MCwgNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCA0NDQuNSwgNTAsIDUwKVxuICAgICAgICBcbiAgICAgXG4gICAgfVxuXG4gICAgYnJpbmdUb0Zyb250KCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgfVxufVxuLy8gc29tZSBjb2RlXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwibmFtZXMiOlsiUGxheWVyIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJtYWluIiwiY29sb3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwia2V5QmluZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwiY2hhbmdlQ29sb3IiLCJkcmF3Qm94IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJicmluZ1RvRnJvbnQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWdodHNwZWVkcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;