import { useForm } from 'react-hook-form';
import Input from '../Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { subscribeHellfireClub } from '../../services/api';
import './styles.css';

export interface IForm {
  name: string,
  email: string,
  level: number,
  character: string,
}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  level: yup.number().positive('O número deve ser maior que 0').integer('O valor deve ser inteiro').required('Level obrigatório'),
  character: yup.string().required('Personagem obrigatório'),
}).required();

export default function Form() {
  const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm<IForm>({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  const onSubmit = (data: IForm) => {
    if(isValid) {
      const subscription = {
        character: data.character,
        email: data.email,
        level: data.level.toString(),
        name: data.name,
      }
      subscribeHellfireClub(subscription)
        .then(subscriptionId => {
          alert(`Usuário ${subscriptionId} salvo com sucesso!`);
          reset();
        }).catch(err => {
          console.error(`Usuário não cadastrado. Erro ${err}`);
        });
    }
  };

  return (
    <section id="section-form" className="container">
      <h2>O Clube Dungeons & Dragons</h2>
      <p>
        Para deter Vecna, os heróis de Stranger Things também precisam de
        você. O Clube de D&D mais famoso de Hawkings está com vagas abertas
        para sua próxima aventura. Se você é destemido, gosta de desafios e
        não tem medo de rodar o D20, chegou a hora de se inscrever para fazer
        parte da nova campanha.
      </p>

      <div className="form-content">
        <h3>Entre para o clube de D&D e tenha experiências de <span>outro mundo</span></h3>

        <div className="form-container">
          <form id="formSubmitSubscriber" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="name"
            text="Nome completo"
            register={register}
            required
            errorMessage={errors.name?.message}
          />

          <Input
            label="email"
            text="E-mail"
            register={register}
            required
            errorMessage={errors.email?.message}
          />

          <Input
            label="level"
            text="Level"
            register={register}
            type="number"
            min={1}
            required
            errorMessage={errors.level?.message}
          />

          <label htmlFor="character">Personagem</label>
          <textarea cols={30} rows={10} {...register("character")} id="txtCharacter" required></textarea>
          { errors.character && <span className="error-text">{errors.character?.message}</span>}

            <button type="submit" id="btnSubscribe" disabled={!isValid}>Me inscrever</button>
          </form>
        </div>
      </div>
    </section>
  )
}
