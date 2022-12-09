import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Homepage from './homepage';






const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);




const LoginForm = ({ loged, fetching, onLogin, token }) => {


    const initialCredentials = {
        email: '',
        password: ''
    }

    return (

            <Formik
                // *** Initial values that the form will take
                initialValues={initialCredentials}
                // *** Yup Validation Schema ***
                validationSchema={loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    onLogin(values.email, values.password)

                }}
            >
                {/* We obtain props from Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type='password'
                        />
                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit">Login</button>
                        {fetching ? (
                            <Box sx={{ width: 300 }}>
                                <Skeleton />
                                <Skeleton animation="wave" />
                                <Skeleton animation={false} />
                            </Box>) : null}
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>


                )}
            </Formik>


    );
};


LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,

};


export default LoginForm;
