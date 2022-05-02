import { Text } from '@chakra-ui/react';
import { StickyNote } from '@screens/home/components/sticky-note';
import { ConstantsType } from '@utils/types';

type SkillsListProps = {
  skills: ConstantsType['skills']['data'];
};
export const SkillsList = (props: SkillsListProps) => {
  const { skills } = props;
  if (skills?.length === 0) {
    return <Text>No skill added yet!</Text>;
  }

  return (
    <>
      {skills.map(({ name, rating }) => {
        return <StickyNote text={name} rating={rating} />;
      })}
    </>
  );
};
