import React from 'react';
import classNames from 'classnames';
import './index.css';

type SvgIconProps = {
  className?: string;
  icon: React.SVGAttributes<SVGAElement>;
};

const SvgIcon = ({ className, icon }: SvgIconProps): JSX.Element => {
  return (
    <svg viewBox={icon.viewBox} className={classNames('icon', className)}>
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  );
};

export default SvgIcon;
