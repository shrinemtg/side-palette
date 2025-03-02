import React from 'react';
import { Section, List, ListItem } from '@shadcn/ui';

const Services: React.FC = () => {
  return (
    <Section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">私たちのサービス</h2>
      <List className="mt-4">
        <ListItem>ウェブデザイン</ListItem>
        <ListItem>グラフィックデザイン</ListItem>
        <ListItem>ブランディング</ListItem>
      </List>
    </Section>
  );
};

export default Services;