/* eslint-disable react/prop-types */
function Options({ question, dispatch, answer }) {
  const hasAnswer = answer != null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index && "answer"} ${
            hasAnswer
              ? question.correctOption === index
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer != null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
