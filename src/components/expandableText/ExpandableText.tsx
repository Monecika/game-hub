import { useState } from "react";

interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expaned, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <p>{children}</p>;

  const summary = children.substring(0, limit) + "...";

  return (
    <p>
      {expaned ? children : summary}
      <button className="ms-1" onClick={() => setExpanded(!expaned)}>
        Show {expaned ? "less" : "more"}
      </button>{" "}
    </p>
  );
};

export default ExpandableText;
