import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser as updateCurrentUser } from '../../services/apiAuth';
import toast from 'react-hot-toast';

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: ({ user }) => {
      toast.success('User edited');
      queryClient.setQueryData(['user'], user);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateUser, isUpdating };
}

export default useUpdateUser;
