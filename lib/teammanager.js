const Employee = require('./employee');

class TeamManager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}
module.exports = TeamManager