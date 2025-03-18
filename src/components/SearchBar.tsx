import { Box, Button, Flex, NumberInput, Paper, Slider } from "@mantine/core";

const SearchBar = (props: {
  height: string;
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
  reload: () => void;
}) => {
  const { height, min, max, value, onValueChange, reload } = props;

  return (
    <Paper shadow={"sm"} radius={"md"} p={"md"} withBorder h={height}>
      <Flex
        gap={"md"}
        justify={"center"}
        align={"flex-end"}
        direction={"row"}
        wrap={"nowrap"}
      >
        <Box maw={400} style={{ width: "100%" }}>
          <Slider
            w={"100%"}
            size={"md"}
            radius={"md"}
            marks={[
              { value: min, label: `${min} m` },
              { value: max / 4, label: `${max / 4} m` },
              { value: (max / 4) * 2, label: `${(max / 4) * 2} m` },
              { value: (max / 4) * 3, label: `${(max / 4) * 3} m` },
              { value: max, label: `${max} m` },
            ]}
            min={min}
            max={max}
            step={10}
            value={value}
            onChangeEnd={onValueChange as (value: number) => void}
            label={(value) => `${value} m`}
            restrictToMarks
          />
        </Box>
        <Button
          color={"green"}
          variant={"filled"}
          onClick={reload}
          radius={"md"}
        >
          Search
        </Button>
      </Flex>
    </Paper>
  );
};
export default SearchBar;
/*<NumberInput
          radius={"md"}
          label={"Search Radius"}
          placeholder={"Input Radius"}
          allowNegative={false}
          allowDecimal={false}
          suffix={" m"}
          min={min}
          max={max}
          defaultValue={20}
          step={5}
          value={value}
          onChange={onValueChange as (value: string | number) => void}
        />
*/
