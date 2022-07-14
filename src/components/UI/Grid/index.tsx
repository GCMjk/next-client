type GridProps = {
  gap: number;
  children?: React.ReactNode;
};

const GridUI = ({ gap, children }: GridProps) => {
  return <div className="grid gap-6 mb-6 md:grid-cols-2">{children}</div>;
};

export default GridUI;
