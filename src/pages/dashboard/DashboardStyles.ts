// DashboardStyles.ts
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 24px;
`;

export const GrayContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
`;

export const DateFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const DateSelector = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-right: 10px;
  }
`;

export const FilterIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
