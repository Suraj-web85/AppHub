import React from "react";
import '../styles/Skeleton.css';

export function SkeleRect() {
  return <div className="skeleton-h1"></div>;
}

export function SkeleSqu() {
  return (
    <div className="skeleton-h2">
      <div className="skl-sqch"></div>
    </div>
  );
}

function Skeleton() {
  return <div>Skeleton</div>;
}

export default Skeleton;
