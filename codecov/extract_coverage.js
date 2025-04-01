"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var coverageData = JSON.parse(fs.readFileSync('./coverage/coverage-final.json', 'utf-8'));
var totalStatements = 0;
var coveredStatements = 0;
for (var path in coverageData) {
    var file = coverageData[path];
    var statementMap = file.s;
    if (!statementMap)
        continue;
    totalStatements += Object.keys(statementMap).length;
    coveredStatements += Object.values(statementMap).filter(function (value) { return value > 0; }).length;
}
var coveragePercentage = (coveredStatements / totalStatements) * 100;
var badgeData = {
    label: 'Coverage',
    message: "".concat(coveragePercentage, "%"),
    color: coveragePercentage >= 90 ? 'brightgreen' :
        coveragePercentage >= 70 ? 'yellowgreen' :
            coveragePercentage >= 50 ? 'yellow' :
                'red'
};
var outputFile = 'codecov/badge.json';
fs.writeFileSync(outputFile, JSON.stringify(badgeData, null, 2), 'utf-8');
console.log(coveragePercentage);
