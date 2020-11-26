import React from "react";
import styled from "@emotion/styled";
import { Button, Form } from "semantic-ui-react";
import { FieldSet } from "./FieldSet";

const fieldWidth = 8;

export const Recipe = () => {
    return (
        <Container>
            <h1>New recipe</h1>
            <Form size="large">
                <FieldSet label="Basics">
                    <Form.Field width={fieldWidth}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </Form.Field>
                    <Form.Field width={fieldWidth}>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" />
                    </Form.Field>
                    <Form.Field width={fieldWidth}>
                        <label htmlFor="amount">Servings</label>
                        <input type="number" name="amount" id="amount" />
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