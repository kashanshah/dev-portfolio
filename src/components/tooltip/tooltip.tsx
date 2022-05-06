import { Tooltip as ChakraTooltip, TooltipProps as ChakraTooltipProps } from '@chakra-ui/react';
import { useIsMobile } from '@hooks/use-is-mobile';

interface TooltipProps extends ChakraTooltipProps {
  label: string;
}

export const Tooltip = (props: TooltipProps) => {
  const { isMobile } = useIsMobile();

  if (isMobile) {
    return <>{props.children}</>;
  }

  return <ChakraTooltip hasArrow {...props} />;
};
