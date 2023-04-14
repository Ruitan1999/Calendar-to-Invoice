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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/.pnpm/@mui+material@5.12.0_@emotion+react@11.10.6_@emotion+styled@11.10.6_@types+react@18.0.35_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/index.js\");\n/* harmony import */ var _XDataGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XDataGrid */ \"./pages/api/XDataGrid.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst API = ()=>{\n    _s();\n    const [selectedEvent, SetSelectedEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [authKey, setAuthKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleStartDateChange = (event)=>{\n        setStartDate(event.target.value);\n    };\n    const handleEndDateChange = (event)=>{\n        setEndDate(event.target.value);\n    };\n    const handleAuthKeyChange = (event)=>{\n        setAuthKey(event.target.value);\n    };\n    const fetchData = ()=>{\n        const storedData = localStorage.getItem(\"eventdata\");\n        if (storedData) {\n            SetSelectedEvent(JSON.parse(storedData));\n        }\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/.pnpm/axios@1.3.5/node_modules/axios/dist/browser/axios.cjs\");\n        const options = {\n            method: \"GET\",\n            url: \"https://graph.microsoft.com/v1.0/me/calendarview?startdatetime=\".concat(startDate, \"T03:33:32.843Z&enddatetime=\").concat(endDate, \"T03:33:32.843Z&$select=subject,body,bodyPreview,organizer,attendees,start,end,location\"),\n            headers: {\n                Authorization: authKey\n            }\n        };\n        axios.request(options).then(function(response) {\n            SetSelectedEvent(response.data);\n            localStorage.setItem(\"eventdata\", JSON.stringify(response.data));\n            localStorage.setItem(\"enddate\", JSON.stringify(endDate));\n        }).catch(function(error) {\n            console.error(error);\n        });\n        fetchData(); // Call fetchData to retrieve data from localStorage\n    };\n    const handlePrevWeekData = ()=>{\n        const currentDate = new Date();\n        const prevWeekStart = new Date(currentDate);\n        prevWeekStart.setDate(currentDate.getDate() - 7); // Subtract 7 days for previous week's start date\n        prevWeekStart.setDate(prevWeekStart.getDate() - prevWeekStart.getDay() + 1); // Set to the first day (Sunday) of previous week\n        const prevWeekEnd = new Date(prevWeekStart);\n        prevWeekEnd.setDate(prevWeekStart.getDate() + 6); // Add 6 days for previous week's end date (Saturday)\n        setStartDate(prevWeekStart.toISOString().split(\"T\")[0]);\n        setEndDate(prevWeekEnd.toISOString().split(\"T\")[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to Calendar to Invoice Converter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"To get started Go to the following link and Get Yourself an Access Token\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://developer.microsoft.com/en-us/graph/graph-explorer\",\n                        target: \"_blank\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            type: \"button\",\n                            variant: \"contained\",\n                            sx: {\n                                marginBottom: \"30px\",\n                                height: \"50px\"\n                            },\n                            children: \"Get Access Token\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"After you\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                    container: true,\n                    spacing: {\n                        xs: 2,\n                        md: 3\n                    },\n                    columns: {\n                        xs: 6,\n                        sm: 12,\n                        md: 1\n                    },\n                    sx: {\n                        marginBottom: \"55px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                id: \"authKey\",\n                                label: \"Key\",\n                                type: \"text\",\n                                value: authKey,\n                                onChange: handleAuthKeyChange,\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                fullWidth: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                id: \"start-date\",\n                                label: \"Week Start Date\",\n                                type: \"date\",\n                                value: startDate,\n                                onChange: handleStartDateChange,\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                fullWidth: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                id: \"end-date\",\n                                label: \"Week End Date\",\n                                type: \"date\",\n                                value: endDate,\n                                onChange: handleEndDateChange,\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                fullWidth: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"outlined\",\n                                type: \"button\",\n                                onClick: handlePrevWeekData,\n                                fullWidth: true,\n                                sx: {\n                                    height: \"55px\"\n                                },\n                                children: \"Get Prev Week Data\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"contained\",\n                                type: \"submit\",\n                                fullWidth: true,\n                                sx: {\n                                    height: \"55px\"\n                                },\n                                children: \"Get Data\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 151,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_XDataGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                eventData: selectedEvent\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(API, \"1Wh1I8unsfxEu39NqdeyVu+elT8=\");\n_c = API;\n/* harmony default export */ __webpack_exports__[\"default\"] = (API);\nvar _c;\n$RefreshReg$(_c, \"API\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRFQUFDbkUsaURBQU1BO2dDQUNMeUQsU0FBUTtnQ0FDUkQsTUFBSztnQ0FDTHFCLFNBQVNwQztnQ0FDVG1DLFNBQVM7Z0NBQ1RsQixJQUFJO29DQUFFRSxRQUFRO2dDQUFPOzBDQUN0Qjs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUM3RCwrQ0FBSUE7NEJBQUN1RSxJQUFJOzRCQUFDSixJQUFJOzRCQUFHRyxJQUFJOzRCQUFHRixJQUFJO3NDQUMzQiw0RUFBQ25FLGlEQUFNQTtnQ0FDTHlELFNBQVE7Z0NBQ1JELE1BQUs7Z0NBQ0xvQixTQUFTO2dDQUNUbEIsSUFBSTtvQ0FBRUUsUUFBUTtnQ0FBTzswQ0FDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVAsOERBQUMzRCxrREFBU0E7Z0JBQUM2RSxXQUFXM0U7Ozs7Ozs7O0FBRzVCO0dBaktNRDtLQUFBQTtBQW1LTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvYXBpLnRzeD85MjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgWERhdGFHcmlkIGZyb20gXCIuL1hEYXRhR3JpZFwiO1xuXG5jb25zdCBBUEkgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEV2ZW50LCBTZXRTZWxlY3RlZEV2ZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXV0aEtleSwgc2V0QXV0aEtleV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldFN0YXJ0RGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldEVuZERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBdXRoS2V5Q2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRBdXRoS2V5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV2ZW50ZGF0YVwiKTtcbiAgICBpZiAoc3RvcmVkRGF0YSkge1xuICAgICAgU2V0U2VsZWN0ZWRFdmVudChKU09OLnBhcnNlKHN0b3JlZERhdGEpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHVybDogYGh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS92MS4wL21lL2NhbGVuZGFydmlldz9zdGFydGRhdGV0aW1lPSR7c3RhcnREYXRlfVQwMzozMzozMi44NDNaJmVuZGRhdGV0aW1lPSR7ZW5kRGF0ZX1UMDM6MzM6MzIuODQzWiYkc2VsZWN0PXN1YmplY3QsYm9keSxib2R5UHJldmlldyxvcmdhbml6ZXIsYXR0ZW5kZWVzLHN0YXJ0LGVuZCxsb2NhdGlvbmAsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhLZXksXG4gICAgICB9LFxuICAgIH07XG4gICAgYXhpb3NcbiAgICAgIC5yZXF1ZXN0KG9wdGlvbnMpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICBTZXRTZWxlY3RlZEV2ZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV2ZW50ZGF0YVwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW5kZGF0ZVwiLCBKU09OLnN0cmluZ2lmeShlbmREYXRlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgZmV0Y2hEYXRhKCk7IC8vIENhbGwgZmV0Y2hEYXRhIHRvIHJldHJpZXZlIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2V2Vla0RhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgcHJldldlZWtTdGFydCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcblxuICAgIHByZXZXZWVrU3RhcnQuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSA3KTsgLy8gU3VidHJhY3QgNyBkYXlzIGZvciBwcmV2aW91cyB3ZWVrJ3Mgc3RhcnQgZGF0ZVxuICAgIHByZXZXZWVrU3RhcnQuc2V0RGF0ZShwcmV2V2Vla1N0YXJ0LmdldERhdGUoKSAtIHByZXZXZWVrU3RhcnQuZ2V0RGF5KCkgKyAxKTsgLy8gU2V0IHRvIHRoZSBmaXJzdCBkYXkgKFN1bmRheSkgb2YgcHJldmlvdXMgd2Vla1xuXG4gICAgY29uc3QgcHJldldlZWtFbmQgPSBuZXcgRGF0ZShwcmV2V2Vla1N0YXJ0KTtcblxuICAgIHByZXZXZWVrRW5kLnNldERhdGUocHJldldlZWtTdGFydC5nZXREYXRlKCkgKyA2KTsgLy8gQWRkIDYgZGF5cyBmb3IgcHJldmlvdXMgd2VlaydzIGVuZCBkYXRlIChTYXR1cmRheSlcblxuICAgIHNldFN0YXJ0RGF0ZShwcmV2V2Vla1N0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdKTtcbiAgICBzZXRFbmREYXRlKHByZXZXZWVrRW5kLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+V2VsY29tZSB0byBDYWxlbmRhciB0byBJbnZvaWNlIENvbnZlcnRlcjwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRvIGdldCBzdGFydGVkIEdvIHRvIHRoZSBmb2xsb3dpbmcgbGluayBhbmQgR2V0IFlvdXJzZWxmIGFuIEFjY2Vzc1xuICAgICAgICAgIFRva2VuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9ncmFwaC9ncmFwaC1leHBsb3JlclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBzeD17eyBtYXJnaW5Cb3R0b206IFwiMzBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2V0IEFjY2VzcyBUb2tlblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxwPkFmdGVyIHlvdTwvcD5cblxuICAgICAgICA8YnI+PC9icj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX1cbiAgICAgICAgICBjb2x1bW5zPXt7IHhzOiA2LCBzbTogMTIsIG1kOiAxIH19XG4gICAgICAgICAgc3g9e3sgbWFyZ2luQm90dG9tOiBcIjU1cHhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezR9IG1kPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJhdXRoS2V5XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJLZXlcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXthdXRoS2V5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQXV0aEtleUNoYW5nZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHNtPXs0fSBtZD17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwic3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiV2VlayBTdGFydCBEYXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezR9IG1kPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJlbmQtZGF0ZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiV2VlayBFbmQgRGF0ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezR9IG1kPXs0fT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZXZWVrRGF0YX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHN4PXt7IGhlaWdodDogXCI1NXB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IFByZXYgV2VlayBEYXRhXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezR9IG1kPXs0fT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgc3g9e3sgaGVpZ2h0OiBcIjU1cHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHZXQgRGF0YVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8WERhdGFHcmlkIGV2ZW50RGF0YT17c2VsZWN0ZWRFdmVudH0+PC9YRGF0YUdyaWQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRleHRGaWVsZCIsIkdyaWQiLCJCdXR0b24iLCJYRGF0YUdyaWQiLCJBUEkiLCJzZWxlY3RlZEV2ZW50IiwiU2V0U2VsZWN0ZWRFdmVudCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwiYXV0aEtleSIsInNldEF1dGhLZXkiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImhhbmRsZUF1dGhLZXlDaGFuZ2UiLCJmZXRjaERhdGEiLCJzdG9yZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJyZXF1aXJlIiwib3B0aW9ucyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVQcmV2V2Vla0RhdGEiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJwcmV2V2Vla1N0YXJ0Iiwic2V0RGF0ZSIsImdldERhdGUiLCJnZXREYXkiLCJwcmV2V2Vla0VuZCIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJkaXYiLCJoMSIsInAiLCJhIiwiaHJlZiIsInR5cGUiLCJ2YXJpYW50Iiwic3giLCJtYXJnaW5Cb3R0b20iLCJoZWlnaHQiLCJiciIsImZvcm0iLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJ4cyIsIm1kIiwiY29sdW1ucyIsInNtIiwiaXRlbSIsImlkIiwibGFiZWwiLCJvbkNoYW5nZSIsIklucHV0TGFiZWxQcm9wcyIsInNocmluayIsImZ1bGxXaWR0aCIsIm9uQ2xpY2siLCJldmVudERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/api.tsx\n"));

/***/ })

});