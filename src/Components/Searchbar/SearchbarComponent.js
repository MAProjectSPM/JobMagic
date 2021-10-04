import * as React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnRounded from '@material-ui/icons/LocationOnRounded';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import '../Searchbar/Searchbar.css';

export default function SearchbarComponent(){
    const skills = [
        {category:'Front-end Web Devloper', keyword:'Node JS', location:'Hyd'},
        {category:'Back-end Web Devloper', keyword:'Angular JS', location:'Pune'},
        {category:'Full Stack Web Devloper', keyword:'React JS', location:'Delhi'},
        {category:'Software Engineer', keyword:'Java', location:'Bangalore'},
        {category:'Accounting', keyword:'CA', location:'Chennai'},
        {category:'Back Office', keyword:'MS Office', location:'Mumbai'},
        {category:'Marketing', keyword:'Sales', location:'Gujrat'},
        {category:'Management', keyword:'HR', location:'Kolkata'},  
    ];

    return(
            <div className="search">
             <Autocomplete
                options={skills.map((option) => option.category)}
                className="input1"
                itemScope
                renderInput={(params) => (
                  <TextField {...params} label="Category" helperText={"eg. Web Development"} size='small' margin="normal" variant="outlined" />
                )}
             />
             <Autocomplete
                options={skills.map((option) => option.keyword)}
                className="input2"
                renderInput={(params) => (
                <TextField {...params} label="Keyword, Job title or skill" helperText={"eg. React Js, Java, MS Excel, Php"} size='small' margin="normal" variant="outlined"  />
             )}
             />
            <Autocomplete
                options={skills.map((option) => option.location)}
                className="input3"
                renderInput={(params) => (
                <TextField {...params} label="Location" size='small' margin="normal" variant="outlined" helperText={"eg. Delhi, Pune"} style={{width:'200px',borderRadius:'7px'}}
                 InputProps={{
                    endAdornment: (
                      <div className="icon">
                        <InputAdornment position="end">
                        <LocationOnRounded className="location" />
                      </InputAdornment>
                      </div>
                    )
                  }}      
                />
               )}  
            />
              <div className="searchIcon">
              <Button>
                <SearchOutlinedIcon  />
              </Button>
              </div>
            </div>
    )
}
