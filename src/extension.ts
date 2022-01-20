import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposables: vscode.Disposable[] = [];

    if (!vscode.workspace.workspaceFolders) {
        return;
    }

    const folder = vscode.workspace.workspaceFolders[0];
    const name = 'Run Mocha Tests';

    disposables.push(
        vscode.commands.registerCommand('vscode-start-debugging.start', () => {
            vscode.debug.startDebugging(folder, name);
        })
    );

    disposables.push(
        vscode.commands.registerCommand('vscode-start-debugging.start-no-breakpoints', () => {
            vscode.debug.startDebugging(folder, name, { noDebug: true });
        })
    );

    context.subscriptions.push(...disposables);
}

export function deactivate() {}
