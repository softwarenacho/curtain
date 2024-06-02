import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import Curtain from '../components/index';

describe('Greeting component', () => {
  const control = false;
  const setControl = () => {};
  it('Greeting component renders correctly', () => {
    const component = renderer.create(
      <Curtain control={control} setControl={setControl} props={{}}>
        <h1>Content</h1>
      </Curtain>,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(' prop working', () => {
    const component = renderer.create(
      <Curtain
        control={control}
        setControl={setControl}
        props={{ backgroundColor: 'white' }}
      >
        <h1>Content</h1>
      </Curtain>,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
