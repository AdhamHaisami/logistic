import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

interface Props{
  title: string;
  number: string
}

const MyCard: React.FC<Props> = ({title, number}) => {
  return (
    <Card sx={{ height: 110 }}>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{number}</Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
