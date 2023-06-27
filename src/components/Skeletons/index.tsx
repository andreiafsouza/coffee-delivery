import "./styles.css";

interface SkeletonProps {
  classes: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ classes }) => {
  const classNames = `skeleton ${classes} animate-pulse`;

  return <div className={classNames}></div>;
};

export default Skeleton;
