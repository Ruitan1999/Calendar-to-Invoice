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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/.pnpm/@mui+material@5.12.0_@emotion+react@11.10.6_@emotion+styled@11.10.6_@types+react@18.0.35_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/index.js\");\n/* harmony import */ var _XDataGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XDataGrid */ \"./pages/api/XDataGrid.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst API = ()=>{\n    _s();\n    const [selectedEvent, SetSelectedEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [authKey, setAuthKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleStartDateChange = (event)=>{\n        setStartDate(event.target.value);\n    };\n    const handleEndDateChange = (event)=>{\n        setEndDate(event.target.value);\n    };\n    const handleAuthKeyChange = (event)=>{\n        setAuthKey(event.target.value);\n    };\n    const fetchData = ()=>{\n        const storedData = localStorage.getItem(\"eventdata\");\n        if (storedData) {\n            SetSelectedEvent(JSON.parse(storedData));\n        }\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/.pnpm/axios@1.3.5/node_modules/axios/dist/browser/axios.cjs\");\n        const options = {\n            method: \"GET\",\n            url: \"https://graph.microsoft.com/v1.0/me/calendarview?startdatetime=\".concat(startDate, \"T03:33:32.843Z&enddatetime=\").concat(endDate, \"T03:33:32.843Z&$select=subject,body,bodyPreview,organizer,attendees,start,end,location\"),\n            headers: {\n                Authorization: authKey\n            }\n        };\n        axios.request(options).then(function(response) {\n            SetSelectedEvent(response.data);\n            localStorage.setItem(\"eventdata\", JSON.stringify(response.data));\n            localStorage.setItem(\"enddate\", JSON.stringify(endDate));\n        }).catch(function(error) {\n            console.error(error);\n        });\n        fetchData(); // Call fetchData to retrieve data from localStorage\n    };\n    const handlePrevWeekData = ()=>{\n        const currentDate = new Date();\n        const prevWeekStart = new Date(currentDate);\n        prevWeekStart.setDate(currentDate.getDate() - 7); // Subtract 7 days for previous week's start date\n        prevWeekStart.setDate(prevWeekStart.getDate() - prevWeekStart.getDay() + 1); // Set to the first day (Sunday) of previous week\n        const prevWeekEnd = new Date(prevWeekStart);\n        prevWeekEnd.setDate(prevWeekStart.getDate() + 6); // Add 6 days for previous week's end date (Saturday)\n        setStartDate(prevWeekStart.toISOString().split(\"T\")[0]);\n        setEndDate(prevWeekEnd.toISOString().split(\"T\")[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to Calendar to Invoice Converter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Step 1: To begin, please visit the provided link to obtain an Access Token for yourself.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://developer.microsoft.com/en-us/graph/graph-explorer\",\n                        target: \"_blank\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            type: \"button\",\n                            variant: \"contained\",\n                            sx: {\n                                height: \"50px\"\n                            },\n                            children: \"Get Access Token\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: 'Step 2: Once you have reached the website, navigate to the Outlook Calendar section and ensure that the \"Calendars.Read\" access is enabled.'\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lastly, copy the Access Token from the website and paste it here to initiate the process.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                    container: true,\n                    spacing: {\n                        xs: 2,\n                        md: 3\n                    },\n                    columns: {\n                        xs: 6,\n                        sm: 12,\n                        md: 1\n                    },\n                    sx: {\n                        marginBottom: \"55px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                id: \"authKey\",\n                                label: \"Key\",\n                                type: \"text\",\n                                value: authKey,\n                                onChange: handleAuthKeyChange,\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                fullWidth: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                id: \"start-date\",\n                                label: \"Week Start Date\",\n                                type: \"date\",\n                                value: startDate,\n                                onChange: handleStartDateChange,\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                fullWidth: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                id: \"end-date\",\n                                label: \"Week End Date\",\n                                type: \"date\",\n                                value: endDate,\n                                onChange: handleEndDateChange,\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                fullWidth: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"outlined\",\n                                type: \"button\",\n                                onClick: handlePrevWeekData,\n                                fullWidth: true,\n                                sx: {\n                                    height: \"55px\"\n                                },\n                                children: \"Get Prev Week Data\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                            item: true,\n                            xs: 2,\n                            sm: 4,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"contained\",\n                                type: \"submit\",\n                                fullWidth: true,\n                                sx: {\n                                    height: \"55px\"\n                                },\n                                children: \"Get Data\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                            lineNumber: 154,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_XDataGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                eventData: selectedEvent\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/api/api.tsx\",\n                lineNumber: 166,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(API, \"1Wh1I8unsfxEu39NqdeyVu+elT8=\");\n_c = API;\n/* harmony default export */ __webpack_exports__[\"default\"] = (API);\nvar _c;\n$RefreshReg$(_c, \"API\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7c0NBQzNCLDRFQUFDbEUsaURBQU1BO2dDQUNMeUQsU0FBUTtnQ0FDUkQsTUFBSztnQ0FDTHFCLFNBQVNwQztnQ0FDVG1DLFNBQVM7Z0NBQ1RsQixJQUFJO29DQUFFQyxRQUFRO2dDQUFPOzBDQUN0Qjs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUM1RCwrQ0FBSUE7NEJBQUN1RSxJQUFJOzRCQUFDTCxJQUFJOzRCQUFHRyxJQUFJOzRCQUFHRixJQUFJO3NDQUMzQiw0RUFBQ2xFLGlEQUFNQTtnQ0FDTHlELFNBQVE7Z0NBQ1JELE1BQUs7Z0NBQ0xvQixTQUFTO2dDQUNUbEIsSUFBSTtvQ0FBRUMsUUFBUTtnQ0FBTzswQ0FDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVAsOERBQUMxRCxrREFBU0E7Z0JBQUM2RSxXQUFXM0U7Ozs7Ozs7O0FBRzVCO0dBcEtNRDtLQUFBQTtBQXNLTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvYXBpLnRzeD85MjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgWERhdGFHcmlkIGZyb20gXCIuL1hEYXRhR3JpZFwiO1xuXG5jb25zdCBBUEkgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEV2ZW50LCBTZXRTZWxlY3RlZEV2ZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXV0aEtleSwgc2V0QXV0aEtleV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldFN0YXJ0RGF0ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldEVuZERhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBdXRoS2V5Q2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRBdXRoS2V5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV2ZW50ZGF0YVwiKTtcbiAgICBpZiAoc3RvcmVkRGF0YSkge1xuICAgICAgU2V0U2VsZWN0ZWRFdmVudChKU09OLnBhcnNlKHN0b3JlZERhdGEpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHVybDogYGh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS92MS4wL21lL2NhbGVuZGFydmlldz9zdGFydGRhdGV0aW1lPSR7c3RhcnREYXRlfVQwMzozMzozMi44NDNaJmVuZGRhdGV0aW1lPSR7ZW5kRGF0ZX1UMDM6MzM6MzIuODQzWiYkc2VsZWN0PXN1YmplY3QsYm9keSxib2R5UHJldmlldyxvcmdhbml6ZXIsYXR0ZW5kZWVzLHN0YXJ0LGVuZCxsb2NhdGlvbmAsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhLZXksXG4gICAgICB9LFxuICAgIH07XG4gICAgYXhpb3NcbiAgICAgIC5yZXF1ZXN0KG9wdGlvbnMpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkge1xuICAgICAgICBTZXRTZWxlY3RlZEV2ZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV2ZW50ZGF0YVwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW5kZGF0ZVwiLCBKU09OLnN0cmluZ2lmeShlbmREYXRlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgZmV0Y2hEYXRhKCk7IC8vIENhbGwgZmV0Y2hEYXRhIHRvIHJldHJpZXZlIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2V2Vla0RhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgcHJldldlZWtTdGFydCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcblxuICAgIHByZXZXZWVrU3RhcnQuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSA3KTsgLy8gU3VidHJhY3QgNyBkYXlzIGZvciBwcmV2aW91cyB3ZWVrJ3Mgc3RhcnQgZGF0ZVxuICAgIHByZXZXZWVrU3RhcnQuc2V0RGF0ZShwcmV2V2Vla1N0YXJ0LmdldERhdGUoKSAtIHByZXZXZWVrU3RhcnQuZ2V0RGF5KCkgKyAxKTsgLy8gU2V0IHRvIHRoZSBmaXJzdCBkYXkgKFN1bmRheSkgb2YgcHJldmlvdXMgd2Vla1xuXG4gICAgY29uc3QgcHJldldlZWtFbmQgPSBuZXcgRGF0ZShwcmV2V2Vla1N0YXJ0KTtcblxuICAgIHByZXZXZWVrRW5kLnNldERhdGUocHJldldlZWtTdGFydC5nZXREYXRlKCkgKyA2KTsgLy8gQWRkIDYgZGF5cyBmb3IgcHJldmlvdXMgd2VlaydzIGVuZCBkYXRlIChTYXR1cmRheSlcblxuICAgIHNldFN0YXJ0RGF0ZShwcmV2V2Vla1N0YXJ0LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdKTtcbiAgICBzZXRFbmREYXRlKHByZXZXZWVrRW5kLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+V2VsY29tZSB0byBDYWxlbmRhciB0byBJbnZvaWNlIENvbnZlcnRlcjwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFN0ZXAgMTogVG8gYmVnaW4sIHBsZWFzZSB2aXNpdCB0aGUgcHJvdmlkZWQgbGluayB0byBvYnRhaW4gYW4gQWNjZXNzXG4gICAgICAgICAgVG9rZW4gZm9yIHlvdXJzZWxmLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvZ3JhcGgvZ3JhcGgtZXhwbG9yZXJcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3g9e3sgaGVpZ2h0OiBcIjUwcHhcIiB9fT5cbiAgICAgICAgICAgIEdldCBBY2Nlc3MgVG9rZW5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8cD5cbiAgICAgICAgICBTdGVwIDI6IE9uY2UgeW91IGhhdmUgcmVhY2hlZCB0aGUgd2Vic2l0ZSwgbmF2aWdhdGUgdG8gdGhlIE91dGxvb2tcbiAgICAgICAgICBDYWxlbmRhciBzZWN0aW9uIGFuZCBlbnN1cmUgdGhhdCB0aGUgXCJDYWxlbmRhcnMuUmVhZFwiIGFjY2VzcyBpc1xuICAgICAgICAgIGVuYWJsZWQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTGFzdGx5LCBjb3B5IHRoZSBBY2Nlc3MgVG9rZW4gZnJvbSB0aGUgd2Vic2l0ZSBhbmQgcGFzdGUgaXQgaGVyZSB0b1xuICAgICAgICAgIGluaXRpYXRlIHRoZSBwcm9jZXNzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBzcGFjaW5nPXt7IHhzOiAyLCBtZDogMyB9fVxuICAgICAgICAgIGNvbHVtbnM9e3sgeHM6IDYsIHNtOiAxMiwgbWQ6IDEgfX1cbiAgICAgICAgICBzeD17eyBtYXJnaW5Cb3R0b206IFwiNTVweFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17NH0gbWQ9ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cImF1dGhLZXlcIlxuICAgICAgICAgICAgICBsYWJlbD1cIktleVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2F1dGhLZXl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBdXRoS2V5Q2hhbmdlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezR9IG1kPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJzdGFydC1kYXRlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJXZWVrIFN0YXJ0IERhdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17NH0gbWQ9ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cImVuZC1kYXRlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJXZWVrIEVuZCBEYXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17NH0gbWQ9ezR9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldldlZWtEYXRhfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgc3g9e3sgaGVpZ2h0OiBcIjU1cHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHZXQgUHJldiBXZWVrIERhdGFcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17NH0gbWQ9ezR9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBzeD17eyBoZWlnaHQ6IFwiNTVweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdldCBEYXRhXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxYRGF0YUdyaWQgZXZlbnREYXRhPXtzZWxlY3RlZEV2ZW50fT48L1hEYXRhR3JpZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFQSTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGV4dEZpZWxkIiwiR3JpZCIsIkJ1dHRvbiIsIlhEYXRhR3JpZCIsIkFQSSIsInNlbGVjdGVkRXZlbnQiLCJTZXRTZWxlY3RlZEV2ZW50Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJhdXRoS2V5Iiwic2V0QXV0aEtleSIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiaGFuZGxlQXV0aEtleUNoYW5nZSIsImZldGNoRGF0YSIsInN0b3JlZERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInJlcXVpcmUiLCJvcHRpb25zIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVByZXZXZWVrRGF0YSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInByZXZXZWVrU3RhcnQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImdldERheSIsInByZXZXZWVrRW5kIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImRpdiIsImgxIiwicCIsImEiLCJocmVmIiwidHlwZSIsInZhcmlhbnQiLCJzeCIsImhlaWdodCIsImJyIiwiZm9ybSIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwic3BhY2luZyIsInhzIiwibWQiLCJjb2x1bW5zIiwic20iLCJtYXJnaW5Cb3R0b20iLCJpdGVtIiwiaWQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiSW5wdXRMYWJlbFByb3BzIiwic2hyaW5rIiwiZnVsbFdpZHRoIiwib25DbGljayIsImV2ZW50RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/api.tsx\n"));

/***/ })

});