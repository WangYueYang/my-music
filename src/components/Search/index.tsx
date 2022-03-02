import React, { useState } from 'react';
import classNames from 'classnames';
import { SearchIcon } from '@assets/img/icons';
import SvgIcon from '../SvgIcon';
import './index.css';

const Search = (): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <div className={classNames({ active: isFocus }, 'search')}>
      <SvgIcon icon={SearchIcon} />
      <div className="search-wrapper">
        <input
          type="text"
          className="search-inp"
          placeholder={isFocus ? '' : 'Search'}
          onFocus={(e: InputEventInit) => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
