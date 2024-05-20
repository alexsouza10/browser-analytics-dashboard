import React, { useState } from "react";
import {
  DashboardContainer,
  DateFilter,
  DateSelector,
  GrayContainer,
  FilterIcon,
  Title,
} from "./DashboardStyles";
import IconCard from "../../components/card/IconCard";
import BrowserCharts from "../../components/charts/BrowserCharts";

const browsersData = [
  {
    title: "Brave",
    iconUrl: "/icons/braveIcon.png",
    content: "Brave browser icon",
    accessDate: "2024-05-01",
    accesses: 11,
  },
  {
    title: "Chrome",
    iconUrl: "/icons/chromeIcon.png",
    content: "Chrome browser icon",
    accessDate: "2024-05-03",
    accesses: 54,
  },
  {
    title: "Edge",
    iconUrl: "/icons/edgeIcon.png",
    content: "Edge browser icon",
    accessDate: "2024-05-05",
    accesses: 19,
  },
  {
    title: "Firefox",
    iconUrl: "/icons/firefoxIcon.png",
    content: "Firefox browser icon",
    accessDate: "2024-05-07",
    accesses: 22,
  },
  {
    title: "Opera",
    iconUrl: "/icons/operaIcon.png",
    content: "Opera browser icon",
    accessDate: "2024-05-09",
    accesses: 3,
  },
  {
    title: "Safari",
    iconUrl: "/icons/safariIcon.png",
    content: "Safari browser icon",
    accessDate: "2024-05-11",
    accesses: 7,
  },
];

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("complete");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(event.target.value);
  };

  const filteredBrowsersData = browsersData.filter((browser) => {
    if (filterType === "month") {
      const selectedDateObj = new Date(selectedDate);
      const browserAccessDate = new Date(browser.accessDate);
      return browserAccessDate.getMonth() === selectedDateObj.getMonth();
    }

    if (filterType === "week") {
      const selectedDateObj = new Date(selectedDate);
      const browserAccessDate = new Date(browser.accessDate);
      const firstDayOfWeek = new Date(selectedDateObj);
      firstDayOfWeek.setDate(
        selectedDateObj.getDate() - selectedDateObj.getDay()
      );
      const lastDayOfWeek = new Date(selectedDateObj);
      lastDayOfWeek.setDate(
        selectedDateObj.getDate() - selectedDateObj.getDay() + 6
      );
      return (
        browserAccessDate >= firstDayOfWeek &&
        browserAccessDate <= lastDayOfWeek
      );
    }

    return true;
  });

  return (
    <GrayContainer>
      <Title>
        <strong>Browser Overview</strong>
      </Title>
      <DateFilter>
        <DateSelector>
          <label htmlFor="date">Data:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </DateSelector>
        <DateSelector>
          <FilterIcon src="/icons/filterIcon.png" alt="Filter" />
          <select id="filter" value={filterType} onChange={handleFilterChange}>
            <option value="complete">Completo</option>
            <option value="month">Mês</option>
            <option value="week">Semana</option>
          </select>
        </DateSelector>
      </DateFilter>
      <DashboardContainer>
        {filteredBrowsersData.length > 0 ? (
          filteredBrowsersData.map((browser) => <IconCard {...browser} />)
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </DashboardContainer>
      <BrowserCharts browsersData={filteredBrowsersData} />
    </GrayContainer>
  );
};

export default Dashboard;
