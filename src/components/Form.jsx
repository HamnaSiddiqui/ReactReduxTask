import { useDispatch } from "react-redux";
import { addEntry } from "..";
import { useState } from "react";
import "./Form.css";

function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    const nameLength = name.length <= 20;
    const yearType = Number(year) <= new Date().getFullYear();
    const ratingRange = rating >= 1 && rating <= 10;

    if (nameLength && yearType && ratingRange) {
      console.log("Form Submitted");
      dispatch(addEntry({ name, year, rating, duration }));
      setName("");
      setYear("");
      setRating("");
      setDuration("");
    } else {
      console.log("Error");
    }
  }

  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <label>
          Name <small>(20 Character Allowed)</small>
          <input
            type="text"
            value={name}
            maxLength={20}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Year <small>(Not greater than current year)</small>
          <input
            type="number"
            value={year}
            max={new Date().getFullYear()}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Rating <small>(1 to 10)</small>
          <input
            type="number"
            value={rating}
            min={1}
            max={10}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <label>
          Duration <small>(input can be max 2.5h or 130m)</small>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
        <button id="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
