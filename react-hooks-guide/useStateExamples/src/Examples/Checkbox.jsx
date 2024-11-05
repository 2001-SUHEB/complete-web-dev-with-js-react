import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function Checkbox() {
  const [like, setLike] = useState(false);

  const handleChange = (e) => {
    setLike(e.target.checked);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="form-check">
        <input
          type="checkbox"
          id="like"
          name="Like"
          className="form-check-input"
          checked={like}
          onChange={handleChange}
        />
        <label htmlFor="like" className="form-check-label">
          Like checkbox
        </label>
      </div>
      <p className="mt-3">
        You{like ? " liked" : " did not like"}
      </p>
    </div>
  );
}
