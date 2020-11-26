import React from "react";
import styled from "@emotion/styled";
import { Button, Form } from "semantic-ui-react";
import { FieldSet } from "./FieldSet";
import { useForm } from "react-hook-form";

const fieldWidth = 8;

export const Recipe = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = formData => {
    console.log(formData);
  };

  return (
    <Container>
      <h1>New recipe</h1>
      <Form size="large" onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Basics">
          <Form.Field width={fieldWidth}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" ref={register} />
          </Form.Field>
          <Form.Field width={fieldWidth}>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" ref={register} />
          </Form.Field>
          <Form.Field width={fieldWidth}>
            <label htmlFor="amount">Servings</label>
            <input type="number" name="amount" id="amount" ref={register} />
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