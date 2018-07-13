# React Component Lifecycle Deep Dive

### Component Life Cycle methods

**Mounting**

*These methods are called when an instance of a component is being created and inserted into the DOM:*

- constructor()
- static getDerivedStateFromProps()
- componentWillMount()
- render()
- componentDidMount()

* * *

**Updating**

*An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:*

- componentWillReceiveProps()
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

* * *

**Unmounting**

*This method is called when a component is being removed from the DOM:*

- componentWillUnmount()

* * *

**Error Handling**

*This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.*

- componentDidCatch()

### Component Life Cycle methods that are deprecated now (after React 16.3)

- componentWillMount() // Use constructor()
- componentWillReceiveProps() // Use getDerivedStateFromProps()
- componentWillUpdate() // Use getSnapshotBeforeUpdate()
