import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 100%; /* Cada gráfico ocupará metade do espaço disponível */
    height: auto;
    flex-direction: column;
  }
`;

export const ChartContainer = styled.div`
  width: 50%; /* Cada gráfico ocupará metade do espaço disponível */
  height: 400px;
  margin-top: 40px;
  margin-bottom: 80px;

  @media (max-width: 800px) {
    width: 100%; /* Cada gráfico ocupará metade do espaço disponível */
  }
`;
export const ChartTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const barBackgroundColor = "rgba(75, 192, 192, 0.2)";
export const barBorderColor = "rgba(75, 192, 192, 1)";

export const lineBackgroundColor = "rgba(153, 102, 255, 0.2)";
export const lineBorderColor = "rgba(153, 102, 255, 1)";

export const pieBackgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];

export const pieBorderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

export const radarBackgroundColor = "rgba(255, 99, 132, 0.2)";
export const radarBorderColor = "rgba(255, 99, 132, 1)";
