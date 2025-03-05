import { Button, Flex, NumberInput, Paper } from "@mantine/core";

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
    <Paper shadow={"sm"} radius={"md"} p={"sm"} withBorder h={height}>
      <Flex
        gap={"md"}
        justify={"center"}
        align={"flex-end"}
        direction={"row"}
        wrap={"nowrap"}
      >
        <NumberInput
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
