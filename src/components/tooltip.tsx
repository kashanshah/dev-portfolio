import { Tooltip as ChakraTooltip, TooltipProps as ChakraTooltipProps } from '@chakra-ui/react';

interface TooltipProps extends ChakraTooltipProps {
  label: string;
}

export const Tooltip = (props: TooltipProps) => {
  return <ChakraTooltip hasArrow {...props} />;
};
