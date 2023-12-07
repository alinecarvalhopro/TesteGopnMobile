import * as yup from 'yup';

export const createCardSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  description: yup.string().required('A descrição é obrigatória'),
});