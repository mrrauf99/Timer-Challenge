import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const userLost = remainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>{userLost ? "You Lost" : "Your Score: " + score}</h2>
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : undefined}.
        </strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
