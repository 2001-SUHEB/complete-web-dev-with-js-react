import { forwardRef, useRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  const childRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      childRef.current.focus();
    },
  }));

  const data =()=>{
    alert(childRef.current.value);
  }

  return (
    <div className="form-group">
      <input
        type="text"
        ref={childRef}
        className="form-control"
        placeholder="Enter text here"
      />
      <button className="btn btn-primary mt-2" onClick={data}>childRef</button>
    </div>
  );
});

Child.displayName = "Child";

export default Child;
