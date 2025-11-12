1. What is JSX, and why is it used?
Ans: JSX stands for JavaScript XML. It is a special syntax used in React to simplify building UI. JSX makes it easier for programmer by dividing the main program in multiple components which is much more easier and arranging them together. 

2. What is the difference between State and Props?
Ans: The difference between props and state is that the props are a way to pass the data or properties from one component to other components while the state is the real-time data available to use within only that component.

3. What is the useState hook, and how does it work?
Ans: The useState is a React Hook that adds a state variable to a component, returning the current state and a set function to update it. The useState hook takes the first value of the state variable as its argument. The second value then sets the state, which is why it's always initiated as setState.

4. How can you share state between components in React?
Ans:To share state between components in React we can use 'Lifting up state'. Lifting State Up is ideal for simple cases where components are closely related and prop drilling is not excessive.

5. How is event handling done in React?
Ans: In React, event handling is done by JSX syntax and React provides its own synthetic event system. The mostly used event handler in React is 'onClick'. There are some other event handler such as onChange, onSubmit, onMouseEnter etc. 