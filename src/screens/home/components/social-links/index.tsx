import { Button, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { useGoToUrl } from '@utils/url';
import { constants } from '@utils/constants';
import { IconMapper } from '@components/icon-mapper';
import { Tooltip } from '@components/tooltip/tooltip';
import { pushGAEvent } from '@utils/ga';
import { trans } from '@utils/trans';

export const SocialLinks = () => {
  const goToUrl = useGoToUrl();

  if (Object.keys(constants?.socialLinks?.links || {}).length === 0) {
    return <></>;
  }

  return (
    <Stack spacing='2' align='center'>
      <Text>{trans(constants?.socialLinks?.label)}</Text>
      <Flex>
        {Object.keys(constants?.socialLinks?.links).map((link, index) => {
          const socialLink = constants.socialLinks?.links?.[link];
          return (
            <Link
              isExternal
              href={socialLink.link}
              target='_blank'
              key={link + index}
              _hover={{
                transform: 'scale(1.1)',
              }}
              onClick={() => {
                pushGAEvent('click', socialLink.link, 'Social link click', 1);
              }}
            >
              <Button variant='link' colorScheme={socialLink.colorScheme} fontSize='2xl' aria-label={link}>
                <IconMapper icon={socialLink.icon ?? 'link'} />
              </Button>
            </Link>
          );
        })}
      </Flex>
      <Text blur='md'>{trans(constants?.stringTranslations['txt_or'])}</Text>
      {constants.isContactPageDisabled ? (
        <Link _hover={{ textDecoration: 'none' }} isExternal href={`mailto:${constants.email}`}>
          <Tooltip label={constants.email}>
            <Button variant='link' colorScheme='blue'>
              {trans(constants?.homePage?.emailMeText) || 'send me an email'}
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
          {trans(constants?.homePage?.contactPageLinkText) || 'Contact Me'}
        </Button>
      )}
    </Stack>
  );
};
