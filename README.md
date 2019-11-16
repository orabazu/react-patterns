
### React Patterns

Implementation of some of the basic & advanced react patterns 👩‍🚀

- Compound Components
- Flexible Compound Components
- Render Props 
- Prop collection 
- Initial State Reducer

#### Compound Components
[Compound component](https://kentcdodds.com/blog/mixing-component-patterns) is a pattern to that such components share the state under the hood implicitly 
without configuration

#### Flexible Compound Components
Compound component is only applicaple to one level depth components. Using context we can apply implicit data sharing to deeper children.


#### Render props
Render props makes explict the implicit state that is achieved with compound components.
Gives full control over component state using children implicit props which lays between opening and closing jsx tags.

#### Prop collection
Quite similar to render props but provides collection of props to multiple usecases/components

#### Internal State Reducer
An internal [state reducer](https://blog.kentcdodds.com/b40316cfac57) is a function that is used for what's going to be passed to setState as a payload. 
It enables developer to add some extra control in time setState have been called from child component.

### Boilerplate 

[react-parcel-boilerplate](https://github.com/zhunor/react-parcel-boilerplate) 

