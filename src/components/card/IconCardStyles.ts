// IconCardStyles.ts
import styled from "styled-components";

export const IconCardContainer = styled.div`
  width: 20%;
  height: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const IconImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const IconCardContent = styled.p`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

export const AccessesContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #666;
`;

export const AccessesText = styled.span`
  margin-right: 5px;
`;
