// components/parts/CustomCard.tsx

import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";

// TODO: インターフェースを修正
interface CustomCardProps {
  title: string;
  description: string;
  actions?: React.ReactNode;
  bgColor?: string;
  hoverColor?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  actions,
  bgColor = "#f5f5f5",
  hoverColor = "#b0b0b0"
}) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        mb: 2,
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: hoverColor,
        }
      }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default CustomCard;