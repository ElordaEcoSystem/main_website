import type { Schema, Attribute } from '@strapi/strapi';

export interface PerformItemsPerformItem extends Schema.Component {
  collectionName: 'components_perform_items_perform_items';
  info: {
    displayName: 'perform_item';
    icon: 'alien';
  };
  attributes: {
    number: Attribute.String;
    unit: Attribute.String;
    icon: Attribute.String;
    label: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'perform-items.perform-item': PerformItemsPerformItem;
    }
  }
}
