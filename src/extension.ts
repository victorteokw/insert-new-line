import { commands, ExtensionContext } from 'vscode';

export function activate(context: ExtensionContext) {

	let disposable = commands.registerTextEditorCommand('insertNewLine', () => {
		commands.executeCommand('type', { text: '\n' });
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
