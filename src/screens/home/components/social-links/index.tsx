import { Button, Flex, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { useGoToUrl } from '@utils/url';

export const SocialLinks = () => {
  const goToUrl = useGoToUrl();

  return (
    <Stack spacing='2' align='center'>
      <Text>Connect me on</Text>
      <Flex>
        <Link isExternal href='https://fb.me/crickashan'>
          <IconButton variant='link' colorScheme='facebook' fontSize='2xl' aria-label='facebook'>
            <FacebookFilled />
          </IconButton>
        </Link>
        <Link isExternal href='https://github.com/kashanshah'>
          <IconButton variant='link' colorScheme='github' fontSize='2xl' aria-label='github'>
            <GithubFilled />
          </IconButton>
        </Link>
        <Link isExternal href='https://ae.linkedin.com/in/kashanshah'>
          <IconButton variant='link' colorScheme='linkedin' fontSize='2xl' aria-label='linkedin'>
            <LinkedinFilled />
          </IconButton>
        </Link>
        <Link isExternal href='https://www.instagram.com/crickashan'>
          <IconButton variant='link' colorScheme='orange' fontSize='2xl' aria-label='instagram'>
            <InstagramFilled />
          </IconButton>
        </Link>
      </Flex>
      <Text blur='md'>Or</Text>
      <Button
        variant='outline'
        colorScheme='orange'
        onClick={(e) => {
          e.preventDefault();
          goToUrl('/contact');
        }}
      >
        Say me Hi
      </Button>
    </Stack>
  );
};
