# react-word-typing-animation
> Nice smooth typing animation on word(s)
 
## Example

![7x0dmk.gif](..%2F..%2FDownloads%2F7x0dmk.gif)

## Install

```bash
npm install react-word-typing-animation --save
```

If you prefer yarn then

```bash
yarn react-word-typing-animation
```

## Props

| Property         | Type     | Default | Description                                                                                
|------------------|----------|---------|--------------------------------------------------------------------------------------------|
| words (required) | string[] | []      | Words to type                                                                              |
| interval         | number   | 200     | Time between word change in ms                                                             |
| showCursor       | boolean  | true    | Whether to show the blinker cursor                                                         |
| showComma        | boolean  | true    | Whether to show comma at the end of the line                                               |
| textClassName    | string   | ''      | Text class name                                                                            |
| commaClassName   | string   | ''      | Comma class name                                                                           |
| cursorClassName  | string   | ''      | Cursor class name                                                                          |
| typingSpeed        | number   | 300     | Typing speed in ms (recommended to set between 200 for fast typing to 450 for slow typing) |


## Usage



```jsx
import React from 'react'
import TypingAnimation from 'react-word-typing-animation';


const Example = () => {
  return <TypingAnimation words={['Frontend', 'Development', 'Is', 'Super', 'Fun']} />
}

export default Example;
```

## Info

This module was bootstrapped with [build-react-npm](https://github.com/knowankit/build-react-npm).

## License

MIT © [mamanico1](https://github.com/mamanico1)
