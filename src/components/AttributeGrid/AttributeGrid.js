import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'free delivery'}
        subtitle={'We lose money on this, you\'re welcome'}
      />
      <Attribute
        icon={'cycle'}
        title={'returns'}
        subtitle={'Return goods within 30 years for a full refund, take that Amazon'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secure payment'}
        subtitle={'Shop safely, as far as you are aware'}
      />
    </div>
  );
};

export default AttributeGrid;
