"use strict";
// NOTE: The following types are shared by all strategies, so they are defined
//       here. Each strategy will also have its own types.ts file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["None"] = 0] = "None";
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Accepted"] = 2] = "Accepted";
    Status[Status["Rejected"] = 3] = "Rejected";
    Status[Status["Appealed"] = 4] = "Appealed";
    Status[Status["InReview"] = 5] = "InReview";
    Status[Status["Canceled"] = 6] = "Canceled";
})(Status = exports.Status || (exports.Status = {}));
