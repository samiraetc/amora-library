import { configure, render } from '@testing-library/react';
import React from 'react';
import <%= classify(name) %>, {
  COMPONENT_ID,
} from './../<%= classify(name) %>';

configure({ testIdAttribute: 'id' });

describe('<%= classify(name) %> tests', () => {
  test('should render properly', () => {
    const { getByTestId } = render(
      <<%= classify(name) %>>
      </<%= classify(name) %>>
    );

    const component = getByTestId(COMPONENT_ID);
    expect(component).toBeInTheDocument();
  });
});
