import React from 'react';
import classNames from 'classnames';
import './index.css';

type SvgIconProps = {
  className?: string;
  icon: React.SVGAttributes<SVGAElement>;
  onClick?: () => unknown;
};

const SvgIcon = ({ className, icon, onClick }: SvgIconProps): JSX.Element => {
  return (
    <div className={classNames('icon', className)} onClick={onClick}>
      <svg viewBox={icon.viewBox}>
        <use xlinkHref={`#${icon.id}`} />
      </svg>
    </div>
  );
};

export default SvgIcon;
