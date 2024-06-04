import { useRouter } from 'next/navigation';

const usePrev = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return { goBack };
};

export default usePrev;
