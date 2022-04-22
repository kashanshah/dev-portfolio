import { BoxProps, Flex, FlexProps, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import { updateBG } from '@redux/common-slice';
import constants from '../../helpers/constants.json';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';

const ImageWall = (props: FlexProps) => {
  const dispatch = useDispatch();
  const { homeBGImage } = useSelector((state: RootState) => state.common);

  useEffect(() => {
    dispatch(updateBG());
  }, []);

  const commonProps = {
    minW: ['100%', '50%'],
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (!props.children) {
    return (
      <Flex {...commonProps}>
        <Image
          onClick={() => dispatch(updateBG())}
          src={`/images/${homeBGImage}.jpeg`}
          alt={constants.fullName}
          height={['auto', '100vh']}
          w='100%'
          objectFit='cover'
          // ignoreFallback
          // fallback={<LoadingOutlined spin style={{ fontSize: 'xxx-large' }} />}
        />
      </Flex>
    );
  }

  return <Flex {...commonProps} {...props} />;
};

PageWrapper.ImageWall = ImageWall;

const ContentWall = (props: FlexProps) => {
  return (
    <Flex
      minW={['100%', '50%']}
      alignItems='center'
      justifyContent='center'
      h='100%'
      flexDirection='column'
      my={['32px', null]}
      {...props}
    />
  );
};

PageWrapper.ContentWall = ContentWall;

export function PageWrapper(props: BoxProps) {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      height={['auto', '100vh']}
      flexDirection={['column-reverse', 'row']}
      minW='100%'
      {...props}
    />
  );
}
