import { BeatLoader } from 'react-spinners';

type Props = {};

const Loading = (props: Props) => {
  return (
    <BeatLoader
      cssOverride={{ margin: '2rem auto', textAlign: 'center' }}
      color='#333'
    />
  );
};

export default Loading;
