1. [CODE KNOWLEDGE] - If in object `variableName === keyName` you can use short syntax:.

BAD EXAMPLE: 
```
{
  name: name,
  wheels: wheels,
  version: version,
}
```

GOOD EXAMPLE:
```
{
  name,
  wheels,
  version,
}
```

2. [CODE KNOWLEDGE] - if you creating a method in the object, you don't need to use function keyword, use shortcut instead.


BAD EXAMPLE: 
```
 methodName: function() {
 // your code
},
```

GOOD EXAMPLE:
```
 methodName() {
 // your code
},
```

2. [CODE STYLE] - you can join arithmetic operators with assignment operators.

BAD EXAMPLE: 
```
robot.coords.x = robot.coords.x + 5;
```

GOOD EXAMPLE:
```
robot.coords.x += 5;
```

3. [BASIC RULE] - Don't disable linter unless you have to.

