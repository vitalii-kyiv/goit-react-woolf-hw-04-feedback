const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>
          <p>
            Good:
            <span>{good}</span>
          </p>
        </li>
        <li>
          <p>
            Neutral:
            <span>{neutral}</span>
          </p>
        </li>
        <li>
          <p>
            Bad:
            <span>{bad}</span>
          </p>
          <p>
            Tatal:
            <span>{total()}</span>
          </p>
          <p>
            Positive feedback:
            <span>{positivePercentage()}%</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
