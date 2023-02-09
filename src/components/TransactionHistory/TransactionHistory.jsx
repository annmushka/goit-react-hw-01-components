import PropTypes from 'prop-types';
import {
  TransactionTable,
  Thead,
  HeadCell,
  HeadRow,
  TableBody,
  BodyRow,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <Thead>
        <HeadRow>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </HeadRow>
      </Thead>

      <TableBody>
        {items.map(item => (
          <BodyRow key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </BodyRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
