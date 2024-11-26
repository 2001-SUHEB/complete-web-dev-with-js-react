
import CompC from "./CompC";
import { Mycontext } from "./CompA";
export default function CompB() {
  return (
    <>
      <Mycontext.Consumer>
        {({ text}) => (
          <>
            <div className="container m-5 p-5 border border-dark">
              <h3>{`Using Consumer ${text}`}</h3>

              <h2>Component B</h2>
              <CompC />
            </div>
          </>
        )}
      </Mycontext.Consumer>
    </>
  );
}
