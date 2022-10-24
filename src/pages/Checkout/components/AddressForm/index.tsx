import { useFormContext } from 'react-hook-form'
import { AddressFormWrapper } from './style'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormWrapper>
      <input
        type="text"
        id="cep"
        placeholder="CEP"
        {...register('address.cep')}
      />
      <input
        type="text"
        id="rua"
        placeholder="Rua"
        {...register('address.rua')}
      />
      <div>
        <input
          type="text"
          id="num"
          placeholder="Número"
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
          style={{ textTransform: 'uppercase' }}
          {...register('address.uf')}
        />
      </div>
    </AddressFormWrapper>
  )
}
