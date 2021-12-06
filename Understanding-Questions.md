# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* Dispatch runs addOne() action creator 

* addOne() sends an action to dispatch.  Dispatch sends the current state that action to reducer.

* Reducer runs the first case on it's switch which returns a new state to dispatch.

* Dispatch delivers the updated state to the component in App which re-renders the element.

* TotalDisplay shows the total plus 1.

