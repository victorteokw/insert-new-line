import { commands, ExtensionContext } from 'vscode';

export function activate(context: ExtensionContext) {

	let disposable;

	disposable = commands.registerTextEditorCommand('newLine.insert', () => {
		commands.executeCommand('type', { text: '\n' });
	});
	context.subscriptions.push(disposable);

	disposable = commands.registerTextEditorCommand('newLine.open', () => {
		commands.executeCommand('insertLineBelow');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
