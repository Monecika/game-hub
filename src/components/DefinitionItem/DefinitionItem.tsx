import type { ReactNode } from "react";

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <div className="col-6">
      <dt className="opacity-50">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
