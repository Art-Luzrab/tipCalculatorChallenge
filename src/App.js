function App() {
  return (
    <div>
      <BillInput />
      <SelectPercentage />
    </div>
  );
}

export default App;

function BillInput() {
  return (
    <div className="sideBySide">
      <p>How much was the bill?</p> <input type="number" />
    </div>
  );
}

function SelectPercentage() {
  return (
    <>
      <div className="sideBySide">
        <p>How did you like the service?</p>
        <select>
          <option value="0"> Dissatisfied (0%)</option>
          <option value="0.05"> It was okay (5%)</option>
          <option value="0.1">It was good (10%)</option>
          <option value="0.2"> Absolutely amazing! (20%)</option>
        </select>
      </div>

      <div className="sideBySide">
        <p>How did your friend like the service?</p>
        <select>
          <option value="0"> Dissatisfied (0%)</option>
          <option value="0.05"> It was okay (5%)</option>
          <option value="0.1">It was good (10%)</option>
          <option value="0.2"> Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}

function Output() {}

function Reset() {}
