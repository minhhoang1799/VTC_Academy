import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, TextField, Button } from '@mui/material';
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import './HomeBanner.scss';

function HomeBanner(props) {
    const items = [
        {
            src: 'home_banner.jpeg',
            alt: 'Random src #1',
        },
        {
            src: 'home_banner.jpeg',
            alt: 'Random src #2',
        },
        {
            src: 'home_banner.jpeg',
            alt: 'Random src #3',
        },
    ];
    const currencies = [
        {
            value: 'Tỉnh/ Thành phố',
            label: 'Tỉnh/ Thành phố',
        },
        {
            value: 'USD',
            label: 'HCM CITY',
        },
        {
            value: 'EUR',
            label: 'DA NANG',
        },
        {
            value: 'BTC',
            label: 'HA NOI',
        },
        {
            value: 'JPY',
            label: 'CAN THO',
        },
    ];
    const [searchValue, setSearchValue] = React.useState('');

    const handleSearch = () => {
        // Do something with the search value
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const carouselSettings = {
        animation: 'slide',
        autoPlay: false,
        navButtonsAlwaysVisible: true,
        indicatorIconButtonProps: {
            style: {
                backgroundColor: '#fff',
                border: 1,
            },
        },
        activeIndicatorIconButtonProps: {
            style: {
                backgroundColor: '#ffe200',
                border: 0,
            },
        },
    };


    return (
        <div className="home__banner">
            <Carousel {...carouselSettings}>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>

            <div className="home__banner__search-form">
                <h2 className="home__banner__search-form__title">Tìm kiếm công việc mơ ước dành cho bạn</h2>
                <div className="flex">
                    <Paper
                        component="form"
                        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 944, height: 50 }}
                    >
                        <IconButton sx={{ p: "10px" }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Bạn muốn tìm việc hay công ty nào?"
                            variant="outlined"
                            value={searchValue}
                            inputProps={{ "aria-label": "Bạn muốn tìm việc hay công ty nào?" }}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        />
                        <Box
                            sx={{
                                '& .MuiTextField-root': { width: 243 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-select-currency"
                                select
                                defaultValue="Tỉnh/ Thành phố"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Box>
                    </Paper>
                    <Button variant="contained" onClick={handleSearch}>
                        Tim Kiem
                    </Button>
                </div>
            </div>
        </div >
    );
}

function Item(props) {
    return (
        <Paper>
            <img src={require("../../../../assets/image/" + props.item.src)} alt={props.item.alt} />

        </Paper>
    );
}

export default HomeBanner;
