// import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function CreatePost() {
    const navigate = useNavigate()
    const initialValue = {
        title: '',
        postText: '',
        username: ''
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().required()
    })
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/post", data).then(() => {
            navigate('/')
        });
    }

  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Title:</label>
                <ErrorMessage name='title' component='span' />
                <Field
                    id="inputCreatePost"
                    name="title"
                    placeholder="ex. Title"
                />
                <label>Post:</label>
                <ErrorMessage name='postText' component='span' />
                <Field
                    id="inputCreatePost"
                    name="postText"
                    placeholder="ex. Post"
                />
                <label>username:</label>
                <ErrorMessage name='username' component='span' />
                <Field
                    id="inputCreatePost"
                    name="username"
                    placeholder="ex. @john1234"
                />
                <button type='submit'>Create Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost