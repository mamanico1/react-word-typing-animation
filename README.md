# react-word-typing-animation
> Nice smooth typing animation on word(s)
 
## Example

![7x0dmk.gif](https://github-production-user-asset-6210df.s3.amazonaws.com/24621016/263520555-770eb3e3-284a-4484-8e7e-61a3ef711d36.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230827%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230827T094859Z&X-Amz-Expires=300&X-Amz-Signature=670cdb441947682f29b4eac4adeb3cafef373289ab99717c3d588d094adbe4e4&X-Amz-SignedHeaders=host&actor_id=24621016&key_id=0&repo_id=682081031)

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

## License

MIT © [mamanico1](https://github.com/mamanico1)
