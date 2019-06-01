import { commands, ExtensionContext } from 'vscode';

export function activate(context: ExtensionContext) {

	let disposable;

	disposable = commands.registerTextEditorCommand('insertNewLine', () => {
		commands.executeCommand('type', { text: '\n' });
	});
	context.subscriptions.push(disposable);

	disposable = commands.registerTextEditorCommand('openNewLine', () => {
		commands.executeCommand('insertLineBelow');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
