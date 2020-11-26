import React from "react";
import styled from "@emotion/styled";
import { Button, Form } from "semantic-ui-react";
import { FieldSet } from "./FieldSet";
import { useForm } from "react-hook-form";

const fieldWidth = 8;

export const Recipe = () => {
    const { register, handleSubmit, errors } = useForm();

    const submitForm = formData => {
        console.log(formData);
    };

    return (
        <Container>
            <h1>New recipe</h1>
            <Form size="large" onSubmit={handleSubmit(submitForm)}>
                <FieldSet label="Basics">
                    <Form.Field width={fieldWidth} error={!!errors.name}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            ref={register({ required: "Recipe name is required." })}
                        />
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </Form.Field>
                    <Form.Field width={fieldWidth} error={!!errors.description}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            ref={register({ maxLength: 100 })}
                        />
                        {errors.description && (
                            <ErrorMessage>
                                Description cannot be longer than 100 characters.
                            </ErrorMessage>
                        )}
                    </Form.Field>
                    <Form.Field width={fieldWidth} error={!!errors.amount}>
                        <label htmlFor="amount">Servings</label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            ref={register({ max: 10 })}
                        />
                        {errors.amount && (
                            <ErrorMessage>Maximum number of servings is 10.</ErrorMessage>
                        )}
                    </Form.Field>
                </FieldSet>

                <Form.Field>
                    <Button>Save</Button>
                </Form.Field>
            </Form>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 50px;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;

ErrorMessage.defaultProps = { role: "alert" };