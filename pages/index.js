import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from '@/components/Header';
import styles from './index.less';

import { Row, Col } from 'antd';

const index = () => (
  <div className={styles.layout}>
    <Row gutter={[16, 16]}>
      <Col span={6} >
        
      </Col>
      <Col span={18} >哈哈哈哈哈</Col>
    </Row>

  </div>
);
export default index;