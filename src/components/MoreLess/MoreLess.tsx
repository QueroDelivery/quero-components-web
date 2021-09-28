import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";

interface MoreLessProps {
  size?: "small" | "medium" | "big";
  disabled?: boolean;
  value: number;
  limit?: number;
  minimum?: number;
  more: () => void;
  less: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: number) => void;
}

const MoreLess: React.FC<MoreLessProps> = ({
  size,
  disabled,
  value,
  limit,
  minimum,
  more,
  less,
  onChange,
}) => {
  const [noLess, setNoLess] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const [sizeState, setSizeState] = useState<"small" | "medium" | "big">(
    "medium"
  );

  useEffect(() => {
    if (size) {
      setSizeState(size);
    }
  }, [size]);

  useEffect(() => {
    if ((minimum && value <= minimum) || value <= 0) {
      setNoLess(true);
    } else {
      setNoLess(false);
    }
  }, [minimum, value]);

  useEffect(() => {
    if (limit && value >= limit) {
      setNoMore(true);
    } else {
      setNoMore(false);
    }
  }, [limit, value]);

  return (
    <Container
      limit={limit}
      minimum={minimum}
      value={value}
      size={sizeState}
      disabled={disabled}
      noLess={noLess}
      noMore={noMore}
    >
      <div
        className="btn left"
        onClick={() =>
          !disabled ? (less ? (noLess ? null : less()) : null) : null
        }
      >
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <input
        value={value || value === 0 ? value.toString() : ""}
        type="number"
        onChange={(event) =>
          onChange ? onChange(Number(event.target.value)) : null
        }
        disabled={disabled || !onChange}
      />
      <div
        className="btn right"
        onClick={() =>
          !disabled ? (noMore ? null : more ? more() : null) : null
        }
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </Container>
  );
};

export default MoreLess;
