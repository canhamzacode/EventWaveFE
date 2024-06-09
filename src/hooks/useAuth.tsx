import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const useAuth = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  console.log(user);
  return { isAuthenticated: !!user, loading };
};

export default useAuth;
