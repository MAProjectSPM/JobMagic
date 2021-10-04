import React from "react";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { Button } from "@mui/material";

export default function MobileSearchComponent(){
    
  return (
    <div className="mobsearch">
      <Button variant="outlined">
        <FindInPageIcon />START YOUR JOB SEARCH
      </Button>
    </div>
  );
};

