import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "self-code-review" is now active!');

	const disposable = vscode.commands.registerCommand('self-code-review.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Self Code Review!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
