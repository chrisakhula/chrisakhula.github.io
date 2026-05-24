import { useEffect, useState } from "react";

type TypingNameProps = {
  className?: string;
  firstNameClassName?: string;
  lastNameClassName?: string;
  cursorClassName?: string;
};

const fullName = "Cleophas Ouma";
const firstName = "Cleophas";

const TypingName = ({
  className = "",
  firstNameClassName = "",
  lastNameClassName = "",
  cursorClassName = "",
}: TypingNameProps) => {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const isComplete = visibleCharacters === fullName.length;
    const isEmpty = visibleCharacters === 0;
    const delay = isComplete ? 1500 : isEmpty && isDeleting ? 450 : isDeleting ? 55 : 95;

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        return;
      }

      setVisibleCharacters((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, visibleCharacters]);

  const typedText = fullName.slice(0, visibleCharacters);
  const typedFirstName = typedText.slice(0, firstName.length);
  const typedLastName = typedText.slice(firstName.length).trimStart();
  const hasTypedLastName = visibleCharacters > firstName.length + 1;

  return (
    <span className={`inline-block whitespace-nowrap ${className}`} aria-label={fullName}>
      <span className={firstNameClassName}>{typedFirstName}</span>
      {(hasTypedLastName || visibleCharacters > firstName.length) && " "}
      <span className={lastNameClassName}>{typedLastName}</span>
      <span
        aria-hidden="true"
        className={`ml-1 inline-block animate-pulse text-primary ${cursorClassName}`}
      >
        |
      </span>
    </span>
  );
};

export default TypingName;
