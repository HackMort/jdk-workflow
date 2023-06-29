---
title: "VS Code Workspace Setup"
description: "This is a guide about creation and configuration of workspaces in VS Code"
image: { src: /images/workspace-image.svg }
---

## What is it?
According to [VS Code Docs](https://code.visualstudio.com/docs/editor/workspaces), 'workspace' is the collection of one or more folders that are opened in a VS Code window (instance).

## Benefits
+ Configure settings that only apply to a specific folders but not others.
+ Persist task and debugger launch configurations that are only valid in the context of that workspace.
+ Store and restore UI state associated with that workspace.
+ Selectively enable or disable extensions only for that workspace.

## Create a workspace
+ Enter in folder where you will create workspace.
+ Open your VS Code.
+ Go to File > Save Workspace As...
+ Write a name for workspace and save it.  

![Creating workspace](/gifs/create-workspace.gif)

## Remove folder from workspace
By default VS Code adds to your workspace the folder where you were when the workspace was created, you could remove it if you don't want to work on it.  
This action don't delete the folder.  
+ Right click on the folder.
+ Select the option Remove Folder from Workspace.  

![Removing folder workspace](/gifs/delete-folder-workspace.gif)

## Add folder to workspace
+ Go to File > Add Folder to Workspace.
+ Select your folder and add it.  

![Adding folder workspace](/gifs/add-folder-workspace.gif)

## Install VS Code extensions
VS Code extensions are tools that can be added to your installation to support your development workflow.  
[Here](/en/install-vscode-windows-11#recommended-plugins-list-to-vscode) is a list of VS Code Extensions that we recommend

+ In Activiy Bar select extensions or Press Ctrl + Shift + X in your keyboard.
+ Search the extension you want to install.
+ Select the extension from list and click on install.

![Adding VS Code extension](/gifs/install-vs-code-extension.gif)

## Enable/Disable VS Code extensions
Once the VS Code extension is installed, you can enable or disable it globally or for the active workspace.  
If you choose a disabled extension, you will see a button to enable it. By clicking the arrow, you will be presented with the option to enable it either globally or only for your active workspace. In the case of selecting an enabled extension, the button will disable it.

![Enable/Disable VS Code extension](/gifs/disable-vs-code-extension.gif)

## Add custom settings to your workspace

### Open workspace settings (GUI)
+ Go to File > Preferences > Settings
+ Choose Workspace
+ Search for the setting you want to modify and adjust its value

### Open workspace settings (JSON)
+ Press Ctrl + Shift + P on your keyboard
+ Search 'Open Workspace Settings (JSON)' option
+ Edit the file that was opened


![Open workspace settings](/gifs/open-workspace-settings.gif)

## Setting up your workspace

### Clone the boilerplate
Please clone the boilerplate by clicking on the following [link](https://github.com/HackMort/jdk-boilerplate).

![Git clone repository](/gifs/git-clone-repo.gif)

### Install boilerplate dependencies
After cloning the boilerplate install its dependencies by running the following command in your terminal
```
npm install
```

### Install VS Code extensions
To ensure that your environment can be properly configured to work with the boilerplate, please install the following extensions.
+ [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
+ [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
+ [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
+ [Prettier-Standard](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode)
+ [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### Add custom settings to your workspace
Now it's time to configure your workspace so that VS Code can work in conjunction with the installed extensions and dependencies.  

![Edit workspace settings](/gifs/configuring-workspace.gif)

Add following settings in your JSON:
+ Configuration settings to define which formatter handles each type of file. In general, Prettier will be used, Prettier-Standard will handle JavaScript files.
```json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "numso.prettier-standard-vscode"
  },
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.configPath": ""
```

+ To ensure that ESLint is validating our JavaScript files, we add the following to our configuration.

```json
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
```
+ The configuration for enabling Stylelint to handle the validation and formatting of files upon saving in VS Code would be as follows.

```json
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.enable": true,
  "stylelint.validate": ["css", "less", "postcss", "scss"],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
```

## Learn More
We recommend you to take a look at these 3 pages where you can learn more about our Boilerplate and Code Styles we follow:
+ [Boilerplate](/en/boilerplate)
+ [Stylelint](/en/stylelint)
+ [ESLint](/en/eslint)