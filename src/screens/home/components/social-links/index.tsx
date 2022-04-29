import { Button, Flex, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { useGoToUrl } from '@utils/url';
import { constants } from '@helpers/constants';
import { IconMapper } from '@components/icon-mapper';

export const SocialLinks = () => {
  const goToUrl = useGoToUrl();

  if (Object.keys(constants.socialLinks || {}).length === 0) {
    return <></>;
  }

  return (
    <Stack spacing='2' align='center'>
      <Text>Connect me on</Text>
      <Flex>
        {Object.keys(constants.socialLinks).map((link, index) => {
          return (
            <Link isExternal href={constants.socialLinks[link].link} key={link + index}>
              <Button
                variant='link'
                colorScheme={constants.socialLinks[link].colorScheme}
                fontSize='2xl'
                aria-label={link}
              >
                <IconMapper icon={constants.socialLinks[link].icon ?? 'link'} />
              </Button>
            </Link>
          );
        })}
      </Flex>
      {!constants.isContactPageDisabled && (
        <>
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
        </>
      )}
    </Stack>
  );
};
