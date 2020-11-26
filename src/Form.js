import React from "react";
import styled from "@emotion/styled";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";
import { FieldSet } from "./FieldSet";
import { NumberInput } from "./NumberInput"

const fieldWidth = 8;

export const Recipe = () => {
    const { register, handleSubmit, errors, control } = useForm();

    const { fields, append, remove } = useFieldArray({
        name: "ingredients",
        control
    });

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
                        <Controller
                            control={control}
                            name="amount"
                            defaultValue={0}
                            rules={{ max: 10 }}
                            render={({ value, onChange }) => <NumberInput id="amount" onChange={onChange} checked={value} />}
                        />
                        {errors.amount && (
                            <ErrorMessage>Maximum number of servings is 10.</ErrorMessage>
                        )}
                    </Form.Field>
                </FieldSet>
                <FieldSet label="Ingredients">
                    {fields.map((field, index) => {
                        return (
                            <Row key={field.id}>
                                <Form.Field width={8}>
                                    <label htmlFor={`ingredients[${index}].name`}>Name</label>
                                    <input
                                        type="text"
                                        ref={register()}
                                        name={`ingredients[${index}].name`}
                                        id={`ingredients[${index}].name`}
                                    />
                                </Form.Field>
                                <Form.Field width={6}>
                                    <label htmlFor={`ingredients[${index}].amount`}>Amount</label>
                                    <input
                                        type="text"
                                        ref={register()}
                                        defaultValue={field.amount}
                                        name={`ingredients[${index}].amount`}
                                        id={`ingredients[${index}].amount`}
                                    />
                                </Form.Field>
                                <Button type="button" onClick={() => remove(index)}>&#8722;</Button>
                            </Row>
                        );
                    })}
                    <Button
                        type="button"
                        onClick={() => append({ name: "", amount: "" })}
                    >
                        Add ingredient
          </Button>
                </FieldSet>
                <Form.Field>
                    <Button>Save</Button>
                </Form.Field>
            </Form>
        </Container>);
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

const Row = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 20px !important;
  }
  .ui.button {
    margin: 10px 0 0 8px;
  }
`;

ErrorMessage.defaultProps = { role: "alert" };