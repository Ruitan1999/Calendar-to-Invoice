"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/api.tsx":
/*!***************************!*\
  !*** ./pages/api/api.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/.pnpm/@mui+material@5.12.0_@emotion+react@11.10.6_@emotion+styled@11.10.6_@types+react@18.0.35_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/index.js\");\n/* harmony import */ var _XDataGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XDataGrid */ \"./pages/api/XDataGrid.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst API = ()=>{\n    _s();\n    const [selectedEvent, SetSelectedEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [authKey, setAuthKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleStartDateChange = (event)=>{\n        setStartDate(event.target.value);\n    };\n    const handleEndDateChange = (event)=>{\n        setEndDate(event.target.value);\n    };\n    const handleAuthKeyChange = (event)=>{\n        setAuthKey(event.target.value);\n    };\n    const fetchData = ()=>{\n        const storedData = localStorage.getItem(\"eventdata\");\n        if (storedData) {\n            SetSelectedEvent(JSON.parse(storedData));\n        }\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/.pnpm/axios@1.3.5/node_modules/axios/dist/browser/axios.cjs\");\n        const options = {\n            method: \"GET\",\n            url: \"https://graph.microsoft.com/v1.0/me/calendarview?startdatetime=\".concat(startDate, \"T03:33:32.843Z&enddatetime=\").concat(endDate, \"T03:33:32.843Z&$select=subject,body,bodyPreview,organizer,attendees,start,end,location\"),\n            headers: {\n                Authorization: authKey\n            }\n        };\n        axios.request(options).then(function(response) {\n            SetSelectedEvent(response.data);\n            localStorage.setItem(\"eventdata\", JSON.stringify(response.data));\n            localStorage.setItem(\"enddate\", JSON.stringify(endDate));\n        }).catch(function(error) {\n            console.error(error);\n        });\n        fetchData(); // Call fetchData to retrieve data from localStorage\n    };\n    const handlePrevWeekData = ()=>{\n        const currentDate = new Date();\n        const prevWeekStart = new Date(currentDate);\n        prevWeekStart.setDate(currentDate.getDate() - 7); // Subtract 7 days for previous week's start date\n        prevWeekStart.setDate(prevWeekStart.getDate() - prevWeekStart.getDay() + 1); // Set to the first day (Sunday) of previous week\n        const prevWeekEnd = new Date(prevWeekStart);\n        prevWeekEnd.setDate(prevWeekStart.getDate() + 6); // Add 6 days for previous week's end date (Saturday)\n        setStartDate(prevWeekStart.toISOString().split(\"T\")[0]);\n        setEndDate(prevWeekEnd.toISOString().split(\"T\")[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to Calendar to Invoice Converter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"To get started Go to the following link and Get Yourself an Access Token\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://developer.microsoft.com/en-us/graph/graph-explorer\",\n                        target: \"_blank\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            type: \"button\",\n                            variant: \"contained\",\n                            sx: {\n                                marginBottom: \"20px\"\n                            },\n                            children: \"Get Access Token\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                    container: true,\n                    spacing: {\n                        xs: 2,\n                        md: 3\n                    },\n                    columns: {\n                        xs: 6,\n                        sm: 12,\n                        md: 1\n                    },\n                    sx: {\n                        marginBottom: \"55px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                id: \"authKey\",\n                                label: \"Key\",\n                                type: \"text\",\n                                value: authKey,\n                                onChange: handleAuthKeyChange,\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                fullWidth: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                id: \"start-date\",\n                                label: \"Week Start Date\",\n                                type: \"date\",\n                                value: startDate,\n                                onChange: handleStartDateChange,\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                fullWidth: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                id: \"end-date\",\n                                label: \"Week End Date\",\n                                type: \"date\",\n                                value: endDate,\n                                onChange: handleEndDateChange,\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                fullWidth: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"outlined\",\n                                type: \"button\",\n                                onClick: handlePrevWeekData,\n                                fullWidth: true,\n                                sx: {\n                                    height: \"55px\"\n                                },\n                                children: \"Get Prev Week Data\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"contained\",\n                                type: \"submit\",\n                                fullWidth: true,\n                                sx: {\n                                    height: \"55px\"\n                                },\n                                children: \"Get Data\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 149,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_XDataGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                eventData: selectedEvent\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(API, \"1Wh1I8unsfxEu39NqdeyVu+elT8=\");\n_c = API;\n/* harmony default export */ __webpack_exports__[\"default\"] = (API);\nvar _c;\n$RefreshReg$(_c, \"API\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztnQ0FDTG9CLFNBQVNuQztnQ0FDVGtDLFNBQVM7Z0NBQ1RqQixJQUFJO29DQUFFbUIsUUFBUTtnQ0FBTzswQ0FDdEI7Ozs7Ozs7Ozs7O3NDQUlILDhEQUFDOUUsK0NBQUlBOzRCQUFDc0UsSUFBSTs0QkFBQ0osSUFBSTs0QkFBR0csSUFBSTs0QkFBR0YsSUFBSTtzQ0FDM0IsNEVBQUNsRSxpREFBTUE7Z0NBQ0x5RCxTQUFRO2dDQUNSRCxNQUFLO2dDQUNMbUIsU0FBUztnQ0FDVGpCLElBQUk7b0NBQUVtQixRQUFRO2dDQUFPOzBDQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNUCw4REFBQzVFLGtEQUFTQTtnQkFBQzZFLFdBQVczRTs7Ozs7Ozs7QUFHNUI7R0EvSk1EO0tBQUFBO0FBaUtOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9hcGkudHN4PzkyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHRGaWVsZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBYRGF0YUdyaWQgZnJvbSBcIi4vWERhdGFHcmlkXCI7XG5cbmNvbnN0IEFQSSA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkRXZlbnQsIFNldFNlbGVjdGVkRXZlbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthdXRoS2V5LCBzZXRBdXRoS2V5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0U3RhcnREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0RW5kRGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUF1dGhLZXlDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldEF1dGhLZXkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXZlbnRkYXRhXCIpO1xuICAgIGlmIChzdG9yZWREYXRhKSB7XG4gICAgICBTZXRTZWxlY3RlZEV2ZW50KEpTT04ucGFyc2Uoc3RvcmVkRGF0YSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL3YxLjAvbWUvY2FsZW5kYXJ2aWV3P3N0YXJ0ZGF0ZXRpbWU9JHtzdGFydERhdGV9VDAzOjMzOjMyLjg0M1omZW5kZGF0ZXRpbWU9JHtlbmREYXRlfVQwMzozMzozMi44NDNaJiRzZWxlY3Q9c3ViamVjdCxib2R5LGJvZHlQcmV2aWV3LG9yZ2FuaXplcixhdHRlbmRlZXMsc3RhcnQsZW5kLGxvY2F0aW9uYCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aEtleSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBheGlvc1xuICAgICAgLnJlcXVlc3Qob3B0aW9ucylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7XG4gICAgICAgIFNldFNlbGVjdGVkRXZlbnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXZlbnRkYXRhXCIsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbmRkYXRlXCIsIEpTT04uc3RyaW5naWZ5KGVuZERhdGUpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICBmZXRjaERhdGEoKTsgLy8gQ2FsbCBmZXRjaERhdGEgdG8gcmV0cmlldmUgZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByZXZXZWVrRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCBwcmV2V2Vla1N0YXJ0ID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuXG4gICAgcHJldldlZWtTdGFydC5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSAtIDcpOyAvLyBTdWJ0cmFjdCA3IGRheXMgZm9yIHByZXZpb3VzIHdlZWsncyBzdGFydCBkYXRlXG4gICAgcHJldldlZWtTdGFydC5zZXREYXRlKHByZXZXZWVrU3RhcnQuZ2V0RGF0ZSgpIC0gcHJldldlZWtTdGFydC5nZXREYXkoKSArIDEpOyAvLyBTZXQgdG8gdGhlIGZpcnN0IGRheSAoU3VuZGF5KSBvZiBwcmV2aW91cyB3ZWVrXG5cbiAgICBjb25zdCBwcmV2V2Vla0VuZCA9IG5ldyBEYXRlKHByZXZXZWVrU3RhcnQpO1xuXG4gICAgcHJldldlZWtFbmQuc2V0RGF0ZShwcmV2V2Vla1N0YXJ0LmdldERhdGUoKSArIDYpOyAvLyBBZGQgNiBkYXlzIGZvciBwcmV2aW91cyB3ZWVrJ3MgZW5kIGRhdGUgKFNhdHVyZGF5KVxuXG4gICAgc2V0U3RhcnREYXRlKHByZXZXZWVrU3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0pO1xuICAgIHNldEVuZERhdGUocHJldldlZWtFbmQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIENhbGVuZGFyIHRvIEludm9pY2UgQ29udmVydGVyPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVG8gZ2V0IHN0YXJ0ZWQgR28gdG8gdGhlIGZvbGxvd2luZyBsaW5rIGFuZCBHZXQgWW91cnNlbGYgYW4gQWNjZXNzXG4gICAgICAgICAgVG9rZW5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL2dyYXBoL2dyYXBoLWV4cGxvcmVyXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIHN4PXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBHZXQgQWNjZXNzIFRva2VuXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDIsIG1kOiAzIH19XG4gICAgICAgICAgY29sdW1ucz17eyB4czogNiwgc206IDEyLCBtZDogMSB9fVxuICAgICAgICAgIHN4PXt7IG1hcmdpbkJvdHRvbTogXCI1NXB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXs0fSBtZD17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwiYXV0aEtleVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiS2V5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17YXV0aEtleX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUF1dGhLZXlDaGFuZ2V9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17NH0gbWQ9ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cInN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIldlZWsgU3RhcnQgRGF0ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXs0fSBtZD17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwiZW5kLWRhdGVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIldlZWsgRW5kIERhdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXs0fSBtZD17NH0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2V2Vla0RhdGF9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBzeD17eyBoZWlnaHQ6IFwiNTVweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdldCBQcmV2IFdlZWsgRGF0YVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXs0fSBtZD17NH0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHN4PXt7IGhlaWdodDogXCI1NXB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IERhdGFcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9mb3JtPlxuICAgICAgPFhEYXRhR3JpZCBldmVudERhdGE9e3NlbGVjdGVkRXZlbnR9PjwvWERhdGFHcmlkPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQVBJO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXh0RmllbGQiLCJHcmlkIiwiQnV0dG9uIiwiWERhdGFHcmlkIiwiQVBJIiwic2VsZWN0ZWRFdmVudCIsIlNldFNlbGVjdGVkRXZlbnQiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsImF1dGhLZXkiLCJzZXRBdXRoS2V5IiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJoYW5kbGVBdXRoS2V5Q2hhbmdlIiwiZmV0Y2hEYXRhIiwic3RvcmVkRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicmVxdWlyZSIsIm9wdGlvbnMiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUHJldldlZWtEYXRhIiwiY3VycmVudERhdGUiLCJEYXRlIiwicHJldldlZWtTdGFydCIsInNldERhdGUiLCJnZXREYXRlIiwiZ2V0RGF5IiwicHJldldlZWtFbmQiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZGl2IiwiaDEiLCJwIiwiYSIsImhyZWYiLCJ0eXBlIiwidmFyaWFudCIsInN4IiwibWFyZ2luQm90dG9tIiwiYnIiLCJmb3JtIiwib25TdWJtaXQiLCJjb250YWluZXIiLCJzcGFjaW5nIiwieHMiLCJtZCIsImNvbHVtbnMiLCJzbSIsIml0ZW0iLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJJbnB1dExhYmVsUHJvcHMiLCJzaHJpbmsiLCJmdWxsV2lkdGgiLCJvbkNsaWNrIiwiaGVpZ2h0IiwiZXZlbnREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/api.tsx\n"));

/***/ })

});