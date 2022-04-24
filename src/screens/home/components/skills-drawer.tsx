import {
  Box,
  Button,
  Icon,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
  Grid,
} from '@chakra-ui/react';
import { StickyNote } from '@screens/home/components/sticky-note';
import { LinkedinFilled } from '@ant-design/icons';

export const SkillsDrawer = (props: Omit<DrawerProps, 'children'>) => {
  const { onClose, isOpen, ...rest } = props;
  return (
    <Drawer placement='bottom' onClose={onClose} isOpen={isOpen} closeOnEsc {...rest}>
      <DrawerOverlay />
      <DrawerContent maxH='75vh'>
        <DrawerCloseButton zIndex={2} />
        <DrawerHeader
          p={['4', '10']}
          background='url(/images/card-wall.jpeg)'
          borderBottomWidth='1px'
          textAlign='center'
          zIndex={1}
          boxShadow='0 5px 30px #3333335c'
        >
          <StickyNote
            text='Skills Board'
            minHeight='90px'
            width='250px'
            m='auto'
            color='green'
            textDecoration='underline'
            transform='rotate(0) !important'
            _hover={{
              transform: 'scale(1)',
            }}
          />
        </DrawerHeader>
        <DrawerBody background='url(/images/card-wall.jpeg)' pt='10' pb='5'>
          <Grid templateColumns='repeat(auto-fit, 250px)' justifyContent='center' alignItems='center' gap='10' p='4'>
            <StickyNote text='React' rating={3} />
            <StickyNote text='NextJS' rating={2} />
            <StickyNote text='JavaScript' rating={3} />
            <StickyNote text='TypeScript' rating={2} />
            <StickyNote text='HTML' rating={3} />
            <StickyNote text='CSS' rating={3} />
            <StickyNote text='NodeJS' rating={1} />
            <StickyNote text='MongoDB' rating={1} />
            <StickyNote text='SCSS' rating={2} />
            <StickyNote text='LESS' rating={2} />
            <StickyNote text='WordPress' rating={3} />
            <StickyNote text='BootstrapCSS' rating={3} />
            <StickyNote text='jQuery' rating={3} />
            <StickyNote text='Ajax' rating={2} />
            <StickyNote text='PHP' rating={1} />
            <StickyNote text='MySQL' rating={2} />
            <StickyNote text='Git' rating={2} />
            <StickyNote text='SVN' rating={1} />
          </Grid>
          <Box textAlign='center' mt='10'>
            <Link
              _hover={{ textDecoration: 'none' }}
              isExternal
              href='https://www.linkedin.com/in/kashanshah/details/skills/'
            >
              <Button variant='outline' colorScheme='orange'>
                <Stack alignItems='center' isInline spacing='3'>
                  <LinkedinFilled />
                  <Text>View endorsments on my skills</Text>
                </Stack>
              </Button>
            </Link>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
