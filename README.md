# js2tronic
Custom tool for "Super Tony Land" map editor. Import Tronics to JavaScript. Export JavaScript to Tronics.

## Motivation
In it's current state (Alpha 1.8) the Super Tony Land level editor gives the user a lot of tools to make creative levels. However it is lacking a key feature. You can't copy/paste. Therefore, every single block must be placed manually and every single tronic wires as well. Because of this, it is very tedious to make polished levels.

## Goal
Provide a TypeScript/JavaScript API allow for the following :
- Import an existing level
- Create a new level
- Manipulate tronics programatically
- Allow for re-usable complex contraptions
- Export back to tronic

### Stretch goal
Build a full fledged browser based level editor, complete with UI.

## How
When you go to the level editor and play it at least once, one has access to the back-end data in 3 places :
1. Edit the **test.png** file with Notepad or Notepad++ and you will find something like this.
```

**************
Color:0,0.7771231,1
SunC:0.6640735,0.6640735,0.6640735
SunR:49.8952,1.608433,180
Continue:O
*begin data*
QuestionBlock|8,20,0,0|contain:Coin
FloatBlock|9,20,0,0|tronictype:|tronicnum:9020
SpringBlock|10,20,0,0|tronictype:|tronicnum:10020
Chain|11,20,0,0

```

Each line after `*begin data*` is a | separated set of key:value pairs which can be converted to a Javascript object, manipulated, parsed back in a format the game can recognize.

2. The **Test** folder located in the game folder holds all the persistant red data blocks. Each file represents 1 block. The file name is the red data label (when you hover your mouse over it in game). The content of the file is the value stored. It can be used as a memory for persistant values from level to level and from one play session to the next.

3. *( Credits to steam user **Naxane** for figuring this one out )* Every **level you downloaded from the multiverse** is also availble here : `C:\Program Files (x86)\Steam\steamapps\workshop\content` (or anywhere you have your Steam folder. You will find folders labeled with numbers. For me the Super Tony Land folder is `640690` it may very well be the same for everyone as it seems to be a game-workshop id. 

Once in there you will have many more folders (one for each level you downloaded from the multiverse) and they will each have a corresponding **<level name>.png** file which you can edit with Notepad, and copy/cut the tronic data (below the illigble gibberish) and paste in the test.png document. This will make that level available for you in the level editor.

Also, if the level made use of red data, you will find the data for those blocks in a sub-folder. You can copy/cut them to the **Test folder**.

## API documentation
<TODO: once the API has reached a usable state.>

### Disclaimer
This is my first Git project ever. I make an effort to provide clean code, however it may very well not be up to everyone's coding standards/expectations.
