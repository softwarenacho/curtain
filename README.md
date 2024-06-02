# Close a curtain

This component features an animated curtain effect that dynamically opens and closes based on user interactions.
Perfect for adding a dramatic reveal or a hidden content section to your web application.

Feel free to use this component and animation in your projects to create engaging user interfaces. We welcome you to customize and extend its functionality as needed!

![curtain closed](https://i.imgur.com/eYGyJzZ.png)

Demo page: **[Close a Curtain](https://curtain.nacho.software)**

## How it works

- Click on the top or bottom section to open or close the curtain.
- The animation starts from the current position, ensuring a seamless transition between states.
- Both sections animate simultaneously to provide a synchronized visual effect.

## Features:

- Customizable border and background colors.
- Configurable border styles and widths.
- Smooth opening and closing animations with adjustable speed and timing.
- Open and closing can be reversed on a click.
- Optional shadow effects.

## Installation

To install the Curtain component, use npm:

```bash
  npm install close-a-curtain

  yarn add close-a-curtain
```

## Usage

Here is how you can use the Curtain component in your React project.

```tsx
import { useState } from 'react';
import Curtain from 'close-a-curtain';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Curtain</button>
      <Curtain control={isOpen} setControl={setIsOpen}>
        <h1>Content behind the curtain</h1>
      </Curtain>
    </div>
  );
};

export default App;
```

![curtain demo](https://i.imgur.com/wODdWqD.png)

## Props

The Curtain component accepts the following props:

```
  control (boolean): Controls the open/close state of the curtain.
  setControl (Dispatch<SetStateAction<boolean>>): Function to set the control state.
  props (CustomProps): Additional properties to customize the curtain's appearance and behavior.
```

## Default Props

The component has the following default properties:

```js
const defaultProps = {
  backgroundColor: '#8b4513',
  borderColor: '#daa520',
  borderWidth: '10px',
  borderStyle: 'double',
  showBorder: true,
  showShadow: true,
  openSpeed: '1s',
  closeSpeed: '0.5s',
  openTiming: 'ease-in',
  closeTiming: 'ease-out',
};
```

![default curtain](https://i.imgur.com/iKbPqeo.gif)

## Customizing the Component

You can customize the appearance and behavior of the curtain by passing different values for the props. Here is an example of a fully customized curtain:

```tsx
const CustomCurtain = () => {
  const [isOpen, setIsOpen] = useState(false);

  // All props are optional, default will be used if custom not present
  const curtainProps = {
    backgroundColor: '#000',
    borderColor: '#fff',
    borderWidth: '5px',
    borderStyle: 'solid',
    showBorder: false,
    showShadow: false,
    openSpeed: '5s',
    closeSpeed: '5s',
    openTiming: 'linear',
    closeTiming: 'linear',
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Curtain</button>
      <Curtain control={isOpen} setControl={setIsOpen} props={curtainProps}>
        <h1>Custom Content behind the curtain</h1>
      </Curtain>
    </div>
  );
};

export default CustomCurtain;
```

![custom curtain](https://i.imgur.com/TU7Dw1f.gif)

## To do

- Style and accesibility in clickable button
- ~~Start animation on click~~
- ~~Stop animation on curtain click~~
- ~~Customize animation start~~
- ~~Customize animation styles~~
- ~~Customize curtain styles~~
- ~~Add informative description~~
- npm publish Curtain component

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

We welcome contributions to enhance this component! If you find any issues or have suggestions for improvements, please feel free to create an issue or submit a pull request.
