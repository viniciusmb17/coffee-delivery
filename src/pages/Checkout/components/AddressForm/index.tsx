import { useFormContext } from 'react-hook-form'
import { AddressFormWrapper } from './style'
import { ErrorMessage } from '@hookform/error-message'

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <AddressFormWrapper>
      <input
        type="text"
        id="cep"
        placeholder="CEP"
        required
        {...register('address.cep')}
      />
      <ErrorMessage errors={errors} name="address.cep" />
      <input
        type="text"
        id="rua"
        placeholder="Rua"
        required
        {...register('address.rua')}
      />
      <ErrorMessage errors={errors} name="address.rua" />
      <div>
        <input
          type="text"
          id="num"
          placeholder="Número"
          required
          {...register('address.num')}
        />
        <input
          type="text"
          id="complemento"
          placeholder="Complemento (Opcional)"
          {...register('address.complemento')}
        />
      </div>
      <div>
        <input
          type="text"
          id="bairro"
          placeholder="Bairro"
          required
          {...register('address.bairro')}
        />
        <input
          type="text"
          id="cidade"
          placeholder="Cidade"
          {...register('address.cidade')}
        />
        <input
          type="text"
          id="uf"
          placeholder="UF"
          required
          style={{ textTransform: 'uppercase' }}
          {...register('address.uf')}
        />
      </div>
    </AddressFormWrapper>
  )
}
