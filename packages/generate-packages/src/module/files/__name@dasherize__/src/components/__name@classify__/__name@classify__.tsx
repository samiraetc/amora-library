import React, { FC } from 'react';

export const COMPONENT_ID = '<%= dasherize(name) %>';
export type <%= classify(name) %>Props = {
  /**
   * Component unique identification
   */
  id?: string;
};

const <%= classify(name) %>: FC<<%= classify(name) %>Props> = ({
  id = COMPONENT_ID,
}) => (<section id={id}>Sample component</section>);

export default <%= classify(name) %>;
