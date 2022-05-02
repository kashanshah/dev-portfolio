import { ChakraTheme, extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { constants } from '@utils/constants';
import { Dict } from '@chakra-ui/utils';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: constants?.theme?.defaultTheme || 'light',
  useSystemColorMode: constants?.theme?.useSystemColorMode || true,
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#141214')(props),
    },
  }),
};

// 3. extend the theme
const theme: Dict = extendTheme({ config });

export default theme;
