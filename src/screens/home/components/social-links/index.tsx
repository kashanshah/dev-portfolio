import { Button, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { useGoToUrl } from '@utils/url';
import { constants } from '@helpers/constants';
import { IconMapper } from '@components/icon-mapper';
import { Tooltip } from '@components/tooltip';
import { pushGAEvent } from '@utils/ga';

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
            <Link
              isExternal
              href={constants.socialLinks[link].link}
              key={link + index}
              _hover={{
                transform: 'scale(1.1)',
              }}
              onClick={() => {
                pushGAEvent('click', constants.socialLinks[link].link, 'Social link click', 1);
              }}
            >
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
      <Text blur='md'>Or</Text>
      {constants.isContactPageDisabled ? (
        <Link _hover={{ textDecoration: 'none' }} isExternal href={`mailto:${constants.email}`}>
          <Tooltip label={constants.email}>
            <Button variant='link' colorScheme='blue'>
              {constants?.homePage?.emailMeText || 'send me an email'}
            </Button>
          </Tooltip>
        </Link>
      ) : (
        <Button
          variant='outline'
          colorScheme='orange'
          onClick={(e) => {
            e.preventDefault();
            goToUrl('/contact');
          }}
        >
          {constants?.homePage?.contactPageLinkText || 'Contact Me'}
        </Button>
      )}
    </Stack>
  );
};
