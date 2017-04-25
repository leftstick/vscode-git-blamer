// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as child_process from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "git-blame" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.gitblame', () => {
        // The code you place here will be executed every time your command is executed

        const editor = vscode.window.activeTextEditor;
        const selection = editor.selection;

        const cmd = `git blame -L ${selection.start.line + 1},${selection.end.line + 1} ${editor.document.fileName}`;

        child_process.exec(cmd, {
            cwd: vscode.workspace.rootPath
        }, (error, stdout, stderr) => {
            const myOutputChannel = vscode.window.createOutputChannel('Git blame');
            myOutputChannel.show();
            if (error) {
                return myOutputChannel.append(error.message);
            }
            myOutputChannel.append(stdout);
        });
       
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}