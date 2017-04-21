# vscode-git-blamer

[![vscode version][vs-image]][vs-url]
![][install-url]
![][rate-url]
![][license-url]

Git blame selected source code information in output panel.

![](https://raw.githubusercontent.com/leftstick/vscode-git-blame/master/images/blame.gif)

## Install

Launch VS Code Quick Open (`cmd`/`ctrl` + `p`), paste the following command, and press enter.

```
ext install git-blamer
```

## Usage

I assume you are familiar with the [configuration](https://github.com/millermedeiros/esformatter/blob/master/doc/config.md) for `esformatter`.

`vscode-git-blame` will read configurations from following places in order:

1. `${workspaceRoot}/.esformatter`(strongly recommended)
2. configurations directly set in `package.json`
3. `~/.esformatter`
4. `/.esformatter`

Once you save updates to a `JavaScript` file, `vscode-git-blame` tries format code automatically for you.

### Settings

```javascript
{
    "editor.formatOnSave": false //whether to format code on save
}
```

### Keybindings

The default format command `shift+alt+f` is overrided, so when you go with `Format Code` approach, `vscode-git-blame` take the job from built-in formatter.


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/vscode-git-blame/master/LICENSE)


[vs-url]: https://marketplace.visualstudio.com/items?itemName=howardzuo.vscode-git-blame
[vs-image]: http://vsmarketplacebadge.apphb.com/version/howardzuo.vscode-git-blame.svg
[install-url]: http://vsmarketplacebadge.apphb.com/installs/howardzuo.vscode-git-blame.svg
[rate-url]: http://vsmarketplacebadge.apphb.com/rating/howardzuo.vscode-git-blame.svg
[license-url]: https://img.shields.io/github/license/leftstick/vscode-git-blame.svg