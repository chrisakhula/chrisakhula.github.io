import { useEffect, useState } from "react";

type TypingNameProps = {
  className?: string;
  firstNameClassName?: string;
  lastNameClassName?: string;
  cursorClassName?: string;
};

const fullName = "Cleophas Ouma";
const firstName = "Cleophas";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TypingName = ({
  className = "",
  firstNameClassName = "",
  lastNameClassName = "",
  cursorClassName = "",
}: TypingNameProps) => {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisibleCharacters(fullName.length);
      return;
    }

    const isComplete = visibleCharacters === fullName.length;
    const isEmpty = visibleCharacters === 0;
    const delay = isComplete
      ? 2600
      : isEmpty && isDeleting
        ? 680
        : isDeleting
          ? 42
          : visibleCharacters === 0
            ? 280
            : 74;

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        return;
      }

      setVisibleCharacters((current) =>
        Math.min(Math.max(current + (isDeleting ? -1 : 1), 0), fullName.length),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, visibleCharacters]);

  const typedText = fullName.slice(0, visibleCharacters);
  const typedFirstName = typedText.slice(0, firstName.length);
  const typedLastName = typedText.slice(firstName.length).trimStart();
  const hasTypedLastName = visibleCharacters > firstName.length + 1;

  return (
    <span className={`inline-grid whitespace-nowrap align-baseline ${className}`} aria-label={fullName}>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        <span className={firstNameClassName}>{typedFirstName}</span>
        {(hasTypedLastName || visibleCharacters > firstName.length) && " "}
        <span className={lastNameClassName}>{typedLastName}</span>
        <span
          className={`ml-1 inline-block animate-pulse text-primary ${cursorClassName}`}
        >
          |
        </span>
      </span>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        <span className={firstNameClassName}>{firstName}</span>{" "}
        <span className={lastNameClassName}>Ouma</span>
        <span className={`ml-1 inline-block ${cursorClassName}`}>|</span>
      </span>
    </span>
  );
};

export default TypingName;
