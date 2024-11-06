import { forwardRef } from "react";

// Child component using forwardRef
const Child = forwardRef((props, ref) => {
  return (
    <>
      <input type="text" ref={ref} className="form-control" {...props} />
    </>
  );
});

// Assign a display name to the component for better debugging
Child.displayName = "ChildComponent";

export default Child;
