// components/parts/CustomCard.tsx

import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";

// TODO: インターフェースを修正
interface CustomCardProps {
    title: string;
    description: string;
    actions?: React.ReactNode;
    bgColor?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  actions,
  bgColor = "#ffffff",
}) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2, backgroundColor: bgColor }}>
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