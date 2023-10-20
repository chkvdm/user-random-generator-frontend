import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import theme from '../../css/sliderColor';

const ErrorSlider = ({ errorValue, handleErrorSlider }) => {
  return (
    <div className="slider">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: 150 }}>
          <Slider
            className="sliderError"
            aria-label="Default"
            valueLabelDisplay="auto"
            color="secondary"
            min={0}
            max={10}
            step={0.25}
            value={errorValue <= 10 ? errorValue : 10}
            onChange={handleErrorSlider}
          />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default ErrorSlider;
