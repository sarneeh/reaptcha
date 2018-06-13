import React, { Fragment } from 'react';
import { Formik, Form } from 'formik';
import qs from 'query-string';

import { H2, H3 } from '../components/header';
import Container from '../components/container';
import Button from '../components/button';
import Radio from '../components/radio';
import { NavLink } from '../components/link';
import { FormGroup } from '../components/form';

const initialConfig = {
  theme: 'light',
  size: 'normal',
  render: 'automatic'
};

const Home = () => (
  <Formik
    onSubmit={() => {}}
    initialValues={initialConfig}
    render={({ values }) => (
      <Fragment>
        <H2>Configuration</H2>
        <Container>
          <Form>
            <FormGroup>
              <H3>Theme</H3>
              <Radio id="theme-1" name="theme" label="Light" value="light" />
              <Radio id="theme-2" name="theme" label="Dark" value="dark" />
            </FormGroup>
            <FormGroup>
              <H3>Size</H3>
              <Radio id="size-1" name="size" label="Normal" value="normal" />
              <Radio id="size-2" name="size" label="Compact" value="compact" />
              <Radio
                id="size-3"
                name="size"
                label="Invisible"
                value="invisible"
              />
            </FormGroup>
            <FormGroup>
              <H3>Render</H3>
              <Radio
                id="render-1"
                name="render"
                label="Automatic"
                value="automatic"
              />
              <Radio
                id="render-2"
                name="render"
                label="Explicit"
                value="explicit"
              />
            </FormGroup>
          </Form>
        </Container>
        <Container>
          <NavLink to={`/example?${qs.stringify(values)}`}>
            <Button>Show Example</Button>
          </NavLink>
        </Container>
      </Fragment>
    )}
  />
);

export default Home;