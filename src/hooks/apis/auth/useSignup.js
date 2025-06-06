import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/apis/auth';

export const useSignup = () => {
   const {isPending, isSuccess, error, mutate: signUpMutation} = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
        console.log('Sucessfully Signed Up',data);
    },
    onError: (error) => {
        console.log('Failed to sign up',error);
    }
   });
   return {
    isPending,
    isSuccess,
    error,
    signUpMutation
   };
};