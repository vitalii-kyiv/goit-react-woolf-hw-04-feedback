const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className="btnList">
        {options.map(option => (
          <li key={option}>
            <button
              className="btn"
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackOptions;
