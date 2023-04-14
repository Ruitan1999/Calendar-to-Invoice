"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/invoice",{

/***/ "./pages/invoice/InvoiceGrid.tsx":
/*!***************************************!*\
  !*** ./pages/invoice/InvoiceGrid.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/.pnpm/@mui+material@5.12.0_@emotion+react@11.10.6_@emotion+styled@11.10.6_@types+react@18.0.35_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _InvoiceInfo_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InvoiceInfo.module.css */ \"./pages/invoice/InvoiceInfo.module.css\");\n/* harmony import */ var _InvoiceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_InvoiceInfo_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/.pnpm/@mui+x-data-grid@6.1.0_@mui+material@5.12.0_@mui+system@5.12.0_react-dom@18.2.0_react@18.2.0/node_modules/@mui/x-data-grid/index.js\");\n\n\n\n\n\nconst InvoiceGrid = ()=>{\n    const getDataFromLocalStorage = (key)=>{\n        if ( true && window.localStorage) {\n            // Check if window is defined and localStorage is available (to avoid issues during server-side rendering)\n            const storedData = localStorage.getItem(key);\n            return storedData ? JSON.parse(storedData) : null;\n        }\n        return null;\n    };\n    const newRows = getDataFromLocalStorage(\"eventdata\");\n    // Check if newRows and newRows.value are defined and not empty\n    const datesArray = newRows && newRows.value ? newRows.value.map((item)=>{\n        const date = new Date(item.start.dateTime);\n        const dateInAustralia = date.toLocaleDateString(\"zh-Hans-CN\", {\n            year: \"numeric\",\n            month: \"numeric\",\n            day: \"numeric\"\n        });\n        return dateInAustralia;\n    }) : [];\n    // Create a Set to store unique dates\n    const uniqueDatesSet = new Set();\n    // Loop through datesArray\n    for (const date of datesArray){\n        // Add each date to the Set\n        uniqueDatesSet.add(date);\n    }\n    // Convert the Set back to an array to get uniqueDateArray\n    const uniqueDateArray = Array.from(uniqueDatesSet);\n    const amountOfDayWorked = uniqueDateArray.length;\n    // create a new array called row with\n    // amount of day worked, rates, description, linetotal\n    const linetotal = amountOfDayWorked * 500;\n    const rows = [\n        {\n            id: Math.random(),\n            amount: amountOfDayWorked,\n            description: \"Write Your Own\",\n            unitprice: \"$\".concat(500),\n            linetotal: \"$\".concat(linetotal)\n        }\n    ];\n    const GST = linetotal * 0.1;\n    const totalAmountPlusGst = linetotal + GST;\n    const columns = [\n        {\n            field: \"amount\",\n            headerName: \"Quantity\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"description\",\n            headerName: \"Description\",\n            width: 500,\n            editable: true\n        },\n        {\n            field: \"unitprice\",\n            headerName: \"Unit Price\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"linetotal\",\n            headerName: \"Line Total\",\n            width: 150,\n            editable: true\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    height: 400,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.DataGrid, {\n                    //   slots={{\n                    //     toolbar: CustomToolbar,\n                    //   }}\n                    rows: rows,\n                    hideFooter: true,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                pageSize: 10\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        10\n                    ],\n                    disableRowSelectionOnClick: true\n                }, void 0, false, {\n                    fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/invoice/InvoiceGrid.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/invoice/InvoiceGrid.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_InvoiceInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default().total),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Subtotal: $\",\n                            linetotal\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/invoice/InvoiceGrid.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Sales Tax @ 10%: $\",\n                            GST\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/invoice/InvoiceGrid.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"TOTAL: $\",\n                            totalAmountPlusGst\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/invoice/InvoiceGrid.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ruitan/Downloads/Calendar-to-Invoice/pages/invoice/InvoiceGrid.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = InvoiceGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvoiceGrid);\nvar _c;\n$RefreshReg$(_c, \"InvoiceGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnZvaWNlL0ludm9pY2VHcmlkLnRzeD8wZjRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0ludm9pY2VJbmZvLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sRGVmIH0gZnJvbSBcIkBtdWkveC1kYXRhLWdyaWRcIjtcblxuY29uc3QgSW52b2ljZUdyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlID0gKGtleTogc3RyaW5nKTogYW55IHwgbnVsbCA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgLy8gQ2hlY2sgaWYgd2luZG93IGlzIGRlZmluZWQgYW5kIGxvY2FsU3RvcmFnZSBpcyBhdmFpbGFibGUgKHRvIGF2b2lkIGlzc3VlcyBkdXJpbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nKVxuICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICByZXR1cm4gc3RvcmVkRGF0YSA/IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSkgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBuZXdSb3dzID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoXCJldmVudGRhdGFcIik7XG5cbiAgLy8gQ2hlY2sgaWYgbmV3Um93cyBhbmQgbmV3Um93cy52YWx1ZSBhcmUgZGVmaW5lZCBhbmQgbm90IGVtcHR5XG4gIGNvbnN0IGRhdGVzQXJyYXkgPVxuICAgIG5ld1Jvd3MgJiYgbmV3Um93cy52YWx1ZVxuICAgICAgPyBuZXdSb3dzLnZhbHVlLm1hcCgoaXRlbTogeyBzdGFydDogYW55IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXRlbS5zdGFydC5kYXRlVGltZSk7XG4gICAgICAgICAgY29uc3QgZGF0ZUluQXVzdHJhbGlhID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJ6aC1IYW5zLUNOXCIsIHtcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZGF0ZUluQXVzdHJhbGlhO1xuICAgICAgICB9KVxuICAgICAgOiBbXTtcblxuICAvLyBDcmVhdGUgYSBTZXQgdG8gc3RvcmUgdW5pcXVlIGRhdGVzXG4gIGNvbnN0IHVuaXF1ZURhdGVzU2V0ID0gbmV3IFNldCgpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBkYXRlc0FycmF5XG4gIGZvciAoY29uc3QgZGF0ZSBvZiBkYXRlc0FycmF5KSB7XG4gICAgLy8gQWRkIGVhY2ggZGF0ZSB0byB0aGUgU2V0XG4gICAgdW5pcXVlRGF0ZXNTZXQuYWRkKGRhdGUpO1xuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgU2V0IGJhY2sgdG8gYW4gYXJyYXkgdG8gZ2V0IHVuaXF1ZURhdGVBcnJheVxuICBjb25zdCB1bmlxdWVEYXRlQXJyYXkgPSBBcnJheS5mcm9tKHVuaXF1ZURhdGVzU2V0KTtcblxuICBjb25zdCBhbW91bnRPZkRheVdvcmtlZCA9IHVuaXF1ZURhdGVBcnJheS5sZW5ndGg7XG5cbiAgLy8gY3JlYXRlIGEgbmV3IGFycmF5IGNhbGxlZCByb3cgd2l0aFxuICAvLyBhbW91bnQgb2YgZGF5IHdvcmtlZCwgcmF0ZXMsIGRlc2NyaXB0aW9uLCBsaW5ldG90YWxcblxuICBjb25zdCBsaW5ldG90YWwgPSBhbW91bnRPZkRheVdvcmtlZCAqIDUwMDtcblxuICBjb25zdCByb3dzID0gW1xuICAgIHtcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLFxuICAgICAgYW1vdW50OiBhbW91bnRPZkRheVdvcmtlZCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldyaXRlIFlvdXIgT3duXCIsXG4gICAgICB1bml0cHJpY2U6IGAkJHs1MDB9YCxcbiAgICAgIGxpbmV0b3RhbDogYCQke2xpbmV0b3RhbH1gLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgR1NUID0gbGluZXRvdGFsICogMC4xO1xuICBjb25zdCB0b3RhbEFtb3VudFBsdXNHc3QgPSBsaW5ldG90YWwgKyBHU1Q7XG5cbiAgY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xuICAgIHsgZmllbGQ6IFwiYW1vdW50XCIsIGhlYWRlck5hbWU6IFwiUXVhbnRpdHlcIiwgd2lkdGg6IDE1MCwgZWRpdGFibGU6IHRydWUgfSxcbiAgICB7XG4gICAgICBmaWVsZDogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgaGVhZGVyTmFtZTogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6IFwidW5pdHByaWNlXCIsXG4gICAgICBoZWFkZXJOYW1lOiBcIlVuaXQgUHJpY2VcIixcbiAgICAgIHdpZHRoOiAxNTAsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiBcImxpbmV0b3RhbFwiLFxuICAgICAgaGVhZGVyTmFtZTogXCJMaW5lIFRvdGFsXCIsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IHN4PXt7IGhlaWdodDogNDAwLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgIDxEYXRhR3JpZFxuICAgICAgICAgIC8vICAgc2xvdHM9e3tcbiAgICAgICAgICAvLyAgICAgdG9vbGJhcjogQ3VzdG9tVG9vbGJhcixcbiAgICAgICAgICAvLyAgIH19XG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICBoaWRlRm9vdGVyXG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBpbml0aWFsU3RhdGU9e3tcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGVsOiB7XG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHBhZ2VTaXplT3B0aW9ucz17WzEwXX1cbiAgICAgICAgICBkaXNhYmxlUm93U2VsZWN0aW9uT25DbGlja1xuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3RhbH0+XG4gICAgICAgIDxwPlN1YnRvdGFsOiAke2xpbmV0b3RhbH08L3A+XG4gICAgICAgIDxwPlNhbGVzIFRheCBAIDEwJTogJHtHU1R9PC9wPlxuICAgICAgICA8aDI+VE9UQUw6ICR7dG90YWxBbW91bnRQbHVzR3N0fTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludm9pY2VHcmlkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiY2xhc3NlcyIsIkRhdGFHcmlkIiwiSW52b2ljZUdyaWQiLCJnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSIsImtleSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInN0b3JlZERhdGEiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibmV3Um93cyIsImRhdGVzQXJyYXkiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJkYXRlIiwiRGF0ZSIsInN0YXJ0IiwiZGF0ZVRpbWUiLCJkYXRlSW5BdXN0cmFsaWEiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ1bmlxdWVEYXRlc1NldCIsIlNldCIsImFkZCIsInVuaXF1ZURhdGVBcnJheSIsIkFycmF5IiwiZnJvbSIsImFtb3VudE9mRGF5V29ya2VkIiwibGVuZ3RoIiwibGluZXRvdGFsIiwicm93cyIsImlkIiwiTWF0aCIsInJhbmRvbSIsImFtb3VudCIsImRlc2NyaXB0aW9uIiwidW5pdHByaWNlIiwiR1NUIiwidG90YWxBbW91bnRQbHVzR3N0IiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwiZWRpdGFibGUiLCJzeCIsImhlaWdodCIsImhpZGVGb290ZXIiLCJpbml0aWFsU3RhdGUiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbk1vZGVsIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJkaXNhYmxlUm93U2VsZWN0aW9uT25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsInRvdGFsIiwicCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/invoice/InvoiceGrid.tsx\n"));

/***/ })

});