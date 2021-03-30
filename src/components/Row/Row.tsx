import React from 'react';

import { Column } from '~/components';
import { IColumnProps } from '~/components/Column';

export type RowProps = IColumnProps;

const Row: React.FC<RowProps> = props => <Column flexDirection='row' {...props} />;

export default Row;
