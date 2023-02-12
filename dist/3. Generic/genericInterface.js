"use strict";
var _a, _b;
const fetchData = () => {
    return { data: null, error: null };
};
const productRes = fetchData();
(_a = productRes.data) === null || _a === void 0 ? void 0 : _a.brand;
const userRes = fetchData();
(_b = userRes.data) === null || _b === void 0 ? void 0 : _b.fullname;
