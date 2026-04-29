import { api, apiForm } from '@/api'
import { useMutation } from '@tanstack/react-query'
import { ContactFormRequest } from '../types/contact'

const postContactForm = async (data: ContactFormRequest) => {
  const res = await api.post('users/send_contact_info/', data)
  return res.data
}

export const usePostContactForm = () => {
  const { mutate: postContactFormMutate, isPending: isLoadingPostContactForm } = useMutation({
    mutationFn: (user: ContactFormRequest) => postContactForm(user),
  })

  return {
    postContactFormMutate,
    isLoadingPostContactForm,
  }
}

const postTestn8n = async (data: any) => {
  const res = await api.post('https://n8n.somossena.com/webhook/leads', data)
  return res.data
}

export const usePostTestn8n = () => {
  const { mutate: postTestn8nMutate, isPending: isLoadingPostTestn8n } = useMutation({
    mutationFn: (data: any) => postTestn8n(data),
  })

  return {
    postTestn8nMutate,
    isLoadingPostTestn8n,
  }
}
