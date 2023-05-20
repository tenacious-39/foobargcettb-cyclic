import React from "react";
// import Select from "react-select";
import { customStyles } from "./constants/customStyles";
import { fontSizeOptions } from "./constants/fontSizeOptions";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


function FontSizeDropdown({ onSelectChangeFont, dvalue }) {
    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={dvalue}
                    onChange={(selectedOption) => onSelectChangeFont(selectedOption.target.value)}
                    label="15px"
                    style={{ marginTop: 0 }}
                >
                    <MenuItem value={fontSizeOptions[0].value}>{fontSizeOptions[0].value}</MenuItem>
                    <MenuItem value={fontSizeOptions[1].value}>{fontSizeOptions[1].value}</MenuItem>
                    <MenuItem value={fontSizeOptions[2].value}>{fontSizeOptions[2].value}</MenuItem>
                    <MenuItem value={fontSizeOptions[3].value}>{fontSizeOptions[3].value}</MenuItem>
                    <MenuItem value={fontSizeOptions[4].value}>{fontSizeOptions[4].value}</MenuItem>
                    <MenuItem value={fontSizeOptions[5].value}>{fontSizeOptions[5].value}</MenuItem>
                    <MenuItem value={fontSizeOptions[6].value}>{fontSizeOptions[6].value}</MenuItem>
                    <MenuItem value={fontSizeOptions[7].value}>{fontSizeOptions[7].value}</MenuItem>
                    <MenuItem value={fontSizeOptions[8].value}>{fontSizeOptions[8].value}</MenuItem>

                </Select>
            </FormControl>
            {/* <Select
                placeholder={`Filter By Category`}
                options={fontSizeOptions}
                styles={customStyles}

                onChange={(selectedOption) => onSelectChange(selectedOption)}
            /> */}
        </>
    );
}

export default FontSizeDropdown;