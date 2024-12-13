import { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState();
  const [tipFriend, setTipFriend] = useState();
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />

      <SelectPercentage
        tipPercentage={tipPercentage}
        setTipPercentage={setTipPercentage}
        tipFriend={tipFriend}
        setTipFriend={setTipFriend}
      />
      <Output bill={bill} tipPercentage={tipPercentage} tipFriend={tipFriend} />
      <Reset />
    </div>
  );
}
function BillInput({ bill, setBill }) {
  function handleBillChange(e) {
    setBill(e.target.value);
  }

  return (
    <div className="sideBySide">
      <p>How much was the bill?</p>
      <input type="number" value={bill} onChange={handleBillChange} />
    </div>
  );
}

function SelectPercentage({
  tipPercentage,
  tipFriend,
  setTipPercentage,
  setTipFriend,
}) {
  function handleSelectChange(e) {
    setTipPercentage(e.target.value);
  }
  function handleSelectFriend(e) {
    setTipFriend(e.target.value);
  }
  return (
    <>
      <div className="sideBySide">
        <p>How did you like the service?</p>
        <select value={tipPercentage} onChange={handleSelectChange}>
          <option value="0"> Dissatisfied (0%)</option>
          <option value="0.05"> It was okay (5%)</option>
          <option value="0.1">It was good (10%)</option>
          <option value="0.2"> Absolutely amazing! (20%)</option>
        </select>
      </div>

      <div className="sideBySide">
        <p>How did your friend like the service?</p>
        <select value={tipFriend} onChange={handleSelectFriend}>
          <option value="0"> Dissatisfied (0%)</option>
          <option value="0.05"> It was okay (5%)</option>
          <option value="0.1">It was good (10%)</option>
          <option value="0.2"> Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}

function Output({ bill, tipPercentage, tipFriend }) {
  return (
    <div className="outputReset">
      <p>{`You pay ${bill + 10} (${bill} + $00 tip)`}</p>
    </div>
  );
}

function Reset() {
  return (
    <div className="outputReset">
      <button>Reset</button>
    </div>
  );
}

export default App;
