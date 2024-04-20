import { useMutation, useQueryClient } from '@tanstack/react-query';
import { creatEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

function useEditCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => creatEditCabin(newCabinData, id),

    onSuccess: () => {
      toast.success('Cabin edited');
      queryClient.invalidateQueries({
        queryKey: 'cabins',
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isEditing, editCabin };
}

export default useEditCabin;
