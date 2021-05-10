import React, { useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles, Scope }  from '@unform/core';
import ContentHeader from '../../components/ContentHeader';
// import { Container_CS } from './styles';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import {Container, Row, FormLabel} from 'react-bootstrap';

import Input from '../../components/Form/Input'

const Students: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    async function handleSubmit(data: any) {
        if (data.name === "" ) {
            //formRef.current?.setFieldError('name', 'O nome é obrigatório');
            
            try {
                const schema = Yup.object().shape({
                    name: Yup.string().required('O nome é obeigatório'),
                    email: Yup.string()
                        .email('Digite um e-mail válido')
                        .required('O e-mail é obrigatório'),
                    address: Yup.object().shape({
                        city: Yup.string()
                        .min(3, 'No mínimo 3 caractéres')
                        .required('Acidade é obrigatória')
                    })
                });
                 
                await schema.validate(data, {
                    abortEarly: false
                });

                console.log(data);

                formRef.current?.setErrors({});

                //reset();
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errorMessages = {} as any;
                    
                    err.inner.forEach((error:Yup.ValidationError) => {
                        errorMessages[error.path!] = error.message;
                    });
                    
                    formRef.current?.setErrors(errorMessages);
                }
            }
        }
    }

    // const initialData = {
    //     email: 'tos@icomp.ufam.edu.br',
    //     address: {
    //         city: "Manaus"
    //     }
    // }

    useEffect(() => {
        setTimeout(() => {
            formRef.current?.setData({
                name: 'Thiago Oliveira',
                email: 'tos@icomp.ufam.edu.br',
                address: {
                    city: 'Manaus'
                }
            });
        }, 2000)
    }, []);

    return (
        <Container>
            <Row>
                
            </Row>
            <ContentHeader title="Cadastro de Alunos" lineColor="#FFF"> 
            </ContentHeader>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <Row>
                    <FormLabel>Nome:</FormLabel>
                    <Input name="name"> </Input>
                    <FormLabel>Nome Social:</FormLabel>
                    <Input name="social_name"> </Input>
                </Row>
                    
                <Row>
                    <FormLabel>Email:</FormLabel>
                    <Input name="email"> </Input>
                    <FormLabel>Telefone:</FormLabel>
                    <Input name="phone"> </Input>
                    <FormLabel>Matrícula:</FormLabel>
                    <Input name="register"> </Input>
                    
                </Row>

                <Row>
                    <FormLabel>Data de nascimento:</FormLabel>
                    <Input name="birth"> </Input>
                    <FormLabel>Gênero:</FormLabel>
                    <Input name="gender"> </Input>
                    <FormLabel>Estado Civil:</FormLabel>
                    <Input name="marital"> </Input>
                </Row>

                <Row>
                    <FormLabel>Username:</FormLabel>
                    <Input name="username"> </Input>
                    <FormLabel>Senha:</FormLabel>
                    <Input name="password"> </Input>
                </Row>

                <Scope path="address">
                    <Input name="number"> </Input>
                    <Input name="neighborhood"> </Input>
                    <Input name="state"> </Input>
                    <Input name="city"> </Input>
                    <Input name="complement"> </Input>
                    <Input name="cep"> </Input>
                    <Input name="street"> </Input>
                </Scope>

                <Button variant="primary" type="submit"> Enviar </Button> {' '}
            </Form>
        </Container>
    );
}

export default Students;