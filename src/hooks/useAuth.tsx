import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const useAuth = () => {
  const { user, loading, initialSignup } = useSelector((state: RootState) => state.auth);
  console.log(user);
  return { isAuthenticated: !!user, loading, initialSignup };
};

export default useAuth;
