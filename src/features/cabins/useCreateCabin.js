import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { creatEditCabin } from '../../services/apiCabins';

function useCreateCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: (data) => creatEditCabin(data),
    onSuccess: () => {
      toast.success('Cabin created');
      queryClient.invalidateQueries({
        queryKey: 'cabins',
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isCreating, createCabin };
}

export default useCreateCabin;
