# Insert New Line

Insert new line character with any keystroke. Multiple cursors are supported.

By default, Insert New Line doesn't bind to any key bindings. It's user's right
to decide which command goes to which key binding. This is a very handy editor
command, you may not want to invoke it through command palette.

If you are an previously emacs user, you may want to add these to your
`keybindings.json`.

```json
{
  "key": "ctrl+j",
  "command": "insertNewLine",
  "when": "textInputFocus && !editorReadonly"
}
```

## Need Help?

Open an issue [here](https://github.com/zhangkaiyulw/insert-new-line/issues).

## LICENSE

[MIT](https://github.com/zhangkaiyulw/insert-new-line/blob/master/LICENSE) @ Victor Zhang
