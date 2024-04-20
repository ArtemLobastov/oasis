import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    //end session and remove user from local storage
    mutationFn: logoutApi,
    onSuccess: () => {
      //remove user from cash
      queryClient.removeQueries();
      navigate('/login', { replace: true });
      toast.success('logged out');
    },
    onError: (err) => {
      console.error('error', err);
      toast.error('Login failed');
    },
  });
  return { logout, isLoading };
}
