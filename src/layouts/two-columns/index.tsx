import { BoxProps, Flex, FlexProps, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import { updateBG, updateIsPageLoading } from '@redux/common-slice';
import { constants } from '@utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { trans } from '@utils/trans';

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
      <Flex overflow='hidden' {...commonProps}>
        <style jsx global>{`
          /* Copy this @keyframes block to your CSS*/
          @keyframes kenBurns {
            0.0% {
              transform: scale(1);
              transform-origin: 50% 50%;
            }
            50% {
              transform: scale(1.5);
              transform-origin: 50% 50%;
            }
            100% {
              transform: scale(1);
              transform-origin: 50% 50%;
            }
          }

          /* Add the animation: property to whichever element you want to animate */
          .bg-image {
            animation: kenBurns 60s linear 0s infinite normal forwards;
          }
        `}</style>
        <Image
          onClick={() => dispatch(updateBG())}
          src={`/images/${homeBGImage}.jpeg`}
          alt={trans(constants.title)}
          height={['auto', '100vh']}
          w='100%'
          objectFit='cover'
          className='bg-image'
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
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateIsPageLoading(false));
    }, 500);
  }, []);

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
