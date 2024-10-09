import React from 'react';
import {MicroQuiz} from "../MicroForm/MicroFormData.ts";
import {Paper, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface MicroListHeadComponent{
  microQuiz: MicroQuiz;
}


const MicroListHeadComponent: React.FC<MicroListHeadComponent> = ({
                                                                    microQuiz,
}) => {

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        p:0.5,
        borderRadius: 4,
      }}
    >

      <ExpandMoreIcon
        sx={{
          ml: 2,
        }}
      />

      <Typography
        sx={{
          flexGrow: 1,
          fontWeight: 'bold',
          fontSize: { xs: '1rem', sm: '1.2rem' },
          textAlign: 'left',
          ml: 2,
        }}
      >
        {microQuiz.categoryName}
      </Typography>



    </Paper>
  );
};

export default React.memo(MicroListHeadComponent);
