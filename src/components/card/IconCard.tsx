// IconCard.tsx
import React from "react";
import {
  IconCardContainer,
  IconImage,
  IconCardContent,
  AccessesContainer,
  AccessesText,
} from "./IconCardStyles";

interface IconCardProps {
  title: string;
  iconUrl: string;
  accesses?: number;
}

const IconCard: React.FC<IconCardProps> = ({ title, iconUrl, accesses }) => {
  return (
    <IconCardContainer>
      <IconImage src={iconUrl} />
      <IconCardContent>{title}</IconCardContent>
      {accesses !== undefined && (
        <AccessesContainer>
          <AccessesText>{accesses}%</AccessesText>
          <span>Users</span>
        </AccessesContainer>
      )}
    </IconCardContainer>
  );
};

export default IconCard;
