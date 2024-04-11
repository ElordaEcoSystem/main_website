import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockYears extends Schema.Component {
  collectionName: 'components_block_years';
  info: {
    displayName: 'Years';
    icon: 'clock';
    description: '';
  };
  attributes: {
    year: Attribute.Integer;
    number: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.years': BlockYears;
    }
  }
}
