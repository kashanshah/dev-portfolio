import { Box, Button, DrawerProps, Grid, Link, Stack, Text } from '@chakra-ui/react';
import { StickyNote } from '@screens/home/components/sticky-note';
import { LinkedinFilled } from '@ant-design/icons';
import { Drawer } from '@components/drawer';
import { constants } from '@helpers/constants';
import { SkillsList } from '@screens/home/components/skills-drawer/skills-list';

export const Index = (props: Omit<DrawerProps, 'children'>) => {
  const { onClose, isOpen, ...rest } = props;
  const skills = constants?.skills;

  return (
    <Drawer
      placement='bottom'
      onClose={onClose}
      isOpen={isOpen}
      header={
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
      }
      headerProps={{
        p: ['4', '10'],
        background: 'url(/images/card-wall.jpeg)',
        borderBottomWidth: '1px',
        textAlign: 'center',
        zIndex: 1,
        boxShadow: '0 5px 30px #3333335c',
      }}
      bodyProps={{
        background: 'url(/images/card-wall.jpeg)',
        pt: '10',
        pb: '5',
      }}
      contentProps={{
        maxH: ['75vh', '90vh'],
      }}
      {...rest}
    >
      <Grid templateColumns='repeat(auto-fit, 250px)' justifyContent='center' alignItems='center' gap='10' p='4'>
        <SkillsList skills={skills.data} />
      </Grid>
      {skills?.data?.length && (
        <Box textAlign='center' mt='10'>
          <Link _hover={{ textDecoration: 'none' }} isExternal href={skills.linkedInUrl}>
            <Button variant='outline' colorScheme='orange'>
              <Stack alignItems='center' isInline spacing='3'>
                <LinkedinFilled />
                <Text>View endorsements on my skills</Text>
              </Stack>
            </Button>
          </Link>
        </Box>
      )}
    </Drawer>
  );
};
