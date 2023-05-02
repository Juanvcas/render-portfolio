import Head from 'next/head';
import { useState, useRef } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { endpoints } from '@/services/api/endpoints';
import { MainBanner } from '@/components/MainBanner';
import s from '@/styles/pages/Contact.module.css';

export default function Contact() {
	const [types, setTypes] = useState([]);

	useFetch(endpoints.types.getAllTypes, setTypes);

	const [message, setMessage] = useState(false);
	const form = useRef();

	const submit = async (e) => {
		e.preventDefault();

		const data = {
			name: form.current.name.value,
			email: form.current.email.value,
			phone: form.current.phone.value,
			type: form.current.type.value,
			message: form.current.message.value,
		};

		await fetch(`/api/contact`, {
			method: 'POST',
			headers: {
				ContentType: 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.status === 200) {
					setMessage({
						error: false,
						text: '¡El mensaje a sido enviado con éxito!',
					});
				} else {
					setMessage({
						error: true,
						text: 'Hubo un error al enviar el mensaje, por favor inténtalo de nuevo mas tarde',
					});
				}
			})
			.catch((err) =>
				setMessage({
					error: true,
					text: 'Hubo un error al enviar el mensaje, por favor inténtalo de nuevo mas tarde',
				})
			);
	};

	return (
		<>
			<Head>
				<title>Contacto</title>
			</Head>
			<main className={s.main}>
				<section className={s.main_banner}>
					<MainBanner
						title={'CONTACTO'}
						subtitle={'Escríbeme para resolver todas tus dudas'}
						image={{
							src: 'https://i.postimg.cc/G3S7TcLX/RC4p-001.jpg',
							alt: 'Interior de habitación de una cabaña glamping, con cama y dos sofas frente a un ventanal',
						}}
					/>
				</section>
				<span className='separator'></span>
				<section className={s.main_form}>
					<form
						ref={form}
						id='form'
						className={s.form}
						onSubmit={(e) => submit(e)}
					>
						<label>
							<span>Nombre:</span>
							<input id={'name'} type={'text'} name={'name'} required />
						</label>
						<label>
							<span>Email:</span>
							<input id={'email'} type={'email'} name={'email'} required />
						</label>
						<label>
							<span>Teléfono:</span>
							<input
								id={'number'}
								type={'tel'}
								name={'phone'}
								placeholder={'+57 XXX...'}
							/>
						</label>
						<label>
							<span>Tipo de proyecto:</span>
							<select id='type' name='type' className={s.form_select}>
								{types.length
									? types.map((type) => (
											<option key={type.id} value={type.title}>
												{type.title}
											</option>
									  ))
									: null}
								<option value={'Otro'}>Otro</option>
							</select>
						</label>
						<label>
							<span>Mensaje:</span>
							<textarea
								id={'message'}
								name={'message'}
								placeholder={'Describe el proyecto o la duda que tengas'}
								required
							/>
						</label>
						<input
							id={'submit'}
							type={'submit'}
							value={'Enviar'}
							className={s.form_submit}
						/>
					</form>
				</section>
				{message ? (
					<div
						className={s.form_response}
						style={{ backgroundColor: message.error ? 'red' : 'green' }}
					>
						<p>{message.text}</p>
					</div>
				) : null}
				<span className='separator'></span>
			</main>
		</>
	);
}
