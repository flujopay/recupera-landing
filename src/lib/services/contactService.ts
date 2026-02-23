import { apiForm } from "@/api";
import { useMutation } from "@tanstack/react-query";

const postContactForm = async (data: FormData) => {
  const res = await apiForm.post("users/send_contact_info/", data);
  return res.data;
};

export const usePostContactForm = () => {
  const { mutate: postContactFormMutate, isPending: isLoadingPostContactForm } =
    useMutation({
      mutationFn: (user: FormData) => postContactForm(user),
    });

  return {
    postContactFormMutate,
    isLoadingPostContactForm,
  };
};
