"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/message/route";
exports.ids = ["app/api/message/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Froute&page=%2Fapi%2Fmessage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Froute.ts&appDir=C%3A%5CUsers%5Cdell%5CDocuments%5Celectric%20wiring%20company%5CGREE_TV_PROJECT%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdell%5CDocuments%5Celectric%20wiring%20company%5CGREE_TV_PROJECT&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Froute&page=%2Fapi%2Fmessage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Froute.ts&appDir=C%3A%5CUsers%5Cdell%5CDocuments%5Celectric%20wiring%20company%5CGREE_TV_PROJECT%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdell%5CDocuments%5Celectric%20wiring%20company%5CGREE_TV_PROJECT&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dell_Documents_electric_wiring_company_GREE_TV_PROJECT_app_api_message_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/message/route.ts */ \"(rsc)/./app/api/message/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/message/route\",\n        pathname: \"/api/message\",\n        filename: \"route\",\n        bundlePath: \"app/api/message/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dell\\\\Documents\\\\electric wiring company\\\\GREE_TV_PROJECT\\\\app\\\\api\\\\message\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dell_Documents_electric_wiring_company_GREE_TV_PROJECT_app_api_message_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/message/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZXNzYWdlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtZXNzYWdlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbWVzc2FnZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkZWxsJTVDRG9jdW1lbnRzJTVDZWxlY3RyaWMlMjB3aXJpbmclMjBjb21wYW55JTVDR1JFRV9UVl9QUk9KRUNUJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNkZWxsJTVDRG9jdW1lbnRzJTVDZWxlY3RyaWMlMjB3aXJpbmclMjBjb21wYW55JTVDR1JFRV9UVl9QUk9KRUNUJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNpRDtBQUM5SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWdlZXQtcHJvamVjdC8/OWQzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxkZWxsXFxcXERvY3VtZW50c1xcXFxlbGVjdHJpYyB3aXJpbmcgY29tcGFueVxcXFxHUkVFX1RWX1BST0pFQ1RcXFxcYXBwXFxcXGFwaVxcXFxtZXNzYWdlXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9tZXNzYWdlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbWVzc2FnZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbWVzc2FnZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGRlbGxcXFxcRG9jdW1lbnRzXFxcXGVsZWN0cmljIHdpcmluZyBjb21wYW55XFxcXEdSRUVfVFZfUFJPSkVDVFxcXFxhcHBcXFxcYXBpXFxcXG1lc3NhZ2VcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL21lc3NhZ2Uvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Froute&page=%2Fapi%2Fmessage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Froute.ts&appDir=C%3A%5CUsers%5Cdell%5CDocuments%5Celectric%20wiring%20company%5CGREE_TV_PROJECT%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdell%5CDocuments%5Celectric%20wiring%20company%5CGREE_TV_PROJECT&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/message/route.ts":
/*!**********************************!*\
  !*** ./app/api/message/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/supabaseClient */ \"(rsc)/./lib/supabaseClient.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// file: app/api/messages/route.ts\n\n\nasync function GET() {\n    try {\n        const { data, error } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"messages\").select(\"id, message, period_duration, logo, updated_at\") // أضفنا logo\n        .order(\"updated_at\", {\n            ascending: false\n        }).limit(1);\n        if (error) throw error;\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: true,\n            data: data && data.length > 0 ? data[0] : null\n        }, {\n            headers: {\n                \"Cache-Control\": \"no-store\"\n            }\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { message, period_duration, logo } = body // أضفنا logo\n        ;\n        if (!message) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: \"Message is required\"\n            }, {\n                status: 400\n            });\n        }\n        const { data: existing, error: fetchError } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"messages\").select(\"id\").limit(1);\n        if (fetchError) throw fetchError;\n        if (existing && existing.length > 0) {\n            // تحديث row موجود\n            const { data, error } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"messages\").update({\n                message,\n                period_duration,\n                logo,\n                updated_at: new Date()\n            }) // أضفنا logo\n            .eq(\"id\", existing[0].id).select();\n            if (error) throw error;\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                success: true,\n                action: \"update\",\n                data\n            });\n        } else {\n            // إدراج row جديد\n            const { data: inserted, error: insertError } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"messages\").insert([\n                {\n                    message,\n                    period_duration,\n                    logo,\n                    updated_at: new Date()\n                }\n            ]) // أضفنا logo\n            .select();\n            if (insertError) throw insertError;\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                success: true,\n                action: \"insert\",\n                data: inserted\n            });\n        }\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZTogYXBwL2FwaS9tZXNzYWdlcy9yb3V0ZS50c1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZUNsaWVudFwiXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXHJcbiAgICAgIC5zZWxlY3QoXCJpZCwgbWVzc2FnZSwgcGVyaW9kX2R1cmF0aW9uLCBsb2dvLCB1cGRhdGVkX2F0XCIpIC8vINij2LbZgdmG2KcgbG9nb1xyXG4gICAgICAub3JkZXIoXCJ1cGRhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG4gICAgICAubGltaXQoMSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwID8gZGF0YVswXSA6IG51bGwgfSxcclxuICAgICAgeyBoZWFkZXJzOiB7IFwiQ2FjaGUtQ29udHJvbFwiOiBcIm5vLXN0b3JlXCIgfSB9XHJcbiAgICApXHJcbiAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKClcclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgcGVyaW9kX2R1cmF0aW9uLCBsb2dvIH0gPSBib2R5IC8vINij2LbZgdmG2KcgbG9nb1xyXG5cclxuICAgIGlmICghbWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJNZXNzYWdlIGlzIHJlcXVpcmVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogZXhpc3RpbmcsIGVycm9yOiBmZXRjaEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXHJcbiAgICAgIC5zZWxlY3QoXCJpZFwiKVxyXG4gICAgICAubGltaXQoMSlcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvcikgdGhyb3cgZmV0Y2hFcnJvclxyXG5cclxuICAgIGlmIChleGlzdGluZyAmJiBleGlzdGluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vINiq2K3Yr9mK2Ksgcm93INmF2YjYrNmI2K9cclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcIm1lc3NhZ2VzXCIpXHJcbiAgICAgICAgLnVwZGF0ZSh7IG1lc3NhZ2UsIHBlcmlvZF9kdXJhdGlvbiwgbG9nbywgdXBkYXRlZF9hdDogbmV3IERhdGUoKSB9KSAvLyDYo9i22YHZhtinIGxvZ29cclxuICAgICAgICAuZXEoXCJpZFwiLCBleGlzdGluZ1swXS5pZClcclxuICAgICAgICAuc2VsZWN0KClcclxuXHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3JcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgYWN0aW9uOiBcInVwZGF0ZVwiLCBkYXRhIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDYpdiv2LHYp9isIHJvdyDYrNiv2YrYr1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGluc2VydGVkLCBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgLmZyb20oXCJtZXNzYWdlc1wiKVxyXG4gICAgICAgIC5pbnNlcnQoW3sgbWVzc2FnZSwgcGVyaW9kX2R1cmF0aW9uLCBsb2dvLCB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpIH1dKSAvLyDYo9i22YHZhtinIGxvZ29cclxuICAgICAgICAuc2VsZWN0KClcclxuXHJcbiAgICAgIGlmIChpbnNlcnRFcnJvcikgdGhyb3cgaW5zZXJ0RXJyb3JcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgYWN0aW9uOiBcImluc2VydFwiLCBkYXRhOiBpbnNlcnRlZCB9KVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJsaW1pdCIsImpzb24iLCJzdWNjZXNzIiwibGVuZ3RoIiwiaGVhZGVycyIsImVyciIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJQT1NUIiwicmVxIiwiYm9keSIsInBlcmlvZF9kdXJhdGlvbiIsImxvZ28iLCJleGlzdGluZyIsImZldGNoRXJyb3IiLCJ1cGRhdGUiLCJ1cGRhdGVkX2F0IiwiRGF0ZSIsImVxIiwiaWQiLCJhY3Rpb24iLCJpbnNlcnRlZCIsImluc2VydEVycm9yIiwiaW5zZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/message/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabaseClient.ts":
/*!*******************************!*\
  !*** ./lib/supabaseClient.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://jshbpasfzgruworxexxk.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzaGJwYXNmemdydXdvcnhleHhrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODE4MjMwNiwiZXhwIjoyMDczNzU4MzA2fQ.EUUXN_mEVCyqBcyEDQfyAhPYDFAu_Md9WbUs25dmaKk\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2VDbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUMsY0FBc0JDLDBDQUFvQztBQUNoRSxNQUFNRyxrQkFBMEJILDZOQUF5QztBQUVsRSxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUksaUJBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZ2VldC1wcm9qZWN0Ly4vbGliL3N1cGFiYXNlQ2xpZW50LnRzPzNhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xyXG5cclxuY29uc3Qgc3VwYWJhc2VVcmw6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCFcclxuY29uc3Qgc3VwYWJhc2VBbm9uS2V5OiBzdHJpbmcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSFcclxuXHJcbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VBbm9uS2V5IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJzdXBhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabaseClient.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Froute&page=%2Fapi%2Fmessage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Froute.ts&appDir=C%3A%5CUsers%5Cdell%5CDocuments%5Celectric%20wiring%20company%5CGREE_TV_PROJECT%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdell%5CDocuments%5Celectric%20wiring%20company%5CGREE_TV_PROJECT&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();