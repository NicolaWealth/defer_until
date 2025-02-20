import * as fs from "fs";

const coverageData = JSON.parse(fs.readFileSync('./coverage/coverage-final.json', 'utf-8'));

let totalStatements = 0;
let coveredStatements = 0;

for (let path in coverageData) {
  const file = coverageData[path];
  const statementMap = file.s;
  if(!statementMap) continue;
  totalStatements += Object.keys(statementMap).length;
  coveredStatements += Object.values(statementMap).filter((value: number) => value > 0).length;
}
const coveragePercentage = (coveredStatements / totalStatements) * 100;

const badgeData = {
  label: 'coverage',
  message: `50%`,
  color: coveragePercentage >= 90 ? 'brightgreen' :
          coveragePercentage >= 70 ? 'yellowgreen' :
          coveragePercentage >= 50 ? 'yellow' :
        'red'
};

const outputFile = './badge.json';
fs.writeFileSync(outputFile, JSON.stringify(badgeData, null, 2), 'utf-8');