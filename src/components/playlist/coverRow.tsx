import React, { ReactChild, ReactNode } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './CoverRow.css';

type CoverRowProps = {
  title: string;
  moreHref?: string;
  children?: JSX.Element | never[];
  type?: string;
};

const CoverRow = ({
  title,
  moreHref = '',
  children,
  type,
}: CoverRowProps): JSX.Element => {
  return (
    <div className="cover-row">
      <div className="title">
        <h3 className="title-text">{title}</h3>
        {moreHref && (
          <Link to={moreHref} className="see-more">
            查看全部
          </Link>
        )}
      </div>
      <div className={classNames('content', type)}>{children}</div>
    </div>
  );
};

export default CoverRow;
