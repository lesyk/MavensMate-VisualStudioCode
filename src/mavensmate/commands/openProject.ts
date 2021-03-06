import { BaseCommand } from './baseCommand';
import ProjectQuickPick = require('../../vscode/projectQuickPick');

module.exports = class OpenProject extends BaseCommand {
    static create() {
        return new OpenProject();
    }

    constructor() {
        super('Open Project');
        this.allowWithoutProject = true;
    }

    execute(): Thenable<any> {
        return Promise.resolve(ProjectQuickPick.showProjectListAndOpen());
    }
}