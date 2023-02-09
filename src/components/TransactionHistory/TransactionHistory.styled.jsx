import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 350px;
  table-layout: fixed;
  border: solid 2px lightslategray;
  border-collapse: collapse;
  text-align: center;
`;

export const Thead = styled.thead`
  border: solid 2px lightslategray;
`;
export const HeadRow = styled.tr`
  border: solid 2px lightslategray;
  background-color: lightcoral;
`;
export const HeadCell = styled.th`
  font-size: 24px;
  font-weight: 700;
`;

export const TableBody = styled.tbody``;

export const BodyRow = styled.tr`
  border: solid 1px lightslategray;
  &:nth-child(2n) {
    background-color: lightgrey;
  }
`;

export const TableData = styled.td`
  font-size: 16px;
  font-weight: 400;
`;