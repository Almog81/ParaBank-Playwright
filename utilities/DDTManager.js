const fs = require('fs');
const path = require('path');

class DDTManager {
    static readTestData(fileName) {
        const filePath = path.join(__dirname, '..', 'DDTfiles', fileName);
        const rawData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(rawData);
    }

    static getLoginData() {
        const data = this.readTestData('loginData.json');
        return data.loginTests;
    }

    static getCreateAccountData() {
        const data = this.readTestData('createAccountData.json');
        return data.createAccountTests;
    }
}

module.exports = DDTManager; 